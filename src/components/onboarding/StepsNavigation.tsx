type StepNavigationProps = {
  step: number;
  canProceed: boolean;
  previousStep: () => void;
  nextStep: () => void;
  finishOnboarding: () => void;
};

const StepsNavigation = (props: StepNavigationProps) => {
  return (
    <div className='flex justify-center gap-2'>
      {props.step > 1 && (
        <button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg' onClick={props.previousStep}>Previous</button>
      )}
      {!props.canProceed ? (
        props.step === 4 ? (
          <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Finish</button>
        ) : (
          <button className='bg-accent border border-accent rounded-lg py-2 px-6 text-text-secondary font-medium hover:cursor-default text-lg'>Next</button>
        )) : (
        props.step === 4 ? (
          < button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={props.finishOnboarding}>Finish</button>
        ) : (
          < button className='bg-primary border border-accent rounded-lg py-2 px-6 font-medium hover:bg-accent text-lg transition ease-in' onClick={props.nextStep}>Next</button>
        ))}
    </div >
  );
};

export default StepsNavigation;