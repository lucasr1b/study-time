import { NextApiRequest, NextApiResponse } from 'next';
import connectToDB from '../lib/mongodb';
import { updateSubjectForUser, createStudyTrackerAndAddToUser, deleteStudyTrackerAndRemoveFromUser } from '../services/subjectService';
import { getUserFromSession, isUserLoggedIn, sendErrorResponse, sendSuccessCreatedResponse, sendSuccessNoContentResponse, sendSuccessResponse } from '../utils/helpers';
import User from '../models/User';
import Subject from '../models/Subject';

connectToDB();

// @Desc Get all subjects for user
// @Route /api/subjects
// @Method GET

export const getAllSubjectsController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const id = getUserFromSession(req)._id;
      const user = await User.findOne({ _id: id });
      const subjects = await Subject.find({ subject_id: { $in: user.subjects } });
      sendSuccessResponse(res, 'All subjects fetched', { subjects });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subjects not fetched', err.message);
  }
};

// @Desc Add new subject to user
// @Route /api/subjects/add
// @Method POST

export const addSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const user = getUserFromSession(req);
      const addedSubject = await updateSubjectForUser(id, user._id, 'add');
      await createStudyTrackerAndAddToUser(id, user._id);
      sendSuccessCreatedResponse(res, 'Subject added', { addedSubject });
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not added', err.message);
  }
};

// @Desc Remove subject from user
// @Route /api/subjects/remove
// @Method POST

export const removeSubjectController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (isUserLoggedIn(req, res)) {
      const { id } = req.body;
      const user = getUserFromSession(req);
      await updateSubjectForUser(id, user._id, 'remove');
      await deleteStudyTrackerAndRemoveFromUser(id, user._id);
      sendSuccessNoContentResponse(res);
    }
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not removed', err.message);
  }
};

// @Desc Get all subjects from subject list
// @Route /api/subjects/list
// @Method GET

export const getSubjectListController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const subjects = await Subject.find();
    sendSuccessResponse(res, 'Subject list fetched', { subjects });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject list not fetched', err.message);
  }
};

// @Desc Get a subject from subjects list
// @Route /api/subjects/list/:id
// @Method GET

export const getSubjectListItemController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const subject = await Subject.findOne({ subject_id: id });
    sendSuccessResponse(res, 'Subject fetched', { subject });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not fetched', err.message);
  }
};

// @Desc Get subjects from subjects list with board filter
// @Route /api/subjects/list/:board
// @Method GET

export const getSubjectListItemFromExamBoardController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { board } = req.query;
    const boardId = board?.[0] ?? '';
    const levelId = board?.[1] ?? '';

    if (levelId === '') {
      const subjects = await Subject.find({ board_id: boardId });
      sendSuccessResponse(res, 'Subjects fetched', { subjects });
    } else {
      const subjects = await Subject.find({ board_id: boardId, level_id: levelId });
      sendSuccessResponse(res, 'Subjects fetched', { subjects });
    }

  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not fetched', err.message);
  }
};

// @Desc Get subjects from subjects list with board and level filter
// @Route /api/subjects/list/:board/:level
// @Method GET

export const getSubjectListItemFromExamBoardLevelController = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { boardId, levelId } = req.query;
    const subjects = await Subject.find({ board_id: boardId, level_id: levelId });
    sendSuccessResponse(res, 'Subjects fetched', { subjects });
  } catch (err: any) {
    console.error(err);
    sendErrorResponse(res, 'Subject not fetched', err.message);
  }
};