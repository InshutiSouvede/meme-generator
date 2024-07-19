import { useState } from 'react'
import memes from '../memeData'
export default function Form() {
   
                
    const [memeImage,setMemeImage] = useState("")
    function getMemeImage() {
        const memesArray = memes.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        // console.log("url: ", memesArray[random].url)
        setMemeImage(memesArray[random].url)
    }
    return (
        <main className='xl:w-2/4 m-auto'>
            <form className="grid grid-cols-2 px-10 gap-5 ">
                <div className=" flex flex-col gap-5 py-5">
                    <label className="font-semibold text-[#374151]" htmlFor="toptext">Top text</label>
                    <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" name="toptext" placeholder="Shut up" />
                </div>
                <div className=" flex flex-col gap-5 py-5">
                    <label className="font-semibold text-[#374151]" htmlFor="bottomtext">Bottom text</label>
                    <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" name="bottomtext" placeholder="And take my money" />
                </div>
                <button type="button" onClick={getMemeImage} className="bg-[#711F8D] cursor-pointer  col-span-2 bg-gradient-to-r text-white rounded-md py-4">Get a new meme image  🖼</button>
            </form>
            {memeImage&&<img className='rounded-md w-[700px] object-center m-auto my-5' src={memeImage} alt="" />}
        </main>

    )
}