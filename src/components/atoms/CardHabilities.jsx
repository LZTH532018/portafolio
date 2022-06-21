import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardHabilities = ({title, description, icon}) => {
    return(
        <div className="relative py-2">
            <div className=" absolute w-full max-w-144 h-40 bg-gradient-to-r from-zinc-800 via-neutral-700 to-zinc-800 rounded relative ease-out duration-300 hover:scale-105 2xl:h-56">
                <p className="absolute left-8 top-4 text-green-500 font-semibold text-2xl 2xl:text-3xl">{title}</p>
                <p className="absolute left-8 text-left w-1/2 top-16 text-white 2xl:text-2xl">{description}</p>
                <div className="absolute top-4 right-8 w-12 h-12 rounded-full bg-zinc-900 text-2xl p-1.5 text-white 2xl:text-3xl 2xl:w-16 2xl:h-16 2xl:p-3">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
        </div>
    )
}

export default CardHabilities