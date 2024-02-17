
function Map({ mapURL }) {

    return <div className="shadow-lg w-auto py-[1rem] bg-white flex flex-col justify-center items-center mb-[10rem]">
        <div className="w-90p font-medium text-[1.5rem] pb-[1rem]">Maps</div>
        <div className="w-90p">
            <img className="w-full h-auto pb-[1rem]" src={mapURL} alt="map" />
        </div>
        <div className="w-90p flex justify-end items-end pb-[1rem]">
            <button className="bg-transparent text-blue-500 font-normal text-[14px] py-[0.8rem] px-[1.3rem] border border-blue-500 flex items-center space-x-2">
                <span>Complete</span>
                <span className="transition-transform duration-200 hover:scale-125">&gt;</span>
            </button>
        </div>
    </div>
}

export default Map;