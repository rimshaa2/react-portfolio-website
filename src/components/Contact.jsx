import React from 'react';

const Contact = () => {
  const address = "Rawalpindi, Pakistan";
  const email = "rimshasajid345@gmail.com";

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{address}</p>
        <a href={`mailto:${email}`} className="border-b text-blue-500 hover:text-blue-700">
          {email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

