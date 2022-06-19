import TitleText from "../atoms/TitleText"
import SubtitleText from "../atoms/SubtitleText"
import SimpleText from "../atoms/SimpleText"

const CardWorks = ({text,image,...props}) =>{
    console.log(image)
    return(
        <div className="flex justify-center py-2">
            <div className="w-128 h-128 bg-zinc-900 rounded relative">
                <div className="absolute left-12 top-4">
                    <SubtitleText text={text} />
                </div>
                {props.children}
                <div className="px-4">
                    <img className="absolute w-120 bottom-0 rounded-b-lg" src={image} />
                </div>
            </div>
        </div>
    )
}

export default CardWorks