

function Insights({title, value}){

    return <div className="flex flex-col mr-[1.5rem]">
        <div className="font-bold text-[1.3rem] ">
            {value}
        </div>
        <div className="text-[0.6rem] text-zinc-400">
            {title}
        </div>

    </div>
}

export default Insights;