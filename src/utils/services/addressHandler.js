import axios from "axios";
import { actionType } from "../../constants";

const addAddress = async ({ address, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      "/api/user/address",
      { address },
      { headers: { authorization: token } }
    );
    console.log(data);
    if (status === 201)
      dataDispatch({
        type: actionType.DATA.SET_ADDRESSES,
        payload: { addresses: data.address },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

const deleteAddress = async ({ _id, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.delete(
      `/api/user/address/${_id}`,
      {
        headers: { authorization: token },
      }
    );

    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_ADDRESSES,
        payload: { addresses: data.address },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

const editAddress = async ({ address, token, dataDispatch }) => {
  try {
    const { data, status, statusText } = await axios.post(
      `/api/user/address/${address._id}`,
      { address },
      {
        headers: { authorization: token },
      }
    );

    if (status === 200)
      dataDispatch({
        type: actionType.DATA.SET_ADDRESSES,
        payload: { addresses: data.address },
      });
    else throw new Error(`${statusText} ${status}`);
  } catch (error) {
    console.log(error);
  }
};

export { addAddress, deleteAddress, editAddress };
