import { BiPaperPlane, BiLogoLinkedin, BiLogoGithub, BiCopyright } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="flex h-fit flex-col gap-4 md:h-150 md:flex-row md:gap-6">
      <div className="section flex w-full flex-col justify-between text-white md:w-[50%]">
        <div>
          <p className="font-primary text-6xl">
            <span className="text-(--grey)">Let&apos;s</span> Connect
          </p>
          <p className="font-secondary tracking-wide text-(--grey)">
            Say hello at{" "}
            <span className="text-white underline">
              trishacapitle01@gmail.com
            </span>
          </p>
          <p className="font-secondary mb-4 tracking-wide text-(--grey)">
            For more info, here&apos;s my{" "}
            <span className="text-white underline">
              <a>resume.</a>
            </span>
          </p>
          <div className="flex gap-4">
            <a href="">
              <BiLogoLinkedin
                size={30}
                className="duration-150 ease-in-out hover:scale-110"
              />
            </a>
            <a href="">
              <BiLogoGithub
                size={30}
                className="duration-150 ease-in-out hover:scale-110"
              />
            </a>
          </div>
        </div>
        <p className="font-secondary flex items-center gap-4 py-10">
          <BiCopyright /> 2025 AshDev
        </p>
      </div>
      <div className="form font-secondary flex w-full flex-col text-white md:w-[50%]">
        <label htmlFor="name" className="text-sm text-(--grey)">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
        />
        <label htmlFor="email" className="text-sm text-(--grey)">
          Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="johndoe@email.com"
          className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
        />
        <label htmlFor="subject" className="text-sm text-(--grey)">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="mt-2 mb-4 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
        />
        <label htmlFor="message" className="text-sm text-(--grey)">
          Message
        </label>
        <textarea
          id="message"
          className="mt-2 mb-8 h-40 rounded-sm border border-(--grey)/50 bg-(--grey)/10 px-4 py-2 placeholder:text-white"
        />
        <button className="button font-primary flex w-3xs items-center gap-2 rounded-lg border border-gray-500 bg-gray-600/25 p-3 text-2xl leading-0 text-white backdrop-blur-sm backdrop-filter transition-colors duration-300 hover:bg-gray-400/25 md:gap-4 md:p-4 md:px-6 md:text-3xl">
          Send Message
          <BiPaperPlane size={30} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
