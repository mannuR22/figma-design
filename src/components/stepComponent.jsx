
import React from 'react';
import tickImage from '../assets/checkNum.png'; // replace with your actual image path
import arrowImage from '../assets/arrowh.png'; // replace with your actual image path

function StepComponent({currStep}) {
    return (
        <div className="flex items-center">

            <div className="flex flex-row w-[2.3rem] h-[2rem] justify-center items-center border-b-[2px] border-zinc-900">
                {currStep >= 1 && <img className='w-auto h-1/2 mt-[0.2rem]' src={tickImage} alt="Step completed" />} 
                <span className='ml-[0.2rem] font-medium text-[1.2rem]'>1</span>
            </div>
            <img className='w-[5rem] h-auto' src={arrowImage} alt="Next step" />
            <div className={`flex flex-row w-[2.3rem] h-[2rem] justify-center items-center border-b-[2px] border-zinc-${currStep >= 2? '900': '400'}`}>
                {currStep >= 2 && <img className='w-auto h-1/2 mt-[0.2rem]' src={tickImage} alt="Step completed" />} 
                <span className={`${currStep >= 2? 'ml-[0.2rem]': 'text-zinc-400'} font-medium text-[1.2rem]`}>2</span>
            </div>
            
            <img className='w-[5rem] h-auto' src={arrowImage} alt="Next step" />
            <div className={`flex flex-row w-[2.3rem] h-[2rem] justify-center items-center border-b-[2px] border-zinc-${currStep >= 3? '900': '400'}`}>
                {currStep >= 3 && <img className='w-auto h-1/2 mt-[0.2rem]' src={tickImage} alt="Step completed" />} 
                <span className={`${currStep >= 2? 'ml-[0.2rem]': 'text-zinc-400'} font-medium text-[1.2rem]`}>3</span>
            </div>
        </div>
    );
};

export default StepComponent;
