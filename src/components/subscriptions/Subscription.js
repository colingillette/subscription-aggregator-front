import React, { memo } from "react";
import ErrorBoundary from "../common/ErrorBoundary";

const SubscriptionNoErrorBoundary = memo(function Subscription({
  channel,
  showErrorCard,
}) {
  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 mb-4">
        <div className="card h-100 p-4 mt-4">
          <div className="entry-info">
            <h4>ERROR!</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 mb-4">
      <div className="card h-100 p-4 mt-4">
        <div className="entry-info">
          <div className="border-bottom border-dark mb-2">
            <h4 className="entry-name">{channel.name}</h4>
          </div>
          <h5>
            <i>{channel.provider.name}</i>
          </h5>
          <p>
            Subscribed:
            <input type={"checkbox"} checked={channel.subscribed} readOnly />
          </p>
        </div>
      </div>
    </div>
  );
},
areEqualSubscription);

function areEqualSubscription(prevProps, nextProps) {
  return prevProps.channel.name === nextProps.channel.name;
}

function Subscription(props) {
  return (
    <ErrorBoundary
      errorUI={<SubscriptionNoErrorBoundary {...props} showErrorCard={true} />}
    >
      <SubscriptionNoErrorBoundary {...props} />
    </ErrorBoundary>
  );
}

export default Subscription;
