import { useEffect, useRef, useState} from "react";


function MainBody({ children }) {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        if(ref.current && ref.current.offsetWidth)
            setWidth(ref.current.offsetWidth);
        
    }, []);

    return <div className="bg-white flex-grow flex flex-col items-center">
        <div ref={ref} className="w-90p h-full flex flex-col items-center justify-center">
            <div className="w-full h-full">
                <div className={`fixed w-auto h-full  no-scrollbar flex flex-col`}>
                <div style={{width: width}} className="flex flex-col overflow-auto no-scrollbar">
                    {children}
                </div>
                   
                </div>
            </div>

        </div>

    </div>;
}

export default MainBody;