import Navbar from "../components/Navbar";

export default function Music() {
    return (
        <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
            <Navbar/>
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted loop src="/videos/landing.mp4"></video>
        </div>
    )
}