import TitleText from "../atoms/TitleText"
import SubtitleText from "../atoms/SubtitleText"
import SimpleText from "../atoms/SimpleText"

const CardWorks = ({text,image,...props}) =>{
    console.log(image)
    return(
        <div className="flex justify-center py-2 mobile:px-8">
            <div className="w-128 h-128 bg-zinc-900 rounded relative 2xl:w-160 2xl:h-160 tablet:w-96 tablet:h-112 mobile-l:w-80 mobile-l:h-96">
                <div className="absolute left-12 top-4 tablet:left-4">
                    <SubtitleText text={text} />
                </div>
                    {props.children}
                <div className="">
                    <img className="absolute w-full bottom-0 rounded-b-lg" src={image} />
                </div>
            </div>
        </div>
    )
}

export default CardWorks