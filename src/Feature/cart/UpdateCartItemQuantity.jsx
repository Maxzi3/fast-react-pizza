import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseProductQuantity, increaseProductQuantity } from "./cartSlice";

const UpdateCartItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseProductQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseProductQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateCartItemQuantity;
