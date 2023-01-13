import React from 'react';

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="flex flex-col w-full space-y-2 ">
    {label && (
      <label htmlFor="input-field" className="text-xl">
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="bg-gray-50  border border-gray-300 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 "
    />
  </div>
);

export { InputField };
