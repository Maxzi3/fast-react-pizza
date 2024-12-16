import { Link } from "react-router-dom";
import SearchOrder from "../Feature/order/SearchOrder";
import UserName from "../Feature/user/UserName";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-yellow-500 uppercase sm:px-6 px-4 py-3 border-b border-stone-200">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
