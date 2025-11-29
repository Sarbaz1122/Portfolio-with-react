import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      icon: FaEnvelope,
      head: "Email",
      subHead: "sarbazafridi0@gmail.com",
      link: "mailto:sarbazafridi0@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      head: "Phone",
      subHead: "‪+923327989874‬",
      // WhatsApp direct link (remove spaces in number)
      link: "https://wa.me/923327989874"
    },
    {
      icon: FaMapMarkerAlt,
      head: "Address",
      subHead: "Lahore, Pakistan",
      // Google Maps link
      link: "https://www.google.com/maps?q=Lahore,+Pakistan",
    },
  ];

  return (
    <section id="contact" className="py-25 -mt-229 bg-white">
      <div className="max-w-9xl mx-auto px-43">
        <div className="text-center mb-10">
          <h3 className="text-3xl text-emerald-600 font-medium">Contact</h3>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-gray-800 mt-4">
            Get in touch
          </h2>
          <p className="mt-9 text-gray-600 max-w-2xl mx-auto text-3xl">
            Whether you have a project idea or just want to say hello — drop a
            message and I'll reply.
          </p>
        </div>

        {/* clickable cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-19 mb-10 ">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 rounded-2xl p-14 shadow-md hover:shadow-lg hover:scale-105 duration-300 transition transform hover:-translate-y-1 hover:bg-emerald-100 cursor-pointer block"
            >
              <div className="flex items-start gap-4 ">
                <div className="shrink-0 p-3 rounded-lg bg-emerald-200 text-emerald-700">
                  <item.icon className="text-4xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-4xl font-semibold text-gray-800">
                    {item.head}
                  </h4>
                  <p className="text-3xl text-gray-600 ">
                    {item.subHead}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}