import airport from '../assets/flight.png';
import highway from '../assets/highway.png';

const Mark = ({type, distance, name}) => {
    return <div className='w-dyn py-[0.5rem] flex flex-row justify-between border-b-[1.5px] border-zinc-400 '>
        <div className="flex flex-row justify-center items-center">
            <img src={type === "Airport"? airport : highway} alr={type} />
            <span className='flex pl-2 text-blue-600 font-medium text-[1.1rem]'>{type}</span>
        </div>
        <div className='flex flex-col items-end'>
            <span className='font-medium text-[1.2rem]'>{distance}km</span>
            <span className='text-[0.7rem] text-zinc-400'>{name}</span>
        </div>
    </div>
}

function LandMarks({landMarks}){
    return <div className='shadow-lg bg-white w-auto h-auto py-[1rem] pb-[2.2rem] flex flex-col justify-center items-center'>
        <span className='flex w-90p font-medium text-[1.4rem]'> LandMarks </span>
        <div className='w-full flex justify-center items-center flex-col'>
            {landMarks.map((l) =><Mark key={l.id} type={l.type} distance={l.distance} name={l.name} /> )}
        </div>
    </div>
}

export default LandMarks;