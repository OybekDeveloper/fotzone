import React from 'react'

const GetApp = () => {
  return (
    <div className='flex items-center gap-2 pt-10 mx-auto flex-col'>
      <div className='flex items-center'>
        
        <h1 className='text-[50px]'>Get  App</h1>
      </div>
      <div className='flex flex-col items-center gap-4 '>
      <img  width={'300px'} style={{ borderRadius: '10px' }} src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-template_23-2149680707.jpg" alt="" />
      <div className='flex items-center  pt-3 gap-4' >
        <a href="/">
          <img width={"120px"} src="https://www.livescore.com/ls-web-assets/images/app_store-f26d940693193e7817576a67dde9b6cc.webp" alt="" />
        </a>
        <a href="/">
          <img width={"120px"} src="https://www.livescore.com/ls-web-assets/images/google_play-d5124d23c134d8a4693f7615d16462fa.webp" alt="" />
        </a>
      </div>  
      </div>
    </div>
  )
}

export default GetApp