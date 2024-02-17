

function Discription({title, para}){
    return <div className="shadow-lg w-auto bg-white flex flex-col justify-center items-center">
        <span className="flex w-90p my-[1rem] font-medium text-[1.5rem]">{title}</span>
        <span className="flex w-90p mb-[1rem] font-normal text-justify text-[0.97rem]">{para}</span>
    </div>
}

export default Discription;