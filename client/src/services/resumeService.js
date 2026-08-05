import axios from "axios";

const API = "http://localhost:8000/api/resume";

export const uploadResume = async (formData) => {
  const token = localStorage.getItem("token");

  return axios.post(API + "/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};