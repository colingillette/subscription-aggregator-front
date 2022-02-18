import React from "react";
import useRequestRestSubscriptions, {
  REQUEST_STATUS,
} from "../../hooks/useRequestRestSubscriptions";
import Subscription from "./Subscription";

function SubscriptionsList() {
  const { subscriptions, requestStatus, error } = useRequestRestSubscriptions();

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">Loading Subscriptions Failed: {error}</div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {subscriptions.map(function (channel) {
          return <Subscription key={channel.id} channel={channel} />;
        })}
      </div>
    </div>
  );
}

export default SubscriptionsList;
