import { useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateCartItemQuantity from "./UpdateCartItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 md:flex md:items-center md:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6 ">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <UpdateCartItemQuantity
        pizzaId={pizzaId}
        currentQuantity={currentQuantity}
      />
      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
}

export default CartItem;
