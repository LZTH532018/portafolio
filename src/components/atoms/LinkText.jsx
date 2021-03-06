const LinkText = props =>{
    return(
        <div className="inline-block px-2 2xl:text-2xl hover:text-green-500 tablet-nabvar:px-0 mobile-l:w-full mobile-l:py-2 mobile-l:hover:bg-green-500 mobile-l:hover:text-white">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 2xl:w-8 2xl:h-8 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="inline-block">{props.text}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 2xl:w-8 2xl:h-8 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </a>
        </div>
    )
}

export default LinkText