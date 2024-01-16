import React from 'react'
import data3 from '../data3'

export const Footer = () => {
    console.log(data3[0].name);
    return (
        <div className='flex flex-row justify-between w-3/4 px-0  '>
            <div className='flex flex-col '>
                <img src="../formlogo.png" className="h-7" />

                <div className='flex flex-row justify-between gap-3 pt-5'>
                    <img src='facebook.png' className='img_footer'></img>
                    <img src='instagram.png' className='img_footer'></img>
                    <img src='twitter.png' className='img_footer'></img>
                    <img src='linkedin.png' className='img_footer'></img>

                </div>
            </div>


            <div>
                <div className="grid grid-rows-5 grid-flow-col gap-4 ">
                    <div className='last_name'>{data3[0].name}</div>
                    <div className='last_name'>{data3[1].name}</div>
                    <div className='last_name'>{data3[2].name}</div>
                    <div className='last_name'>{data3[3].name}</div>
                    <div className='last_name'>{data3[4].name}</div>
                    <div className='last_name'>{data3[5].name}</div>
                    <div className='last_name'>{data3[6].name}</div>
                    <div className='last_name'>{data3[7].name}</div>
                    <div className='last_name'>{data3[8].name}</div>
                    <div className='last_name'>{data3[9].name}</div>
                    <div className='last_name'>{data3[10].name}</div>
                    <div className='last_name'>{data3[11].name}</div>
                    <div className='last_name'>{data3[12].name}</div>
                    
         
                </div>


            </div>


            <div>
                <img src='../apple.png' className='  w-[120px] h-[100px]'></img>
            </div>




        </div>

    )
}
