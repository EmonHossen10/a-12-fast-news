import { loadStripe } from "@stripe/stripe-js";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO:Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway);

const Payment = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
