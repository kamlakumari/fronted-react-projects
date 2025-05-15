import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from "react-hot-toast"


const Contact = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
        const useInfo = {
            name:data.name,
            email: data.email,
            message:data.message
        }
        try{
         await axios.post("https://getform.io/f/byvkljya" , useInfo);
         toast.success("Your massage has been sent");
        }
        catch(error){
        console.log(error)
        toast.error("something went wrong");
        }
      }
    
    
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-4'> Contact Me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5 rounded-xl'>
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    // action="https://getform.io/f/byvkljya"
                    // method="POST"
                    className='bg-slate-200 w-96 px-6 py-6'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Massage</h1>
                        <div className='flex flex-col mb-4'>
                            <lable className='block text-gray-700'>Full Name</lable>
                            <input
                            {...register("name", { required: true })}
                             className='shadow  appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                             id="name"
                            
                              name='name'
                              type="text"
                              placeholder="Type your name..."
                            />
                            {errors.name && <span>This field is required</span>}
                          
                        </div>

                        <div className='flex flex-col mb-4'>
                            <lable className='block text-gray-700'>Email Address</lable>
                            <input
                            {...register("email", { required: true })}
                            className='shadow  appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                              id="email"
                              name='email'
                              type="text"
                              placeholder="Type your Email..."
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <lable className='block text-gray-700'>Massage</lable>
                            <textarea 
                            {...register("message", { required: true })}
                            className='shadow  appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                              id="message"
                              name='message'
                              type="text"
                              placeholder="Type your name..."
                            />
                          {errors.message && <span>This field is required</span>}
                        </div>
                        <button
                        type='submit'
                        className='bg-black rounded-xl py-2 px-3 text-white hover:bg-slate-700 duration-300'>Send</button>
                          
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
