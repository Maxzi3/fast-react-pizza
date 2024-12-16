import { useSelector } from "react-redux";

const UserName = () => {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <div>
      <p className="text-sm font-semibold hidden md:block">{userName}</p>
    </div>
  );
};

export default UserName;
