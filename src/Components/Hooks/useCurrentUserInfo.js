import { useSelector } from "react-redux";

export default function useCurrentUserInfo() {
  const { currentUserInfo } = useSelector((state) => state.UserInformation);
  return currentUserInfo;
}
