import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <footer className='bg-theme pt-7 pb-5 '>
        <div className='nike-container-yunus text-slate-200 '>
        <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
            {titles.map((val,i)=>(
               <div key={i}>
                <h1>{val.title}</h1>
               </div> 
            ))}
            {
                links.map((list,i)=>(
                    <ul className='grid items-center gap-1' key={i}>
                        {list.map((link,i)=>(
                            <li className='text-sm sm:text-xs' key={i}>{link.link}</li>
                        ))}
                    </ul>
                ))
            }
        </div>
        <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>Yunus Ahmadov </span></p>
          </div>
        </div>
    </footer>
  )
}

export default Footer