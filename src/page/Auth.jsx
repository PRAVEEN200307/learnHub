import { useState } from "react";
import Input from "../component/Input"
import axios from "axios";
import { useEffect } from "react";

export default function Auth() {

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        async function getData() {
            const result = await axios.get(`https://learninghub-ij3c.onrender.com/hire`);
            setStudentData(result.data)
        }

        getData()
    })


    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const result = await axios.post(`https://learninghub-ij3c.onrender.com/hire`, data);
            console.log(await result.data)
        } catch (error) {
            console.log(error)
        }

        form.reset();
    }



    // handle delect
    async function handleDelect(id){
        const result = await axios.delete(`https://learninghub-ij3c.onrender.com/hire/${id}`);
        console.log(result)
     }

    return (
        <div className="pt-28 container mx-auto  max-w-7xl  pb-20">

            {/* form */}
            <div>
                <h1 className=" text-center  text-3xl text-lime-400 font-bold" >Fill This Form</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <div className=" grid sm:grid-cols-2 grid-cols-1  gap-5 mt-5  items-center justify-center p-10 ">
                        <Input labelName={'Name'} placeHolderName={'Enter your name'} name={'name'} />
                        <Input labelName={'Role'} placeHolderName={'Enter your role'} name={'role'} />
                        <Input labelName={'Email'} placeHolderName={"Enter your email"} name={'email'} type="email" />
                        <Input labelName={'Phone Number'} placeHolderName={"Enter your Phone number"} name={'phone'} type="phone" />
                        <div className=" flex flex-col gap-2   ">
                            <label htmlFor="Course" className=" font-bold text-3xl text-lime-400">Course :</label>
                            <select name="course" id="Course" className=" p-4 rounded">
                                <option value="select a course">select a course</option>
                                <option value="React Basics">React Basics</option>
                                <option value="ui/ux Design">ui/ux Design</option>
                                <option value="javascripot fundamentals">javascripot fundamentals</option>
                                <option value="Advanced CSS">Advanced CSS</option>
                                <option value="backend development">backend development</option>
                            </select>
                        </div>
                        <div className=" flex flex-col gap-2   ">
                            <label htmlFor="Status" className=" font-bold text-3xl text-lime-400">Status :</label>
                            <select name="status" id="Status" className=" p-4 rounded">
                                <option value="Unplaced">Unplaced</option>
                                <option value="Placed">Placed</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="  mr-14 block ml-auto  border-2 rounded-md px-4 py-2 text-white  hover:bg-lime-300  ease-linear transition-all" />
                </form>
            </div>


            {/*  */}
            <div className="w-full px-4 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {
                        studentData.map((data) => {
                            const { _id, status, role, phone, name, email, course } = data;


                            return (
                                <div key={_id} className="p-6 transition-shadow duration-300 bg-white border rounded-lg shadow-lg hover:shadow-xl">
                                    <div className="flex items-center mb-4">
                                        {/* <div className="bg-[#c9fd02] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" /> */}
                                        <h3 className="text-xl font-semibold">{name} </h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p>
                                            <strong>Role:</strong>{role}
                                        </p>
                                        <p>
                                            <strong>Email:</strong>{email}
                                        </p>
                                        <p>
                                            <strong>Phone Number:</strong>{phone}
                                        </p>
                                        <p>
                                            <strong>Course:</strong>{course}
                                        </p>
                                        <p>
                                            <strong>Status:</strong> {status}
                                        </p>
                                    </div>
                                    <button onClick={()=>handleDelect(_id)}
                                        className="w-full p-2 mt-4 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}

