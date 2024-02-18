

function Discription({title, para}){
    return <div className="shadow-lg w-auto bg-white flex flex-col justify-center items-center py-[2rem]">
        <span className="flex w-90p mb-[1rem] font-medium text-[1.5rem]">{title}</span>
        <span className="flex w-90p font-normal text-justify text-[0.97rem]">{para}</span>
    </div>
}

export default Discription;