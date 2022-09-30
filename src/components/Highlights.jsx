import React from 'react'

function Highlights() {
  return (
    <div className='flex flex-row p-2 content-center mb-8 space-x-2 md:space-x-10 text-sm font-semibold w-full overflow-auto'>
      <div className="w-30">
        <a >
          <div className="border p-1 rounded-full">
              <img
               className='rounded-full'
               src="images/highlight-twitter.png"
               width="80" 
               alt="" 
              />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Twitter
          </div>
        </a>
      </div>
      <div className="w-30">
        <a >
          <div className="border p-1 rounded-full">
              <img
               className='rounded-full'
               src="images/highlight-youtube.png"
               width="80" 
               alt="" 
              />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Twitter
          </div>
        </a>
      </div>
      <div className="w-30">
        <a >
          <div className="border p-1 rounded-full">
              <img
               className='rounded-full'
               src="images/highlight-facebook.png"
               width="80" 
               alt="" 
              />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Twitter
          </div>
        </a>
      </div>
      <div className="w-30">
        <a >
          <div className="border p-1 rounded-full">
              <img
               className='rounded-full'
               src="images/highlight-twitter.png"
               width="80" 
               alt="" 
              />
          </div>
          <div className="text-center overflow-hidden text-ellipsis">
            Twitter
          </div>
        </a>
      </div>
    </div>
  )
}

export default Highlights