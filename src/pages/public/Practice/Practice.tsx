import { testingService } from "@/services/testing";
import { useEffect, useState } from "react";
function Practice() {
  const [morty, setMorty] = useState({} as any);

  const fetchMorty = async () => {
    const { data } = await testingService();
    setMorty(data);
  };

  useEffect(() => {
    try {
      fetchMorty();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return <div>{JSON.stringify(morty)}</div>;
}
export default Practice;
