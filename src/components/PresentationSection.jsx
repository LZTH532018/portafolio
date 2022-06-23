import meImage from '../means/images/png/gato_moon_knight.png'
import reactLogo from '../means/images/png/react_logo.png'
import pythonLogo from '../means/images/png/python_logo.png'
import cssLogo from '../means/images/png/css_logo.png'
import TitleText from './atoms/TitleText'
import SimpleText from './atoms/SimpleText'

const PresentationSection = () =>{
    return(
        <div className="w-full h-auto py-8 2xl:py-24 pl-8 mobile-l:pl-4">
            <div className="inline-block w-1/2 mobile-l:w-full h-128 relative text-left 2xl:h-160 tablet:h-96">
                <div className="w-3/4 h-24 absolute px-2 left-0 mobile-l:w-3/4">
                    <div className="bg-green-500 rounded-lg w-fit p-1">
                        <p className="text-left font-semibold 2xl:text-2xl">Front-End Developer</p>
                    </div>
                    <div className="py-2 2xl:py-4">
                        <TitleText text="Come, codifica y duerme" />
                    </div>
                    <div className="py-2 2xl:py-4">
                        <SimpleText text="Bienvenido a mi portafolio, desliza hacia abajo para ver algunos de mis proyectos y si te gusta lo que ves puedes contactarme" />
                    </div>
                    <div className="text-green-500 text-2xl w-fit 2xl:text-3xl 2xl:py-2">
                        <a href="https://wa.me/7716079210?text=I%27m%20interested%20in%20your%20car%20for%20sale">
                            <p>
                                Contactame por whatsapp
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" inline-block w-128 h-128 relative 2xl:w-160 2xl:h-160 tablet:w-96 tablet:h-96 mobile:w-80 mobile:h-80">
                <div className="z-1 h-96 w-96 absolute rounded-full bg-gradient-to-r from-zinc-900 to-neutral-700 2xl:w-128 2xl:h-128 tablet:w-72 tablet:h-72 mobile:w-64 mobile:h-64"></div>
                <img className="z-10 h-full w-full absolute right-16 animate-bounce-little-slow tablet:right-12 mobile:right-8" src={meImage} />
                <div className="w-24 h-24 bg-zinc-900 rounded-full absolute top-12 animate-bounce-big-slow 2xl:w-32 2xl:h-32 tablet-mobile:w-20 tablet-mobile:h-20 tablet-mobile:top-8">
                    <img className="h-full w-full" src={reactLogo} />
                </div>
                <div className="w-20 h-20 bg-zinc-900 rounded-full absolute bottom-8 right-20 animate-bounce-big-slow 2xl:w-24 2xl:h-24 tablet-mobile:w-16 tablet-mobile:h-16 tablet-mobile:bottom-4 tablet-mobile:right-16">
                    <img className="h-full w-full" src={pythonLogo} />
                </div>
                <div className="z-20 w-16 h-16 p-2 bg-zinc-900 rounded-full absolute bottom-4 left-20 animate-bounce-big-slow 2xl:w-20 2xl:h-20 tablet-mobile:w-12 tablet-mobile:h-12 tablet-mobile:bottom-2 tablet-mobile:left-12">
                    <img className="h-full w-full" src={cssLogo} />
                </div>
            </div>
        </div>
    )
}

export default PresentationSection