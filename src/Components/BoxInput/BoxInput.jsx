import React from 'react'
import colorNames from 'colornames'
const BoxInput = ({ colorValue, setColorValue, setHexColorValue ,setTextColorValue,isTextColor }) => {
    return (
        <div className='w-[300px] mx-auto mt-48'>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label className='text-2xl mt-2 font-normal' htmlFor="">Add Color Name :</label>
                <input autoFocus required className='border border-[#333] py-4 px-4 w-full rounded-md mt-2 text-xl font-medium' type="text" value={colorValue}
                    onChange={(e) => {
                        setColorValue(e.target.value);
                        setHexColorValue(colorNames(e.target.value));
                    }} placeholder='color name' />
            </form>
            <button type='button' className='bg-teal-600 border border-black-500 text-white uppercase w-full border rounded-full py-4 px-4 mt-4 text-xl font-medium' onClick={()=> setTextColorValue(!isTextColor)}>color change</button>
        </div>
    )
}

export default BoxInput