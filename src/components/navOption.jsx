

const NavOption = ({ id, options, setOptions, title, inFocus}) => {

    const handler = () => {
        if(!options[id].inFocus){

            setOptions(options.map(option => {
                if(option.id == id){
                    return {
                        ...option,
                        inFocus: true
                    }
                }

                return {
                    ...option,
                    inFocus: false
                }
            }))
        }
        
    }
    return <div onClick={ handler} className={`bg-white transition-colors duration-300 aspect-opt w-full h-auto flex items-center justify-center ${inFocus ? '' : 'hover:bg-zinc-400'}`}>
        <p className={`font-switzer text-center text-18px ${ inFocus? "font-bold": "font-light text-[rgba(0,0,0,0.3)]"}`}>{title}</p>
    </div>
}

export default NavOption;