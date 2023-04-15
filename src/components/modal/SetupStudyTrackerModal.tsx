import axios from 'axios';
import { useState } from 'react';

type StudyTrackerModalProps = {
  tracker: any;
  closeModal: () => void;
  updateTrackers: (tracker: any) => void;
}

const StudyTrackerModal = (props: StudyTrackerModalProps) => {

  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (e: any) => {
    const hours = parseInt(e.target.value);
    setHours(hours)
  }

  const handleMinutesChange = (e: any) => {
    const minutes = parseInt(e.target.value);
    setMinutes(minutes)
  }

  const setupTracker = async (e: any) => {
    e.preventDefault();
    await axios.post(`/api/study/trackers/setup`, { id: props.tracker.tracker_id, hours, minutes })
      .then((res) => {
        props.updateTrackers(res.data)
        props.closeModal();
      })
  }

  return (
    <>
      <div className='fixed z-40 flex items-center justify-center bg-black opacity-20 w-full h-full top-0 left-0' onClick={props.closeModal}></div>
      <div className='fixed z-50 flex flex-col w-fit h-auto p-4 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
        <h1 className='font-semibold'>Setup study tracker</h1>
        <form className='flex flex-row items-baseline space-y-4 gap-4 h-full' onSubmit={setupTracker}>
          <div className='mt-2 flex flex-col'>
            <div className="inline-flex border rounded-md p-2">
              <div className='flex gap-2 items-center'>
                <h3>{props.tracker.subject_icon} {props.tracker.subject_name}:</h3>
                <div>
                  <select name="" id="hours" className="px-2 outline-none appearance-none bg-transparent border rounded" onChange={handleHoursChange}>
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                    <option value="4">4h</option>
                    <option value="5">5h</option>
                    <option value="6">6h</option>
                    <option value="7">7h</option>
                    <option value="8">8h</option>
                    <option value="9">9h</option>
                    <option value="10">10h</option>
                    <option value="11">11h</option>
                    <option value="12">12h</option>
                    <option value="13">13h</option>
                    <option value="14">14h</option>
                    <option value="15">15h</option>
                    <option value="16">16h</option>
                    <option value="17">17h</option>
                    <option value="18">18h</option>
                    <option value="19">19h</option>
                    <option value="20">20h</option>
                    <option value="21">21h</option>
                    <option value="22">22h</option>
                    <option value="23">23h</option>
                    <option value="24">24h</option>
                  </select>
                  <span className="px-1">:</span>
                  <select name="" id="minutes" className="px-2 outline-none appearance-none bg-transparent border rounded" onChange={handleMinutesChange}>
                    <option value="0">0m</option>
                    <option value="15">15m</option>
                    <option value="30">30m</option>
                    <option value="45">45m</option>
                  </select>
                  <span className="px-1 ml-1">per week</span>
                </div>
              </div>
            </div>
            <div className='flex gap-2 mt-2'>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm' onClick={props.closeModal}>Cancel</button>
              <button className='bg-white border border-zinc-200 rounded-md h-8 w-fit px-3 hover:bg-zinc-200 text-sm'>Save</button>
            </div>
          </div>
        </form>
      </div >
    </>
  )
}

export default StudyTrackerModal