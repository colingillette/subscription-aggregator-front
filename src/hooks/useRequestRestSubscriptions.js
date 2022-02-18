import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const restUrl = "http://localhost:8080/";

function useRequestRestSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getSubscriptions() {
      try {
        const result = await axios.get(restUrl + "channels/subscribed");
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSubscriptions(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    getSubscriptions();
    return () => {
      setSubscriptions({});
    };
  }, []);

  return {
    subscriptions,
    requestStatus,
    error,
  };
}

export default useRequestRestSubscriptions;
