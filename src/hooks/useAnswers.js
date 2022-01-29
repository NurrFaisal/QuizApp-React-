import { useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useState } from "react/cjs/react.development";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answersRef = ref(db, "answers/" + videoID + "/questions");
      const answersQuery = query(answersRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answersQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
