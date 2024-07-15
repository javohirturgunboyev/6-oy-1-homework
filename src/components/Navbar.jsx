import logo from '../images/Logo.png'
import Qidiruv from '../images/qidiruv.svg'
function Navbar() {
  return (<>
    <div className='div-1 pt-2 pb-3'>
      <img className='w-28' src={logo} alt="rasm" />
     <p className='flex w-5/12 items-center bg-white px-4 rounded-full'>
<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></svg>

     <input type="text" placeholder="Type here" className=" input  w-full" />
     </p>
     <div className='flex items-center'>
     <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>
     <select className="text-slate-400 select select-ghost w-full max-w-xs">

  <option disabled selected> <p className='text-slate-100'>Bahasa Indonesia</p></option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>

     </div>
      <div className='flex items-center'>
        <p className='p-3 bg-indigo-400 rounded-full'>
      <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z"/></svg>
        </p>
        <div className='px-3'>
          <p className='px-1'>Lokasi</p>
          <select className="text-blue-800 select-ghost w-full h-6 bg-transparent">

<option disabled selected> <p className='text-slate-100'>Indonesia, Yogyakarta</p></option>
<option>Svelte</option>
<option>Vue</option>
<option>React</option>
</select>
        </div>


      </div>
    </div>
    <div className='div-2'>

    </div>
    <div className='div-1 flex py-1.5'>
      <div className='flex gap-x-10'>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Gunung</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Pantai</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Kuliner</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Outbond</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Sejarah</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Edukasi</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Romantis</p></option>
<option>React</option>
</select>
<select className="text-zinc-500 select-ghost w-full h-6 bg-transparent">
<option disabled selected> <p>Alam</p></option>
<option>React</option>
</select>
      </div>
<div className='flex gap-x-2'>
  <p className='p-3  bg-indigo-200 rounded-full hover:bg-indigo-500'>
<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
  </p>
<p className='p-3  bg-indigo-200 rounded-full hover:bg-indigo-500'>
<svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/></svg>
</p>
</div>
    </div>
  </>
  )
}

export default Navbar