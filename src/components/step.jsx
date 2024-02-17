
import box from '../assets/choiceBox.png';
import check from '../assets/choiced.png';
import downImg from '../assets/download.png'
function Step({id, title, subText ,completionText, state, setState}){

    let currentDate = new Date();

    const handler = () =>{
        console.log("clicked");
        setState(state.map((step, index) => {
            if (index === id && step.state === 1) {

                return { ...step, date: currentDate.toLocaleDateString('en-US') , state: 2 };

            
            }else if(index === id+1 && step.state === 0){
                return { ...step, state: 1 };
            } else {
              return step;
            }
          }));
          
    }
    return <div className='shadow-lg bg-white w-full flex flex-row aspect-[458/156] h-auto py-[1.5rem] px-[1.4rem] justify-between'>
        <div className='w-[2rem]'>
            <img className='w-auto 'src={state[id].state === 2? check : box} alt="checkbox" />

        </div>
        <div className='flex-grow pl-[0.5rem]'>
            <div className='felx flex-col'>
                <div className={`${
                    state[id].state === 0? 'text-zinc-400':
                    state[id].state === 1? 'font-bold':
                    'font-normal'
                } text-[1.1rem]`}>{title}</div>
                {
                    !subText? "":
                    state[id].state === 2?
                    <div className='text-[0.82rem] text-blue-300'>{subText}</div>: ""
                }
                
            </div>
            {
                state[id].state === 2 && <div className='text-blue-600 text-[1.6rem] font-bold'>{completionText}</div>
            }
            
        </div>
        <div className='flex flex-col justify-between items-end'>
            <div style={{visibility: `${state[id].state === 2 && state[id].date? 'visible': 'hidden'}`}}>{state[id].date} </div>
            {
                state[id].state === 2?
                <button type="button" className="bg-transparent text-blue-500 text-[14px] border border-blue-500 font-light py-[0.9rem] px-[1.2rem] flex flex-row justify-center items-center space-x-2">
                    {state[id].secondaryButtonText}
                    <img className='h-[13px] w-auto ml-[0.7rem]' src={downImg} alt="download" />
                </button>:
                
                <button onClick={handler} disabled={state[id].state === 0? true: false} className="bg-blue-500 text-[14px] text-white font-light py-[0.9rem] px-[2rem] disabled:bg-blue-200 disabled:cursor-not-allowed">
                        Complete
                </button>
            }
        </div>
    </div>
}

export default Step;