import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import LinkText from "./atoms/LinkText"
import ContactItem from "./atoms/ContactItem"
const Navbar = () =>{
    return(
        <div className="w-full h-32 bg-neutral-700">
            <div className="py-10 mobile-l:hidden">
                <div className="w-1/4 inline-block text-2xl text-gray-300 2xl:text-3xl">
                    <p className="inline-block px-0.5 font-bold">Luis</p>
                    <p className="inline-block px-0.5">Gerardo</p>
                </div>
                <div className="w-1/2 inline-block text-gray-300">
                    <LinkText text="Portada" />
                    <LinkText text="Acerca de mi" />
                    <LinkText text="Proyectos" />
                    <LinkText text="Contacto" />
                </div>
                <div className="w-1/4 inline-block text-gray-300">
                    <ContactItem url="https://github.com/LZTH532018" icon={faGithub} text="Github" size="2x" />
                    <ContactItem url="https://www.instagram.com/trejoluisgerardo/" icon={faInstagram} text="Instagram" />
                    <ContactItem url="https://twitter.com/LuisGerardoTr20" icon={faTwitter} text="Twitter" />                    
                </div>
            </div>
        </div>
    )
}

export default Navbar