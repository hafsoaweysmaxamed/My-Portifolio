import {  SiExpress } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import Footer from "../Components/Footer";


function Home(){

 return <div>
  <div className="w-full sm:h-[500px] sm:flex pt-9 pl-4  h-[590px] justify-between bg-[#243642]">
    <div className="sm:ml-[100px]  sm:mt-[50px]">
    <h1 className="text-3xl text-white font-bold "> <span className="text-[#EE0000]">Hi, I'm </span>HafsoXilwanag</h1>
    <p className=" font-semibold mt-3 sm:ml-0 ml-11 text-white">A  Full Stack Developer<br/> buiding elegant experiences</p>
    <a href=" Resume.pdf"><button className="w-[110px] h-[40px] ml-[50px] sm:ml-0 bg-[] rounded text-white text-2xl font-semibold mt-3 ">Resume</button></a>
    <div className="mt-7 ml-[50px] sm:ml-0">
    <a href="https://github.com/hafsoaweysmaxamed?tab=repositories"><i class="fa-brands fa-github bg-white w-[30px] h-[30px] text-2xl font-semibold pl-1 rounded text-black "></i></a>
    <a href="https://wa.me/252613857669" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp bg-white w-[30px] h-[30px] text-2xl font-semibold pl-1 rounded text-black ml-3"></i></a>
    <a href="https://www.instagram.com/hafsoxilwanag" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram bg-white w-[30px] h-[30px] text-2xl font-semibold pl-1 rounded text-black ml-3"></i></a>
    </div>
    </div>

     <img className="w-[300px] h-[300px] mt-10 ml-9 sm:ml-0 rounded-full border-2 border-[#16325B] mr-20" src="/image/three.jpg"/>
   </div>
  
  <h1 className="text-4xl font-bold text-center mt-7">About <span className="text-[#EE0000]"> Me</span></h1>

    <div className="  rounded  sm:h-[300px] h-[350px] w-full flex mt-7 justify-between shadow-2xl" >

        
   <p className="sm:w-[800px]  w-[350px] text-black font-semibold sm:pt-7 ml-4 sm:ml-[330px] text-left   ">I'm a full stack developer and a second-year student in the Computer Science department, specializing in computer applications at [Jamhuuriya University]. With a deep love for creating elegant and efficient web applications, I specialize in developing both frontend and backend systems, ensuring that every project I work on is optimized for performance, accessibility, and user experience. My goal is to build solutions that not only meet business needs but also offer seamless interactions for users. Whether designing robust APIs or user interfaces, I am always eager to take on new challenges and grow as a developer.</p>
   
   
   </div>

   <h1 className="text-center text-4xl font-bold sm:mt-7 mt-20"> <span className="text-[#EE0000]">My</span> Projects</h1>

   <div className="sm:flex mt-20 sm:gap-12 sm:ml-5">
    <div className="w-[400px] h-[570px] mt-10 sm:mt-0  shadow-2xl">
    <h1 className="text-center text-2xl font-bold">Somaali Toursim</h1>

    <img className="sm:w-[510px] w-[350px]  h-[200px] ml-3 mr-3 sm:ml-0  sm:mr-20" src="/image/tours.png"/>
    <p className="w-[350px] ml-4 font-semibold">A website for a tourism company serves as an engaging platform to showcase travel services and attract potential travelers. Key features typically include:
    To provide information about the company or organization.
    Mission statement, history, team information, and customer testimonials. This builds trust and connection with potential travelers.
    To facilitate reservations and purchases.
 A user-friendly interface for booking accommodations, tours, and activities. It should include availability checks, pricing, and secure payment options
 with funtionalities like Admin dashboard and real-time.

    </p>

    </div>
    <div className="w-[400px] h-[570px] mt-10 sm:mt-0  shadow-2xl">
  
    <h1 className="text-center text-2xl font-bold">Exam Center</h1>
    <img className="sm:w-[510px] w-[350px] h-[200px]  ml-6 sm:ml-0  sm:mr-20" src="/image/exam.png"/>
    <p className="w-[350px] ml-5  font-semibold">An Exam center website designed to streamline the examination process for addministration and educator  the platform features an intuitive interface
        that allows addministrationto easily register  for exam, schule text dates and acess resources. with funtionalities like Admin dashboard 
        and real-time, it ensures a smooth and efficient experience for all stakeholders involved in the examination process.
    </p>

    </div>

    <div className="w-[400px] h-[570px] mt-10 sm:mt-0  shadow-2xl">
    <h1 className="text-center text-2xl font-bold">Mini website Hospital</h1>

    <img className="sm:w-[510px] w-[350px] ml-3 h-[200px]   sm:mr-20" src="/image/hos.png"/>
    <p className="w-[300px] ml-9 sm:ml-3 mt-3  font-semibold">A mini website for a hospital typically serves as a concise, user-friendly platform to provide essential information about the facility. Here’s a breakdown of key sections it might include:

     Brief introduction to the hospital
      Key services offered
      Emergency contact information</p>

    </div>
    </div>

    <div className="sm:flex mt-20 sm:gap-12 sm:ml-5">
    <div className="w-[400px] h-[520px] mt-10 sm:mt-0  shadow-2xl">
    <h1 className="text-center text-2xl font-bold">JIC Jamhuuriya Web</h1>

    <img className="sm:w-[510px] w-[350px]  h-[200px] ml-3 mr-3 sm:ml-0  sm:mr-20" src="/image/jic.png"/>
    <p className="w-[350px] ml-4 font-semibold">
    A JIC Jamhuuriya Incubation Center  Website desingn-related technology  typically focuses on various aspects of technology that support academic institutions. Here are some key components you might find:

Educational Tools: Reviews and information on software and applications that enhance learning, such as Learning Management Systems (LMS), virtual classrooms, and collaboration platforms.

Research Resources: Access to databases, online journals, and tools that assist students and faculty in conducting research.
    </p>
    </div>
    <div className="w-[400px] h-[520px] mt-10 sm:mt-0  shadow-2xl">
  
    <h1 className="text-center text-2xl font-bold">Online Complain App</h1>
    <img className="sm:w-[510px] w-[350px] h-[200px]  ml-6 sm:ml-0  sm:mr-20" src="/image/online.png"/>
    <p className="w-[350px] ml-5  font-semibold">An online complaint app is a digital platform that allows users to submit, track, and manage complaints or feedback about products, services, or issues with organizations. These apps typically feature:

User-Friendly Interface,Easy navigation for users to submit complaints quickly.
Categories and Templates, Predefined categories and templates to streamline the complaint process.


These apps enhance customer service by providing a structured way to address grievances, improving accountability and responsiveness.
    </p>

    </div>

    <div className="w-[400px] h-[520px] mt-10 sm:mt-0  shadow-2xl">
    <h1 className="text-center text-2xl font-semibold">NasriE-Comerce</h1>

    <img className="sm:w-[510px] w-[350px] ml-3 h-[200px]   sm:mr-20" src="/image/NasriE-.png"/>
    <p className="w-[300px] ml-9 mt-3  font-semibold">NasriE-Comerce website designed to provide users with a seamless online shoping experience
      the platform features a clean user friendly interface that allows customers to browse products easily, crate wish lists and manage their shoping carts
      This is the landing page that introduces visitors to the website.
      
    </p>

    </div>
    </div>








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
export default Home