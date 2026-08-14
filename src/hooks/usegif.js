import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const randomUrl = "https://api.giphy.com/v1/gifs/random?api_key=kXYaX7wCACsfNka4VQudYPbSUeQ7V6bp";

  const fetchData = useCallback(async (tag = "") => {
    setLoading(true);

    try {
      const url = tag.trim()
        ? `${randomUrl}&tag=${encodeURIComponent(tag)}`
        : randomUrl;
      const output = await axios.get(url);
      setGif(output.data.data.images.original.url);
    } catch (error) {
      console.error("Unable to fetch a GIF:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { gif, loading, fetchData };
};

export default useGif;
