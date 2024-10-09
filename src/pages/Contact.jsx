import Footer from "../Components/Footer"
function Contact(){
return <div>
  <div className=" w-[1000px] h-[400px] shadow-2xl sm:ml-32 mt-5  sm:mt-24 sm:flex justify-around"> 
   <div>
   <h1 className="text-3xl text-blue-700 ml-5 mb-4  font-bold">Contact Me</h1>

   <div className="flex gap-2 ml-6">
    <i class="fa-solid fa-envelope text-blue-700 mt-1"></i>
    <p>Xafsoaweys7@gmail.com</p>
    </div>

    <div className="flex gap-2 mt-5  ml-6">
    <i class="fa-solid fa-phone text-blue-700 mt-1"></i>
    <p className=" font-semibold">0613 85 76 69</p>
    
    </div>
    

   </div>

   <div className="mt-10 sm:mt-0">
    <h1  className="text-3xl text-blue-700 ml-5 mb-4  font-bold"> Fllow Me</h1>
    <div className="text-2xl font-semibold ml-8 text-blue-700">
    <a href="https://www.tiktok.com/@hafsoxilwanag1" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a>
    <a href="https://www.instagram.com/hafsoxilwanag" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram  w-[30px] h-[30px] text-2xl font-semibold pl-1 rounded text-blue-700 ml-3"></i></a>

    </div>
   </div>

  </div>
<Footer/>
    </div>
}
export default Contact