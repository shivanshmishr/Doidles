"use client";
import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { ContactAddress } from '@/components/contact/ContactAddress';

const Contact = () => {
  return (
    <div className="px-4 md:px-10 mb-20">
      <h1 className="gamingFont text-white text-3xl md:text-4xl font-semibold text-center my-14">
        CONTACT
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-[50%]">
          <ContactAddress />
        </div>

        <div className="md:w-[50%]">
          <div className="sticky top-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;