import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { removeProduct } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(removeProduct(pizzaId))}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteItem;
