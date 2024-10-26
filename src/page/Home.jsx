import '../App.css';
import client1 from '../assets/logo/client-8.png';
import client2 from '../assets/logo/Lifegroups.png';
import client3 from '../assets/logo/lilly.png';
import client5 from '../assets/logo/myob.png';
import client8 from '../assets/img/airbnb.png';
import client9 from '../assets/img/coty.png';
import client10 from '../assets/img/microsoft.png';
import client11 from '../assets/img/tailus.png';
import AboutImg from '../assets/img/AboutDashboard.png';
import medal from '../assets/logo/medal.svg';
import through from '../assets/logo/thought.png';
import training from '../assets/logo/training.png';
import StudentReport from '../component/StudentReport';


export default function Home() {
    return (
        <main className='text-white'>

            <section className='flex  items-center justify-center flex-col bg-hero bg-cover object-cover ' style={{ height: 600 }}>
                <h1 className=' text-white font-semibold  text-3xl lg:text-6xl text-center  '>Learn from the best,  be <br /> your best..</h1>
                <p className='  text-slate-500 lg:pt-8 text-center lg:text-lg'>Give yourself an upgrade with our inspiring online courses
                    <br />and join a global community of learners</p>
                <button className=' bg-yellow-400 text-black font-bold py-4 px-6 mt-4  rounded'>Get Started</button>
            </section>

            <section className='container mx-auto max-w-7xl  py-32'>
                <h1 className=' text-4xl text-center font-semibold lg:text-5xl  '>Our Placement Partners</h1>
                <div className='mt-20 pt-3 justify-center   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid  gap-10  '>
                    <img src={client1} alt="client" width={160} />
                    <img src={client2} alt="client" width={160} />
                    <img src={client3} alt="client" width={160} />
                    <img src={client8} alt="client" width={160} />
                    <img src={client5} alt="client" width={160} />
                    <img src={client9} alt="client" width={160} />
                    <img src={client10} alt="client" width={160} />
                    <img src={client11} alt="client" width={160} />
                </div>
                <button className=' mx-auto  block bg-yellow-400 text-black font-bold py-4 px-6 mt-11 rounded '>
                    More Companies
                </button>
            </section>

            <section className='text-center py-5 '>
                <h1 className=' uppercase  text-blue-300 font-bold'>Open Source Theme and UI Components</h1>
                <p className='mx-auto text-4xl text-center font-semibold lg:text-5xl max-w-lg   mt-10'>Geaux Astro helps you craft beautiful websites efficiently</p>
            </section>


            <div className=' container mx-auto max-w-7xl'>

                <section className='flex items-center  justify-center mt-5 flex-wrap '>
                    <div className='  space-y-14'>
                        <div className=' flex items-center gap-5'>
                            <img src={medal} alt="medal" width={50} className=' self-start ' />
                            <div className=' flex flex-col gap-4'>
                                <h1 className=' text-2xl '>Certificate Distribution</h1>
                                <p className=' w-96 text-slate-300'>We offer certificates to validate and recognize your achievement.</p>
                            </div>
                        </div>

                        <div className=' flex items-center gap-5'>
                            <img src={through} alt="medal" width={50} className=' self-start ' />
                            <div className=' flex flex-col gap-4'>
                                <h1 className=' text-2xl '>Knowledge</h1>
                                <p className=' w-96 text-slate-300'>We offer certificates to validate and recognize your achievement.</p>
                            </div>
                        </div>


                        <div className=' flex items-center gap-5'>
                            <img src={training} alt="medal" width={50} className=' self-start ' />
                            <div className=' flex flex-col gap-4'>
                                <h1 className=' text-2xl '>Hands-on Experience</h1>
                                <p className=' w-96 text-slate-300'>We provide hands-on experience for real-world learning. You learn best by doing..</p>
                            </div>
                        </div>

                    </div>
                    <img src={AboutImg} alt="AboutImage" width={800} />
                </section>


                <section className='py-44 flex flex-wrap items-center justify-evenly  '>
                    <p className=' font-semibold  text-4xl  ' style={{ width: 500 }}>
                        <span className='  text-green-500  '>Empower your future with cutting-edge skills</span>
                        <span className='  text-blue-500'><br /> New, Embrace innovation, master technology, & shape the digital world</span>
                        <span className=' text-red-600'> <br /> Your journey to success starts here</span>
                    </p>

                    <div className='mt-14 flex flex-col justify-center items-center gap-2  lg:w-2/5 '>
                        <p className='text-2xl'>Join our course with a proven track record of success, where learning isn&apos;t just about gaining skills; it&apos;s about growing them. Join us, learn with confidence, and watch your skills soar.</p>
                        <div className=' p-10 flex  justify-between gap-6'>
                           <StudentReport studentlabel={'Total Students'}  value={'0'} />
                           <StudentReport studentlabel={'Placed Students'}  value={'0'} />
                           <StudentReport studentlabel={'Unplaced Students'}  value={'0'} />
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}