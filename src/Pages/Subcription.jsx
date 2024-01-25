import Lottie from "react-lottie";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import img from "./payment.json";
 
import { useState } from "react";
import PaymentOptionForm from "./PaymentOptionForm";
 

const Subcription = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: img, // Lottie animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div>
      <Navbar></Navbar>

      <section className="grid grid-cols-2 items-center bg-sky-200">
        <div>
          <Lottie options={defaultOptions} />
        </div>
        <div className="space-y-3 min-h-screen p-10  ">
          <h2 className="text-4xl font-serif font-bold ">
            Online payment benifits
          </h2>
          <p className="font-serif">
            Online payments revolutionize financial transactions with their
            unparalleled convenience and security. Users can make transactions
            effortlessly from anywhere, reducing the reliance on physical cash.
            The advanced encryption of reputable payment gateways ensures the
            protection of sensitive information, mitigating risks associated
            with theft or fraud. Electronic receipts simplify expense tracking,
            and the global accessibility of online payments expands business
            reach, fostering international trade. Automated transactions enhance
            efficiency by minimizing errors and saving time, while in
            e-commerce, online payments improve customer satisfaction,
            encouraging impulse buying. The continuous evolution of technology
            ensures that the benefits of online payments will persist,
            contributing to the ongoing digitization of financial transactions
            globally.Online payments revolutionize financial transactions with
            their unparalleled convenience and security. Users can make
          </p>
        </div>
      </section>
      <div className="my-10"></div>

      {/* payment here */}

   <PaymentOptionForm></PaymentOptionForm>
       

      <Footer></Footer>
    </div>
  );
};

export default Subcription;
