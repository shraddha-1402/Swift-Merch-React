import axios from "axios";
import { actionType } from "../../constants";

const getOrders = async ({ token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.get("/api/user/orders", {
      headers: { authorization: token },
    });
    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_ORDERS,
        payload: { orders: data.orders },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

const addOrders = async ({ order, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      "/api/user/orders",
      { order },
      { headers: { authorization: token } }
    );
    if (status === 201)
      dataDispatch({
        type: actionType.DATA.SET_ORDERS,
        payload: { orders: data.orders },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

export { getOrders, addOrders };
