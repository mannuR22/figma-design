

function Feature({imgLink, type}){
    return <div className="h-[1.1rem] bg-zinc-300 flex flex-row justify-center items-center mr-[0.6rem] px-[0.4rem]">
        <img className="h-[0.9rem] w-auto" src={imgLink} alt="feature" />
        <span className="text-[0.6rem] text-zinc-500 ml-[0.3rem]"> {type} </span>
    </div>
}

export default Feature;