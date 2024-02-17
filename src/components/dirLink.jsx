import arrow from '../assets/larrow.png';

function DirLink({title, linkTo}){
    return <a href={linkTo} className="no-underline text-current">
        {title} arrow
    </a>
}