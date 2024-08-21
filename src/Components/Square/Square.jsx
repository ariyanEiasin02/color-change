import React from 'react'

const Square = ({ colorValue,hexColorValue,isTextColor}) => {
    return (
        <div className='translate-y-2/4 flex justify-center'>
            <div style={{ background: colorValue,
                color : isTextColor ? "#333" : "#fff"
             }} className="w-[300px] h-[300px] border border-[#333] rounded-lg flex justify-center items-center">
                <div className="">
                    <p className='text-2xl font-medium'>{colorValue ? colorValue : "Empty Value"}</p>
                    <p className='text-2xl font-medium'>{hexColorValue ? hexColorValue : null}</p>
                </div>
            </div>
        </div>
    )
}

export default Square