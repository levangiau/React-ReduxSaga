import { toast } from "react-toastify";

export const toastErr = (error) => {
  let message = null;
  if (typeof message === "object" && error.message) {
    message = error.message;
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message);
  }
};
