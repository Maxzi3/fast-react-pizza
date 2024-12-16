import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../Feature/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const naviation = useNavigation();
  const isLoading = naviation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
