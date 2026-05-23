import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export const colorizeImage = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await client.post(
    "/colorize",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      // IMPORTANT
      responseType: "blob",
    }
  );

  // Convert blob to image URL
  return URL.createObjectURL(response.data);
};

export default client;