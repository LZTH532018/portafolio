import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ContactItem = ({url, icon, text, ...props}) =>{

    console.log(props);

    return(
        <a href={url}>
            <div className="inline-block px-0.5 2xl:text-2xl 2xl:px-2">
                <div className="inline-block px-0.5">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <p className="inline-block px-0.5">{text}</p>
                
            </div>
        </a>
    )
}

export default ContactItem