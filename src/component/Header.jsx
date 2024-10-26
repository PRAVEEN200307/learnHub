import { Link } from "react-router-dom"

export default function Header() {
   return (
      <header className=" p-3 mx-auto  rounded-3xl fixed top-5 right-36 left-24  border-2  z-10  bg-black">
         <div className=" flex justify-between items-center  ">
            <h1 className="font-bold text-2xl  text-green-300">
               <Link to={'/'}> LearnHub</Link>
            </h1>
            <h1> 
               <Link to={'auth'}>Admin</Link>
            </h1>
         </div>
      </header>
   )
}