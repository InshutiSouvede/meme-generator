export default function Header(){
    return (
        <header className="bg-[#711F8D] bg-gradient-to-tr flex justify-between px-10 py-5 items-center text-white">
            <div className="flex gap-2">
            <img src="./assets/logo.png" alt="log" className="w-10 items-center" />
            <h1 className="text-3xl">Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </header>
    )
}