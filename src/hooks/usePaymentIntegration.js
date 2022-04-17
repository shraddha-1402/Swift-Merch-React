import { useNavigate } from "react-router-dom";
import { routes } from "../constants";
import { useAddress, useAuth, useData } from "../context";
import { addOrders, clearCart } from "../utils/services";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const usePaymentIntegration = () => {
  const {
    authState: { token, userInfo },
  } = useAuth();
  const {
    dataState: { cart },
    dataDispatch,
  } = useData();
  const { deliveryAddress } = useAddress();

  const navigate = useNavigate();

  const paymentSuccessful = async ({ response, totalAmount }) => {
    await addOrders({
      order: {
        items: [...cart],
        paymentId: response.razorpay_payment_id,
        totalAmount,
        deliveryAddress,
      },
      token,
      dataDispatch,
    });
    clearCart({ token, dataDispatch });
    navigate(routes.ORDERS_PAGE);
  };

  const displayRazorpay = async ({ totalAmount }) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.error("Please check your internet connection");
      return;
    }

    const options = {
      key: "rzp_test_feTXx7rfXNT6mU",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Swift Merch",
      description: "Thank you for shopping with us",
      image: "/logo192.png",
      handler: function (response) {
        paymentSuccessful({ response, totalAmount });
      },
      prefill: {
        name: `${userInfo.firstName} ${userInfo.lastName}`,
        email: userInfo.email,
        contact: "8665454420",
      },
      notes: {},
      theme: {
        color: "#f46326",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return { displayRazorpay };
};
export { usePaymentIntegration };
