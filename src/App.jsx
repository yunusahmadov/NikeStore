import React from 'react'
import { FlexContent, Hero,Sales,Stories,Footer,Cart } from './components'
import NavBar from './components/NavBar'
import {heroapi,popularsales,topratesales,highlight,sneaker,story,footerAPI} from './data/data.js'

const App = () => {
  return (
<div className='overflow-x-hidden'>
<NavBar/>
<Cart/>
   <main className='flex flex-col gap-16 relative'>
   <Hero heroapi={heroapi}/>
   <Sales endpoint={popularsales} ifExists/>
   <FlexContent endpoint={highlight} ifExists />
   <Sales endpoint={topratesales}/>   
   <FlexContent endpoint={sneaker}/>
   <Stories story={story}/>
   <Footer footerAPI={footerAPI}/>
</main>
</div>
  )
}

export default App