


function Header({children}){
    return <div className="bg-white w-full aspect-head h-auto max-h-[4.7rem] flex justify-center items-center">
        <div className="h-full w-90p flex justify-between items-center">
            {children}
        </div>
    </div>
}

export default Header;