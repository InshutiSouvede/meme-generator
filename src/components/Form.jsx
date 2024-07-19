export default function Form(){
    return(
        <form className="grid grid-cols-2 px-10 gap-5 xl:w-2/4 m-auto">
            <div className=" flex flex-col gap-5 py-5">
                <label className="font-semibold text-[#374151]" htmlFor="toptext">Top text</label>
                <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" name="toptext" placeholder="Shut up"/>
            </div>
            <div className=" flex flex-col gap-5 py-5">
                <label className="font-semibold text-[#374151]" htmlFor="bottomtext">Bottom text</label>
                <input type="text" className="border p-2 border-[#D1D5DB] rounded-md" name="bottomtext" placeholder="And take my money"/>
            </div>
            <button type="button" className="bg-[#711F8D] cursor-pointer  col-span-2 bg-gradient-to-r text-white rounded-md py-4">Get a new meme image  🖼</button>
        </form>
    )
}