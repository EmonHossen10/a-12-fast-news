import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const CheckoutForm = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState(" ");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    axios.get("https://fast-news-server.vercel.app/personalUsers").then((res) => {
      // console.log(res.data)
      setCurrentUser(res.data);
    });
  }, []);

  const payUser = currentUser.find((item) => item?.email === user?.email);
  const payUserId = payUser?._id;
  console.log(payUserId);

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const price = 500;

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error");
    } else {
      console.log(paymentIntent, " payment intent");
      if (paymentIntent.status === "succeeded") {
        console.log("teanstion id ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.displayName} has successfully payment`,
          showConfirmButton: false,
          timer: 1500,
        });

        // now set the payment in db
        //   const payment={
        //       email:user?.email,
        //       price,
        //       date:new Date(), // utc date convert
        //       status:"pending",
        //       transactionId:paymentIntent.id
        //   }
        //  const res= await  axiosSecure.post("/payment",payment)
        //  console.log("payment saved",res)
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-500 font-serif font-bold">
            Your transition id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
