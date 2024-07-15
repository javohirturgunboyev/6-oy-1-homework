import rasm from '../images/rasm.png'
import rasmlar1 from "../images/image 31.png"
import rasmlar2 from "../images/image 30.png"
import rasmlar3 from "../images/image 29.png"
import rasmlar4 from "../images/image 28.png"
import rasmlar5 from "../images/image 27.png"
import rasimlar10 from "../images/rasimlar10.png"
import rasimlar11 from "../images/rasimlar11.png"
import rasimlar12 from "../images/rasimlar12.png"
import rasimlar13 from "../images/rasimlar13.png"
import rasim20 from "../images/rasim20.png"
import image from "../images/image40.png"
import image2 from "../images/Group11.png"
import image3 from "../images/Group12.png"
function Home() {
  return (
    <div >
        <div className="Liburan" >
            <div>
                <p className="bg-sky-300 text-sky-600 font-bold text-sm py-2 px-2 rounded-full max-w-80 text-center">✈ • Explore the wonderful indonesia!</p>
                <h1 className="pt-3 text-7xl font-extrabold">Liburan & nikmati<p className="text-7xl text-indigo-900">tempat baru </p >di indonesia  ️🏝</h1>
                <p className="text-slate-600 pt-7 max-w-md text-base font-medium">Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
                <div className='div-6 mt-9'>
                    <button className='w-52 h-16 rounded-lg text-base font-bold bg-cyan-800 text-slate-50'>Mulai sekarang →</button>
                        <button className='button'> <p className='p-1 w-15 h-15 border-2 rounded-full text-5xl border-cyan-500 '>›</p>Putar Demo</button>
                </div>
            </div>
            <div>
              <img src={rasm} alt="rasmlar" />
            </div>
        </div>
        <div className='div-7'>
            <a href="">
            <img className='h-30 w-34' src={rasmlar5} alt="" />
            </a>
            <a href="">
            <img className='h-30 w-34' src={rasmlar4} alt="" />
            </a>
            <a href="">
            <img className='h-30 w-34' src={rasmlar3} alt="" />
            </a>
            <a href="">
            <img className='h-18 w-34' src={rasmlar2} alt="" />
            </a>
            <a href="">
            <img className='h-18 w-34' src={rasmlar1} alt="" />
            </a>
        </div>
        <div className='div-9'>

        <div className='div-8'>
            <div>

            <p className='p1'>DESTINASI FAVORIT</p>
            <h2 className='h2-1'>✈ • Temukan Destinasi Favoritmu  </h2>
            </div>
           <a href="">Lihat semua ›</a>
        </div>
        <div className='div-8 mt-6'>
         <img src={rasimlar10} alt="" />
         <img src={rasimlar12} alt="" />
         <img src={rasimlar10} alt="" />
         <img src={rasimlar12} alt="" />

        </div>
        </div>
      
    </div>
  )
}

export default Home