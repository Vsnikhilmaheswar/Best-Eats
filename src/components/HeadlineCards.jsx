import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid  md:grid-cols-3 gap-6'>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2' >Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2' >Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2' >Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-2' >Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl' src='https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>

    </div>
  )
}

export default HeadlineCards