"use client";
import React , { useRef} from 'react'
import {useFormStatus} from 'react-dom'
import {handleSubmit} from '@/actions/sendEmail'
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {pending} = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);

//   const handleFormSubmit = async (formData: FormData) => {
//     // Log formData being sent
//     console.log("Form submitted with:", formData.get("name"), formData.get("email"), formData.get("description"), formData.get("description"));


//     const response = await handleSubmit(formData);
//     console.log("Form submit response:", response); // Log the response from the handleSubmit

//     if (response?.success) {
//       alert("Message sent successfully!"); // Show the alert
//       window.location.reload(); // Reload the page after the alert
//   } else if (response?.error) {
//       alert(`Error: ${response.error}`); // Show error in alert if there was an issue
//   }
// };

const handleFormSubmit = async (formData: FormData) => {
  console.log("Submitting form data:", formData);

  try {
    const response = await handleSubmit(formData);
    console.log("Form submit response:", response);

    if (response?.success) {
      alert("Message sent successfully!");

      // Reload the page and return to the initial state (without retaining form state)
      window.location.href = window.location.origin; // Redirect to the home page (or initial page)
    } else if (response?.error) {
      console.error("Error:", response.error); // Log the error
      alert(`Error: ${response.error}`);
    }
  } catch (error) {
    // Type guard to check if error is an instance of Error
    if (error instanceof Error) {
      console.error("Submission failed:", error.message); // Log the error message
      alert(`Submission failed: ${error.message}`);
    } else {
      console.error("Unknown error occurred:", error); // Log the raw unknown error
      alert("An unknown error occurred.");
    }
  }
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
              onSubmit={async (e) => {
                e.preventDefault(); // Prevent form from submitting the default way
                const formData = new FormData(formRef.current!);
                handleFormSubmit(formData);
              }}
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