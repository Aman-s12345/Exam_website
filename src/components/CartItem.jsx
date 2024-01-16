import React from 'react'

export const CartItem = ({ id, name, info, image, price, content }) => {

  return (
    <div className='flex flex-col cart animate-dissolve transition-curve ease-in-out-back duration-300 p-2  '>

      <div className='flex flex-row relative '>
        <div className='p-2'>
          <img src={image}></img>
        </div>
        <div className='flex flex-col p-2 py-5'>
          <div className='name_card'>{name}</div>
          <div className='info_card'>{info}</div>
        </div>

        <div className=' absolute right-4 top-3'>
          <img src='../bookmark.png'></img>
        </div>
      </div>

      <div className='line_border ml-2 relative'>

        <div className='flex flex-col justify-center px-12 py-3'>
          <div className='flex flex-row justify-start gap-4 py-1'>
            <div>
              <img src='../fa_group.png'></img>
            </div>
            <div className='content'>
              {content}
            </div>
          </div>

          <div className='flex flex-row justify-start gap-4 py-1 '>
            <div>
              <img src='../Group.png'></img>
            </div>
            <div className='content'>
              {price}
            </div>
          </div>

          <div className='flex flex-row justify-start gap-3 py-1 '>
            <div className='tag'>
              Engineering
            </div>
            <div className='tag'>
              PCM
            </div>
          </div>

          <div className='flex flex-row justify-start gap-2 py-1 '>
            <div className='view'>
              View details
            </div>
            <div className='arrow_card'>
              <img src='arrow_card.png'></img>
            </div>
          </div>





        </div>

      </div>




    </div>

  )
}

