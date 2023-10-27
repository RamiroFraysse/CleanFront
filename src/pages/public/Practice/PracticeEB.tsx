import { ErrorBoundary } from "@/utilities";
import { useEffect, useState } from "react";
function PracticeEB() {
  const [result, setResult] = useState({} as any);
  const [error, setError] = useState<boolean>(false);

  const fetchRichAndMorty = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/ASapi/character/1"
      )
        .then((r) => {
          if (r.status !== 200) throw new Error("Error");
          return r;
        })
        .catch((error) => {
          throw new Error(error);
        });
      const data = await response.json();
      setResult(data);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchRichAndMorty();
  }, []);

  return (
    <ErrorBoundary
      fallBackComponent={<>Error</>}
      resetCondition={result}
      error={error}
    >
      <div>{JSON.stringify(result)}</div>{" "}
    </ErrorBoundary>
  );
}
export default PracticeEB;
