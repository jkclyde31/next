'use client'

import React, { useState } from 'react';
import { Builder } from '@builder.io/react';

const CustomContact = ({ fields, backgroundColor, textColor, buttonColor, buttonTextColor }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
   <>
    <div className={`py-3 px-6 rounded-lg shadow-lg max-w-full w-full mx-auto  ${backgroundColor}`}>
      <form onSubmit={handleSubmit} className="space-y-2 w-full">
        {(fields || []).map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name} className={`block mb-2 font-bold ${textColor}`}>
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows="4"
                className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500`}
                onChange={handleChange}
                required={field.required}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500`}
                onChange={handleChange}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button 
          type="submit" 
          className={`w-full py-2 px-4 rounded-lg font-bold bg-[#373737] text-white hover:opacity-90 transition duration-200`}
        >
          Submit
        </button>
      </form>
    </div>
   </>
  );
};

Builder.registerComponent(CustomContact, {
  name: 'Custom Contact Form',
  inputs: [
    {
      name: 'fields',
      type: 'list',
      defaultValue: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: true },
      ],
      subFields: [
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'type',
          type: 'string',
          enum: ['text', 'email', 'tel', 'textarea'],
        },
        {
          name: 'required',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'string',
      defaultValue: 'bg-white',
    },
    {
      name: 'textColor',
      type: 'string',
      defaultValue: 'text-gray-800',
    },
    {
      name: 'buttonColor',
      type: 'string',
      defaultValue: 'bg-blue-500',
    },
    {
      name: 'buttonTextColor',
      type: 'string',
      defaultValue: 'text-white',
    },
  ],
});

export default CustomContact;