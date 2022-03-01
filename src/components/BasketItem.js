export default function BasketItem(props) {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;
  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <button
          className="waves-effect waves-light btn btna"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>Add
        </button>
        <button
          className="waves-effect waves-light btn btnr"
          onClick={() => decrementQuantity(id)}
          style={{ margin: "0px 9px" }}
        >
          <i className="material-icons left">exposure_minus_1</i>
          Remove
        </button>
        <button
          className="waves-effect waves-light btn btnd"
          style={{ margin: "0px 9px" }}
          onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i>
          <span> Delete</span>
        </button>
      </span>
    </li>
  );
}
