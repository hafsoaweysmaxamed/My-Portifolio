import Footer from "../Components/Footer"
import {  SiExpress } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";


function Skiils(){
    return <div>
        <h1 className="text-center text-4xl font-bold mt-7"> <span className="text-[#EE0000]">My</span> Skills</h1>
    <div className="sm:flex" >
    <div className="mt-12 w-[600px] shadow-2xl sm:ml-[50px]">
        <h1 className="sm:text-center text-4xl ml-16  font-bold mt-7">Frontend-Side</h1>
    <div className="bg-[#E34E26] hover:bg-blue-100 shadow-lg mt-8 rounded-lg p-2  flex justify-between w-[370px] items-center  sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
             <FaHtml5 className="text-5xl text-[#E34E26] bg-white mr-4" />

            <h1 className="text-2xl font-semibold text-white ">HTML</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">95%</p>
           </div>


           <div className="bg-[#1B73BA] hover:bg-blue-100 mt-8  shadow-lg rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
             <FaCss3Alt className="text-5xl text-[#1B73BA] bg-white mr-4" />

            <h1 className="text-2xl font-semibold text-white ">CSS</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">90%</p>
           </div>



           <div className="bg-[#18ABB1] hover:bg-blue-100 mt-8  shadow-lg rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
            <img className="w-[50px] h-[50px]" src="https://i.pinimg.com/474x/cd/00/4b/cd004b701e51ee32dd3225b910575320.jpg"  />
            <h1 className="text-2xl font-semibold text-white "> Taiwind CSS</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">90%</p>
           </div>


           <div className="bg-[#D4B92E] hover:bg-blue-100 mt-8  shadow-lg rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
             <FaJs className="text-5xl text-[#D4B92E] bg-white mr-4" />

            <h1 className="text-2xl font-semibold text-white ">JavaScript</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">80%</p>
           </div>


           <div className="bg-[#56E1F9] hover:bg-blue-100 mt-8 mb-6  shadow-lg rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
             <FaReact className="text-5xl text-[#56E1F9] bg-white  mr-4" />

            <h1 className="text-2xl font-semibold text-white ">ReactJs</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">90%</p>
           </div>
</div>


<div className="mt-12 w-[600px] shadow-2xl sm:ml-[20px]">
        <h1 className="sm:text-center text-4xl ml-16 sm:ml-0 font-bold mt-7">Backend-Side</h1>
    <div className="bg-[#7FBD42] hover:bg-blue-100 shadow-lg mt-8 rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
            <img className="w-[60px] h-[50px]" src="https://i.pinimg.com/474x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg" alt="" />
            <h1 className="text-2xl font-semibold text-white ">NodeJs</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">80%</p>
           </div>


           <div className="bg-[#4B5563] hover:bg-blue-100 shadow-lg mt-8 rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
             <SiExpress className="text-5xl text-[#4B5563] bg-white mr-4" />

            <h1 className="text-2xl font-semibold text-white ">Express</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">80%</p>
           </div>


           <div className="bg-[#14AA51] hover:bg-blue-100 shadow-lg mt-8 rounded-lg p-2 flex justify-between items-center w-[370px] sm:w-[500px] ml-[10px] transform hover:scale-105 transition duration-300">
             <div className="flex gap-1">
            <img className="w-[50px] h-[50px]" src="https://i.pinimg.com/474x/91/23/7f/91237f1eca767ef74d722ca534f9281a.jpg" />
            <h1 className="text-2xl font-semibold text-white ">Mogodb</h1>
            </div>
            <p  className="text-2xl font-semibold text-white ">80%</p>
           </div>
           </div>

          
    </div>
       
<Footer/>
</div>
}
export default Skiils