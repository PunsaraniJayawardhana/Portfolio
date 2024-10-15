"use client";
import React , { useRef} from 'react'
import {useFormStatus} from 'react-dom'
import {handleSubmit} from '@/actions/sendEmail'
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {pending} = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(formRef.current!);
  const { error } = await handleSubmit(formData);

  if (error) {
    toast.error(error);
    return;
  }

  toast.success("Email sent successfully!");
  formRef.current?.reset(); // Reset the form fields
};
  
  return (
    <div
        data-aos="fade-left"
        className="bg-[#140c1c] rounded-lg p-4 sm:p-10" >
        <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
          Reach Me
        </h1>
        <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Hello! Thank you so much for your time!<br/>
Feel free to drop me an email through this form if you want to contact me on any occassion.
        </p>
        <form 
              ref={formRef}
              onSubmit={handleFormSubmit}
          className="mt-8 block w-full overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input 
                type="text" 
                name="fname"
                placeholder="First Name" 
                className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-2 rounded-md border-[1.5px]
                border-gray-200 border-opacity-15 outline-none w-full "
             />
             <input 
                type="text"
                name="lname" 
                placeholder="Last Name" 
                className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-2 rounded-md border-[1.5px]
                border-gray-200 border-opacity-15 outline-none w-full "
             />
            </div>
            <div className="flex  mt-5 flex-col md:flex-row items-center justify-between gap-4">
            <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-2 rounded-md border-[1.5px]
                border-gray-200 border-opacity-15 outline-none w-full "
             />
             <input 
                type="text" 
                name="number"
                placeholder="Phone Number" 
                className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-2 rounded-md border-[1.5px]
                border-gray-200 border-opacity-15 outline-none w-full "
             />
            </div>
            <textarea
            name="description" 
            className="w-full mt-5 bg-black text-white placeholder::text-gray-600 px-4 py-3.5 rounded-md
            border-[1.5] border-gray-200 border-opacity-15 outline-none " rows={7} placeholder="Message" >

            </textarea>
            <div className="flex justify-center mt-4">
                <button type='submit'
                 className="px-8 py-3.5 bg-[#7947df] transition-all
                duration-150 rounded-full"
                disabled={pending} >
                    {
            pending? (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900'></div>
          ):(
                <>Send </>
            )
        }
                </button>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;