import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LinkText from "./atoms/LinkText"
import ContactItem from "./atoms/ContactItem"
import { render } from 'react-dom'
const Navbar = () =>{

    var navbarShow = "hidden";

    const [check, setCheck] = useState(false);
    function changeNavbar (){
        setCheck(prevCheck => !prevCheck);
        if(check==true)
            {return navbarShow = "block";}
            else
                {return navbarShow = "hidden";}
    }
    
    return(
        <div className="w-full h-24 bg-neutral-700 z-50 mobile-l:fixed mobile-l:h-auto relative">
            <div onClick={changeNavbar} className="absolute hidden text-gray-300 rounded-full right-4 top-4 w-12 h-12 pt-2 hover:text-white hover:bg-green-500 mobile-l:block text-2xl">
                <FontAwesomeIcon icon={faBars} />
            </div>
            {
                check &&
                
                <div className="py-10 pc-nabvar:hidden">
                    <div className="w-1/4 inline-block text-2xl text-gray-300 2xl:text-3xl tablet-l-nabvar:w-1/6 tablet-nabvar:w-1/6 mobile-l:w-full">
                        <p className="inline-block px-0.5 font-bold">Luis</p>
                        <p className="inline-block px-0.5">Gerardo</p>
                    </div>
                    <div className="w-1/2 inline-block text-gray-300 tablet-l-nabvar:w-4/6 tablet-nabvar:w-4/6 mobile-l:w-full">
                        <LinkText text="Portada" />
                        <LinkText text="Acerca de mi" />
                        <LinkText text="Proyectos" />
                        <LinkText text="Contacto" />
                    </div>
                    <div className="w-1/4 inline-block text-gray-300 tablet-l-nabvar:w-1/6 tablet-nabvar:w-1/6 mobile-l:w-full mobile-l:pt-2">
                        <ContactItem url="https://github.com/LZTH532018" icon={faGithub} text="Github" size="2x" />
                        <ContactItem url="https://www.instagram.com/trejoluisgerardo/" icon={faInstagram} text="Instagram" />
                        <ContactItem url="https://twitter.com/LuisGerardoTr20" icon={faTwitter} text="Twitter" />                    
                    </div>
                </div>
            }
            <div className="py-10 mobile-l:hidden">
                <div className="w-1/4 inline-block text-2xl text-gray-300 2xl:text-3xl tablet-l-nabvar:w-1/6 tablet-nabvar:w-1/6 mobile-l:w-full">
                    <p className="inline-block px-0.5 font-bold">Luis</p>
                    <p className="inline-block px-0.5">Gerardo</p>
                </div>
                <div className="w-1/2 inline-block text-gray-300 tablet-l-nabvar:w-4/6 tablet-nabvar:w-4/6 mobile-l:w-full">
                    <LinkText text="Portada" />
                    <LinkText text="Acerca de mi" />
                    <LinkText text="Proyectos" />
                    <LinkText text="Contacto" />
                </div>
                <div className="w-1/4 inline-block text-gray-300 tablet-l-nabvar:w-1/6 tablet-nabvar:w-1/6 mobile-l:w-full mobile-l:pt-2">
                    <ContactItem url="https://github.com/LZTH532018" icon={faGithub} text="Github" size="2x" />
                    <ContactItem url="https://www.instagram.com/trejoluisgerardo/" icon={faInstagram} text="Instagram" />
                    <ContactItem url="https://twitter.com/LuisGerardoTr20" icon={faTwitter} text="Twitter" />                    
                </div>
            </div>
        </div>
    )
}

export default Navbar