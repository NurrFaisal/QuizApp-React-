import { useEffect, useState } from "react";

export default function useFetch({ url, method, headers }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    function requestFetch() {
      try {
        setLoading(true);
        setError(false);
        const response = fetch(url, {
          method: method || "GET",
          headers: Headers,
        });
        const data = response.json();
        setLoading(false);
        setResult(data);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    requestFetch();
  }, []);

  return {
    loading,
    error,
    result,
  };
}
