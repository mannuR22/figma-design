import NavLogo from "./logo"
import NavOption from "./navOption"
import { useState } from "react";

const NavBar = () => {

    const [options, setOptions] = useState([
        {
            id: 0,
            title : 'Cart',
            inFocus: false
        },
        {
            id: 1,
            title : 'Market',
            inFocus: true
        },
        {
            id: 2,
            title : 'Settings',
            inFocus: false
        },
        {
            id: 3,
            title : 'Layout',
            inFocus: false
        },
    ])
    return <div className="fixed flex flex-col gap-5px h-screen aspect-nav w-auto">
        <NavLogo />
        {options.map((option) => <NavOption options={options} setOptions={setOptions} id={option.id} key={option.id} inFocus={option.inFocus} title={option.title}/> )}
        <div className="bg-white flex-grow"></div>
    </div>
}

export default NavBar;