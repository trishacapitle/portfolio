import React from "react";

const Contact = () => {
  return (
    <div className="h-200 w-full">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="section mt-10 flex flex-col text-white">
          <p className="font-primary text-6xl">
            <span className="text-(--grey)">Let&apos;s</span> Connect
          </p>
          <p className="font-secondary text-(--grey)">
            Say hello at{" "}
            <span className="text-white underline">
              trishacapitle01@gmail.com
            </span>
          </p>
          <p className="font-secondary text-(--grey)">
            For more info, here&apos;s my{" "}
            <span className="text-white underline">resume</span>
          </p>
          <div>
            <a href="">Linkedin Icon</a>
            <a href="">GithubIcon</a>
          </div>
          <p>C 2025 AshDev</p>
        </div>
        <div className="form font-secondary flex flex-col text-white">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="johndoe@email.com" />
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" />
          <label htmlFor="message">Message</label>
          <input id="message" type="text" />
          <button>Send Message paperplane here</button>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
