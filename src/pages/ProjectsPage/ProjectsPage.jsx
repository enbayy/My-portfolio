import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
            <form className='flex flex-col items-center w-full max-w-lg p-5 bg-gray-800 text-white rounded-lg'>
                <div className='text-4xl mb-8 text-center font-extrabold'>İletişim</div>
                <div className='flex flex-col md:flex-row justify-center items-center mb-10 space-y-5 md:space-y-0 md:space-x-10'>
                    <div className='flex flex-col items-center'>
                        <div className='text-5xl mb-2'>
                            <FaLocationArrow />
                        </div>
                        <div className='font-bold'>Adres</div>
                        <div>İzmir</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-5xl mb-2'>
                            <IoMdMail />
                        </div>
                        <div className='font-bold'>E-mail</div>
                        <div>1enesbayar@gmail.com</div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-5xl mb-2'>
                            <FaPhone />
                        </div>
                        <div className='font-bold'>Telefon</div>
                        <div>0 552 231 2086</div>
                    </div>
                </div>
                <div className='flex flex-col w-full space-y-4'>
                    <div className='flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0'>
                        <input
                            type="text"
                            placeholder='İsim'
                            className='w-full md:w-1/2 p-3 border border-gray-400 rounded-lg text-black'
                        />
                        <input
                            type="text"
                            placeholder='E-mail'
                            className='w-full md:w-1/2 p-3 border border-gray-400 rounded-lg text-black'
                        />
                    </div>
                    <textarea
                        placeholder='Mesaj'
                        className='w-full h-48 p-3 border border-gray-400 rounded-lg text-black resize-none'
                    ></textarea>
                </div>
                <div className='flex justify-end w-full mt-5'>
                    <button className='px-6 py-2 bg-transparent border border-white text-white rounded-full font-bold transition duration-300 hover:bg-white hover:text-gray-800'>
                        Gönder
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProjectsPage;
