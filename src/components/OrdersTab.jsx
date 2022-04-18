import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants";
import { useAuth, useData } from "../context";
import { getOrders } from "../utils/services";

const OrdersTab = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    dataState: { orders },
    dataDispatch,
  } = useData();

  useEffect(() => {
    getOrders({ token, dataDispatch });
  }, []);
  return (
    <main className="flex-col align-center justify-center mw-28r my-2 mx-auto">
      {orders?.length ? (
        orders.map(
          ({
            createdAt,
            _id,
            items,
            paymentId,
            totalAmount,
            deliveryAddress: { name, street, city, zipCode, state, phone },
          }) => {
            const orderedOn = new Date(Date.parse(createdAt))
              .toString()
              .split(" ")
              .splice(0, 4)
              .join(" ");
            return (
              <div className="order-card" key={_id}>
                <div className="flex-col gap-0-5">
                  <p>
                    <span className="text-bold-weight green-text mr-0-5">
                      Order Confirmed
                    </span>
                    <span className="disp-inline-block">{orderedOn}</span>
                  </p>
                  <span>
                    <b>Payment Id:</b> {paymentId}
                  </span>
                  <div className="lh-0-1">
                    <p>
                      <b>Delivered To:</b> {name}
                    </p>
                    <span> {phone} </span>
                    <p>
                      {street}, {city}, {state},{zipCode}
                    </p>
                  </div>
                  <p>
                    <b>Total Price: </b> {totalAmount}
                  </p>
                </div>
                {items.map(({ img, name, _id, qty, price }) => {
                  return (
                    <div key={_id} className="order-item-card">
                      <div className="w-30p p-0-25">
                        <img
                          src={img}
                          className="responsive-img"
                          alt="ordered-product"
                        />
                      </div>
                      <div className="flex-col justify-center p-0-25 gap-0-25">
                        <b>{name}</b>
                        <span> Quantity: {qty}</span>
                        <span>Price: {price} </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        )
      ) : (
        <p>
          No Orders Yet.
          <Link to={routes.PRODUCTS_PAGE} className="primary-text link ml-0-5">
            Purchase Now
          </Link>
        </p>
      )}
    </main>
  );
};

export { OrdersTab };
