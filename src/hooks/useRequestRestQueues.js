import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const restUrl = "http://localhost:8080/";

function useRequestRestQueues() {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getQueue() {
      try {
        const result = await axios.get(restUrl + "queues");
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    getQueue();
    return () => {
      setData({});
    };
  }, []);

  return {
    data,
    requestStatus,
    error,
  };
}

export default useRequestRestQueues;
