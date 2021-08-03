import { useState, useCallback } from "react";
import axios from "axios";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const makeRequest = useCallback(async (requestCfg, params, packageData) => {
    setLoading(true);
    setError(null);
    const options = {
      method: requestCfg.method ? requestCfg.method : "GET",
      headers: requestCfg.headers ? requestCfg.headers : {},
      body: requestCfg.body ? JSON.stringify(requestCfg.body) : {},
    };
    const requests = [];
    for (const paramObj of params) {
      requests.push(
        axios({
          url: requestCfg.url,
          method: options.method,
          headers: options.headers,
          body: options.body,
          params: paramObj,
        })
      );
    }
    try {
      const result = await axios.all(requests);
      packageData(result);
    } catch (error) {
      setError(error.messsge || "OH NOES!!");
    }
    setLoading(false);
  }, []);
  return {
    loading,
    error,
    makeRequest,
  };
};

export default useFetch;
