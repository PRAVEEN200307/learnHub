import Input from "../component/Input"

export default function Auth() {

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data =Object.fromEntries(formData);

        console.log(data);
        
        form.reset();
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

                    <div className="p-6 transition-shadow duration-300 bg-white border rounded-lg shadow-lg hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-[#c9fd02] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" />
                            <h3 className="text-xl font-semibold" />
                        </div>
                        <div className="space-y-2">
                            <p>
                                <strong>Role:</strong>{" "}
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                            </p>
                            <p>
                                <strong>Phone Number:</strong>{" "}
                            </p>
                            <p>
                                <strong>Course:</strong>{" "}
                            </p>
                            <p>
                                <strong>Status:</strong> Unplaced
                            </p>
                        </div>
                        <button
                            className="w-full p-2 mt-4 text-white transition-colors bg-red-500 rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

