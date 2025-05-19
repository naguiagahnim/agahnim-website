export default function Shrines() {

  const [videoLoaded, setVideoLoaded] = useState(false);


  return (
    <div className="bg-light-pink-ouga bg-cover bg-center h-screen w-screen">
      {!videoLoaded && (
            <img className="fixed top-0 left-0 w-screen h-screen object-cover z-0" src="/images/about.webp"/>)}
            <video className="fixed top-0 left-0 w-screen h-screen object-cover z-0" autoPlay muted playsInline loop src="/videos/about.webm" preload="auto" onLoadedData={() => setVideoLoaded(true)}></video>

    </div>
  );
}
