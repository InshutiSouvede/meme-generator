import { useEffect, useState } from 'react'
import memes from '../memeData'
export default function Meme() {
    const [allMemes, setAllMemes] = useState(memes)
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    useEffect(()=>{
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
            
        }
        getMemes()
    },[])
    function getMemeImage() {
        // console.log(allMemes)
        const memesArray = allMemes
        const random = Math.floor(Math.random() * memesArray.length)
        setMeme((prev) => {
            return {
                ...prev,
                randomImage: memesArray[random].url,

            }
        })
    }
    function changeImageText(event) {
        const { name, value } = event.target
        setMeme((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <main className='xl:w-2/4 m-auto'>
            <form className="grid grid-cols-2 px-10 gap-5 ">
                <div className=" flex flex-col gap-5 py-5">
                    <label className="font-semibold text-[#374151]" htmlFor="toptext">Top text</label>
                    <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" onChange={changeImageText} value={meme.topText} name='topText' id="toptext" placeholder="Shut up" />
                </div>
                <div className=" flex flex-col gap-5 py-5">
                    <label className="font-semibold text-[#374151]" htmlFor="bottomtext">Bottom text</label>
                    <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" onChange={changeImageText} value={meme.bottomText} name='bottomText' id="bottomtext" placeholder="And take my money" />
                </div>
                <button type="button" onClick={getMemeImage} className="bg-[#711F8D] cursor-pointer  col-span-2 bg-gradient-to-r text-white rounded-md py-4">Get a new meme image  🖼</button>
            </form>
            {meme.randomImage && <div className="relative">
                <img className='rounded-md w-[700px] object-center m-auto my-5' src={meme.randomImage} alt="" />
                <h2 className="meme--text absolute left-1/3 top-10 font-bold text-4xl uppercase text-[#9792d0]">{meme.topText}</h2>
                <h2 className="meme--text absolute left-1/3 bottom-10 font-bold text-4xl uppercase text-[#9792d0]">{meme.bottomText}</h2>
            </div>}
        </main>

    )
}