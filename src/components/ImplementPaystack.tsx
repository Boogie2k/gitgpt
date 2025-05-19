import { paystackApiKey } from "@/paystackApiKey";
import React from "react";

import { PaystackButton } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: paystackApiKey,

  //amount: 0, // amount should be 0 for subscription, plan handles billing
  // plan: "PLN_h76kfdj6tvgd7tx",
};

function ImplementPaystack() {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: " Upgrade now",
    onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  /* 
    <Button>
      Upgrade now
      <ArrowRight className="ml-1 h-4 w-4" />
    </Button>; */

  return (
    <PaystackButton
      className="bg-gray-900 text-white hover:bg-gray-800 px-3.5 py-2.5 rounded-md cursor-pointer"
      {...componentProps}
    />
  );
}

export default ImplementPaystack;
