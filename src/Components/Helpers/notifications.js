import { toast } from "@carlosedua/react-toastify";

const commonsProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export function alertError(title = "Error.") {
  toast.error("☓ " + title, {
    ...commonsProps,
  });
}

export function alertWarn(title = "Warning.") {
  toast.warn("⚠ " + title, {
    ...commonsProps,
  });
}

export function alertSuccess(title = "Success.") {
  toast.success("✓ " + title, {
    ...commonsProps,
  });
}