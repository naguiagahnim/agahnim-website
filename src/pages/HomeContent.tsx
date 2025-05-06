import Navbar from "../components/Navbar";

export default function HomeContent() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <Navbar/>
            <div>
                <img src="/gifs/globe.gif" width="5%" className="float-left"></img>
                <img src="/gifs/globe.gif" width="5%" className="float-right"></img>
            </div>
        </div>
    )
}