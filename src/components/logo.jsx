import logo from '../assets/logo.png';

const NavLogo = () => {
    return <div className='bg-white aspect-logo h-auto w-full flex items-center justify-center'>
          <img src={logo} className='h-auto w-18p' alt="Logo" />
    </div>
}

export default NavLogo;