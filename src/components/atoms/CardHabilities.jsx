import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardHabilities = ({title, description, icon}) => {
    return(
        <div className="flex justify-center py-2">
            <div className="w-128 h-40 bg-gradient-to-r from-zinc-800 via-neutral-700 to-zinc-800 rounded 2xl:w-160 2xl:h-52 relative ease-out duration-300 hover:scale-105">
                <p className="absolute left-8 top-4 text-green-500 font-semibold text-2xl">{title}</p>
                <p className="absolute left-8 top-16 text-white">{description}</p>
                <div className="absolute top-4 right-8 w-12 h-12 rounded-full bg-zinc-900 text-2xl p-1.5 text-white">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
            
        </div>
    )
}

export default CardHabilities