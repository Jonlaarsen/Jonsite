import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "65c008c9-2c02-4e65-a244-55beeabab418");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message Sent !", {
        position: "bottom-right",
      });

      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="flex items-center justify-center w-full h-full">
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-y-10 ">
        <h1 className="text-5xl md:text-7xl font-bold border-b-6 border-secondary">
          Contact Form
        </h1>
        <div>
          <label htmlFor="name" className="text-white/70">
            Full Name
          </label>
          <input
            className="bg-white w-full rounded-xl h-10 text-black pl-5"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white/70">
            Email Address
          </label>
          <input
            className="bg-white w-full rounded-xl h-10 text-black pl-5"
            name="email"
            type="email"
            placeholder="enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-white/70">
            Your Message
          </label>
          <textarea
            name="message"
            className="bg-white h-[10rem] w-full rounded-xl text-black px-5 pt-3"
            type="text"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="text-2xl font-bold bg-secondary/90 hover:bg-secondary/100 py-4 w-full rounded-xl"
        >
          {" "}
          Send Message
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
