import React from 'react'

function Botton({id ,name}) {
  return (
    <div>
        {
            id == 1 ? 
                <div className='botton_home_spc'>
                    <div className='botton_name_spc'>{name}</div>
                </div>
                :
                <div className='botton_home'>
                     <div className='botton_name'>{name}</div>
                     </div>


        }
    </div>
  )
}

export default Botton

        