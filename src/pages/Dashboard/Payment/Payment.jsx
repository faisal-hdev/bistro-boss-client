import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO : Add publishable key

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle heading="Payment" subHeading="Please pay to eat" />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;