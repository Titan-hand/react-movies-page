import { toast } from "react-toastify";

const commonsProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function alertDanger(title = "Error.") {
  toast.error("⚠ " + title, {
    ...commonsProps,
  });
}

export function alertSuccess(title = "Success.") {
  toast.success("✓ " + title, {
    ...commonsProps,
  });
}