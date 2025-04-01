import { RiSendPlaneFill } from "@remixicon/react";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [toastPosition, setToastPosition] = useState("top-center");

  const form = useRef();

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setToastPosition("top-center");
      } else {
        setToastPosition("bottom-right");
      }
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = "service_7zz4lsr";
    const templateId = "template_raqiiwl";
    const publicKey = "YjRlHtAvVyJp2q41P";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jivit Rana",
      subject: subject,
      message: message,
    };

    const toastId = toast.loading("Sending message...", {
      position: toastPosition,
    });

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      toast.success("Message sent successfully!", {
        id: toastId,
        position: toastPosition,
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      toast.error("Failed to send message. Please try again.", {
        id: toastId,
        position: toastPosition,
      });
    }
  };

  return (
    <div id="contact"
     className="flex flex-col justify-center items-center mt-0">
      <Toaster
        position={toastPosition}
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#ffffff",
            color: "#black",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />

      <div
        
        className="z-10 w-full max-w-6xl px-6 py-12 text-[#f2f2f2]"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text bg-white">
          Contact Me{" "}
          <span className="inline-block animate-waving-hand">👋</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-20 items-start justify-between">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">
              Location
            </h2>
            <div className="w-full h-[400px] bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-gray-800 transform hover:scale-[1.02] transition-transform duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600754045!2d77.35073221953124!3d12.954517008545258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">
              Get in Touch
            </h2>
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-[#333333] rounded-lg border text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-[#333333] rounded-lg border text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                  required
                />
              </div>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject (Optional)"
                className="w-full px-4 py-3 bg-[#333333] rounded-lg border text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                className="w-full h-[165px] px-4 py-3 bg-[#333333] rounded-lg border text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 resize-y"
                required
              />

              <Button
                type="submit"
                id="send-message"
                title="Send Message"
                rightIcon={<RiSendPlaneFill size={24} className="text-black" />}
                containerClass="
                  flex items-center justify-center gap-2 
                  px-8 py-4 text-black bg-white font-bold rounded-xl 
                  shadow-lg transition-all duration-300 ease-in-out
                  hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1
                  active:shadow-inner active:translate-y-0.5 active:scale-95
                "
              />
            </form>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-400 mt-8 mb-7">
          © 2025 Jivit Rana | Bangalore, India.
          <br />
          This website is built using React.js, JavaScript, Tailwind CSS,
          Email.js and Framer Motion for animations.
        </p>
      </div>
    </div>
  );
};

export default Contact;
