


function ProgressBar({ val, max }) {
    const progress = (val/max) * 100
    return <div className="w-[273px]">
        <div className="w-full flex flex-row justify-between items-end">
            <span className="font-bold text-blue-500 text-[1.45rem]">Rs.{val.toLocaleString('en-IN')}</span>
            <span className="text-zinc-400 text-[0.95rem] mb-[0.2rem]">Rs.{max.toLocaleString('en-IN')}</span>
        </div>
        <div className="w-full h-[0.4rem]  bg-gray-300">
            <div className="h-full bg-blue-500" style={{ width: `${(val/max) * 100}%` }}></div>
        </div>
    </div>
}

export default ProgressBar;