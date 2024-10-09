import Footer from "../Components/Footer"
function About(){
    return <div>
    <div>
         
         
   <h1 className="text-4xl font-bold text-center mt-7">About <span className="text-[#EE0000]"> Me</span></h1>

    <div className="  rounded  sm:h-[390px] h-[350px] w-full flex mt-7 justify-between shadow-2xl" >

        
   <p className="sm:w-[800px]  w-[350px] text-black font-semibold sm:pt-7 ml-4 sm:ml-[330px] text-left   ">I'm a full stack developer and a second-year student in the Computer Science department, specializing in computer applications at [Jamhuuriya University]. With a deep love for creating elegant and efficient web applications, I specialize in developing both frontend and backend systems, ensuring that every project I work on is optimized for performance, accessibility, and user experience. My goal is to build solutions that not only meet business needs but also offer seamless interactions for users. Whether designing robust APIs or user interfaces, I am always eager to take on new challenges and grow as a developer.</p>
   </div>


    </div>
    <Footer/>
    </div>
}
export default About