import React from "react";
import SubscriptionsList from "./SubscriptionsList";

const Subscriptions = () => {
  return (
    <div className="container text-center">
      <h2>Subscriptions</h2>
      <p>Listed by Provider in Alphabetical Order</p>
      <SubscriptionsList />
    </div>
  );
};

export default Subscriptions;
