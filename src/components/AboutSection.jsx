import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faPenFancy} from "@fortawesome/free-solid-svg-icons"
import { faMobile} from "@fortawesome/free-solid-svg-icons"
import CardHabilities from "./atoms/CardHabilities"
import TitleText from "./atoms/TitleText"
import SubtitleText from "./atoms/SubtitleText"
import SimpleText from "./atoms/SimpleText"

const AboutSection = () =>{
    return (
        <div className="bg-zinc-900 h-200 w-full py-32 px-8 2xl:h-240 mobile-l:h-auto mobile-l:px-4">
            <div className="relative mobile-l:static">
                <div className="inline-block align-top w-1/2 h-auto text-left pl-4 mobile:w-full absolute right-0 mobile-l:w-full mobile-l:static">
                    <div className="w-full h-auto">
                        <SimpleText text="Introduce" />
                        <TitleText text="Hello! I'm Luis Gerardo" />
                        <SubtitleText text="Lorem ipsum dolor sit amet consectetur, adipiscing elit dis." />
                        <SimpleText text="Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate sapien, blandit orci purus sem nascetur suspendisse cras risus magnis penatibus, litora nibh et neque ante class turpis scelerisque. Tellus ridiculus nam ultricies donec dictum placerat venenatis tortor, consequat enim convallis quisque blandit cursus suspendisse. Aliquam condimentum nam ad mattis suspendisse sed integer, sodales donec vel semper per dignissim, neque ante id leo class senectus. Leo nibh mus convallis nullam tincidunt nascetur etiam pulvinar habitasse cum, sagittis inceptos arcu vitae eu vulputate porta iaculis sociosqu risus placerat, interdum mi vestibulum accumsan senectus eros ut penatibus parturient." />
                    </div>
                </div>
                <div className="inline-block w-1/2 h-auto pr-4 mobile:w-full absolute left-0 mobile-l:w-full mobile-l:static mobile-l:pt-8">
                    <CardHabilities title="Code" description="Create digital products with unique ideas" icon={faCode} />
                    <CardHabilities title="Design" description="Create digital products with unique ideas" icon={faPenFancy} />
                    <CardHabilities title="Responsive" description="Create digital products with unique ideas" icon={faMobile} />
                </div>
            </div>
        </div>
    )
}

export default AboutSection