import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="#">
                    {/* <img src={headerLogo} alt="Logo" height={29} width={130} /> */}
                    <h1 className='text-3xl text-coral-red font-bold'>SneakerHub</h1>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a className='font-montserrat leading-normal text-lg text-slate-gray'
                                href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='hidden max-lg:block cursor-pointer'>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}

export default Nav