import React from "react";

const TextField = (props) => {
  return (
    <div className="container w-72">
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900 p-1"
      >
        {props.name}
      </label>
      <div className="mt-2">
        <input
          id={props.nameValue}
          name={props.nameValue}
          type={props.nameValue}
          value={props.val}
          onChange={(e) => props.onChange(e)}
          autoComplete="email"
          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default TextField;
