import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactItem = ({url, icon, text, ...props}) =>{

    return(
        <a href={url}>
            <div className="inline-block px-0.5 2xl:text-2xl 2xl:px-2 hover:text-green-500">
                <div className="inline-block px-0.5 tablet:px-4 mobile-l:px-2">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p className="inline-block px-0.5 tablet:hidden mobile-l:hidden">{text}</p>
                
            </div>
        </a>
    )
}

export default ContactItem