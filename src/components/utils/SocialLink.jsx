import React from 'react'

const SocialLink = ({icon}) => {
  return (
    <>
    <img className='w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-4 sm:h-4 transition-all duration-200 hover:scale-110' src={icon} alt="icon/social" />
    </>
  )
}

export default SocialLink