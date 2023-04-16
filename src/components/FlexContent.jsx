import React from 'react'

const FlexContent = ({ifExists,endpoint:{title,heading,text,img,btn,url}}) => {
  return (
    <div  className={`flex nike-container-yunus ${ifExists?"flex-row-reverse":"flex-row"} items-center justify-between lg:flex-col lg:justify-center `}>
        <div className='max-w-lg lg:max-w-none w-full  md:text-center  flex flex-col lg:items-center' >
            <h1 className='text-4xl  sm:text-3xl font-bold text-gradient-yunus'>{heading}</h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 drop-shadow-lg'>{title}</h1>
            <p className='xl:text-sm my-4 text-slate-900 '>{text}</p>
            <a className='flex items-center' target={"_blank"} href={url} role={"button"}>
                <button type='button' className='button-theme bg-slate-900 text-slate-100 shadow-slate-900 py-1.5'>{btn}</button>
            </a>
        </div>
        <div  className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
            <img src={img} alt={`img/${heading}`} className={`w-auto object-fill transitions-theme 
            ${ifExists?"rotate-6 hover:-rotate-12":"h-72 lg:h64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"}
            `} />
            {/* // h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 */}
        </div>
    </div>
  )
}

export default FlexContent