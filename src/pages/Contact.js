import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFillTelephoneOutboundFill,
  BsPhoneVibrateFill,
} from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div>
        <iframe
          className="w-full"
          title="Unique"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14736.202571191005!2d88.5081671!3d22.577209149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674723905342!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 lg:px-22">
        <div class="col-span-2">
          <h2 className="text-4xl font-bold ">Let's work together</h2>
        </div>
        <div class="col-span-2">02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div> */}

      <div className="lg:flex justify-center lg:mx-32 lg:my-12 shadow-lg lg:p-12">
        <Form />

        <section className="lg:w-5/12 lg:p-8">
          <div className="lg:mx-9 md:m-4">
            <h2 className="text-headingColor text-xl font-bold mb-5">
              HEADQUATERS
            </h2>
            <p className="">
              Paradise Road 70, Office 99, Pacific Bay, New York City 10010
            </p>
            <br />
            <ul className="leading-10">
              <li>
                <p className="flex items-center">
                  <span className="p-1">
                    <BsFillTelephoneOutboundFill
                      style={{ color: "lightBlue" }}
                    />
                  </span>
                  <span className="ml-3">+123422344</span>
                </p>
                <p className="flex items-center">
                  <span className="p-1">
                    <BsPhoneVibrateFill
                      style={{ color: "lightBlue", fontSize: "1.2rem" }}
                    />
                  </span>
                  <span className="ml-3">9876545271</span>
                </p>
                <p className="flex items-center">
                  <span className="p-1">
                    {" "}
                    <AiOutlineMail
                      style={{ color: "lightBlue", fontSize: "1.2rem" }}
                    />{" "}
                  </span>
                  <span className="ml-3">example@example.com</span>
                </p>
                <p className="flex items-center">
                  <span className="p-1">
                    {" "}
                    <GoCalendar
                      style={{ color: "lightBlue", fontSize: "1.2rem" }}
                    />{" "}
                  </span>
                  <span className="ml-3">Monday Friday (9-5)</span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
