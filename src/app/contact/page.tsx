"use client";
import React from 'react'
import ContactForm from '@/components/contact/ContactForm';
import { ContactAddress } from '@/components/contact/ContactAddress';

const Contact = () => {
  return (
    <div>
      <h1 className="gamingFont text-white text-3xl md:text-4xl font-semibold text-center my-10">
        CONTACT
      </h1>

      <div className='flex flex-col md:flex-row justify-between'>
        <div className='md:w-[50%]'>
          <ContactAddress/>
        </div>
        <div className='md:w-[50%]'>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
};

export default Contact;