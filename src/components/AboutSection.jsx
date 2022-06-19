import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faPenFancy} from "@fortawesome/free-solid-svg-icons"
import { faMobile} from "@fortawesome/free-solid-svg-icons"
import CardHabilities from "./atoms/CardHabilities"
import TitleText from "./atoms/TitleText"
import SubtitleText from "./atoms/SubtitleText"
import SimpleText from "./atoms/SimpleText"

const AboutSection = () =>{
    return (
        <div className="bg-zinc-900 h-auto w-full py-32">
            <div className="inline-block w-1/2 h-auto">
                <CardHabilities title="Code" description="Create digital products with unique ideas" icon={faCode} />
                <CardHabilities title="Design" description="Create digital products with unique ideas" icon={faPenFancy} />
                <CardHabilities title="Responsive" description="Create digital products with unique ideas" icon={faMobile} />
            </div>
            <div className="inline-block align-top w-1/2 h-auto text-left">
                <div className="w-128 h-auto 2xl:w-200">
                    <SimpleText text="Introduce" />
                    <TitleText text="Hello! I'm Luis Gerardo" />
                    <SubtitleText text="Lorem ipsum dolor sit amet consectetur, adipiscing elit dis." />
                    <SimpleText text="Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate sapien, blandit orci purus sem nascetur suspendisse cras risus magnis penatibus, litora nibh et neque ante class turpis scelerisque. Tellus ridiculus nam ultricies donec dictum placerat venenatis tortor, consequat enim convallis quisque blandit cursus suspendisse. Aliquam condimentum nam ad mattis suspendisse sed integer, sodales donec vel semper per dignissim, neque ante id leo class senectus. Leo nibh mus convallis nullam tincidunt nascetur etiam pulvinar habitasse cum, sagittis inceptos arcu vitae eu vulputate porta iaculis sociosqu risus placerat, interdum mi vestibulum accumsan senectus eros ut penatibus parturient." />
                </div>
            </div>
        </div>
    )
}

export default AboutSection