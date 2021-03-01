import { useSelector } from "react-redux";

export default function useGetUserId() {
  const userId = useSelector(
    (state) => state?.UserInformation?.currentUserInfo?._id
  );

  return userId;
}
