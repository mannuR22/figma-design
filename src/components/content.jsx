import Header from "./header";


function Content({children}) {
    return <div className="flex flex-col flex-grow gap-5px">
        {children}
    </div>
}

export default Content;