import TitleText from "./atoms/TitleText"
import SimpleText from "./atoms/SimpleText"
import CardWorks from "./molecules/CardWorks"
import LenguajeInput from "./atoms/LenguajeInput"
import Work1 from "../means/images/png/coming-soon.png"

const WorksSection = () =>{
    return (
        <div className="bg-neutral-700 h-auto w-full py-32">
            <div className="inline-block w-1/2 h-auto">
                <div className="flex justify-center py-4">
                    <div className="w-128 h-52 rounded relative">
                        <TitleText text="Proyectos" />
                        <SimpleText text="Soluciones para tu experiencia" />
                    </div>
                </div>
                <CardWorks text="Proyecto 2" image={Work1}>
                    <div className="absolute right-12 top-8">
                        <LenguajeInput text="react" />
                        <LenguajeInput text="tailwind" />
                    </div>
                </CardWorks>
                <div className="flex justify-center py-2">
                    <div className="w-128 h-72 pt-20 rounded relative">
                        <TitleText text="Mas Proyectos" />
                        <SimpleText text="Ver mas proyectos" />
                    </div>
                </div>
            </div>
            <div className="inline-block align-top w-1/2 h-autot">
                <CardWorks text="Proyecto 1" image={Work1}>
                    <div className="absolute right-12 top-8">
                        <LenguajeInput text="css" />
                        <LenguajeInput text="html" />
                    </div>
                </CardWorks>
                <CardWorks text="Proyecto 3" image={Work1}>
                    <div className="absolute right-12 top-8">
                        <LenguajeInput text="python" />
                        <LenguajeInput text="html" />
                        <LenguajeInput text="css" />
                    </div>
                </CardWorks>
            </div>
        </div>
    )
}

export default WorksSection