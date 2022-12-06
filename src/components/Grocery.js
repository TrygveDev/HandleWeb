import "../style/grocery.css";
import { useState } from "react";

function Grocery(props) {
    const [checked, setChecked] = useState(props.price === 0 ? false : true);
    function handleClick() {
        props.setGroceryIndexState(props.index)
        if (props.deleteMode) {
            props.deleteGrocery(props.index)
        } else {
            checked ? setChecked(false) : setChecked(true);
            if (!checked) {
                props.toggleDisplayModal(true);
            } else if (checked) {
                props.restoreMoneyFromModal(props.price)
                props.removeGroceryCost(props.index);
            }
        }
    }
    return (
        <div className={checked ? "grocery-item checked" : "grocery-item"} onClick={handleClick}>
            <div className="item-title">{props.title}</div>
            <div className="item-price">{props.price === null || props.price === 0 ? "" : props.price + " kr"}</div>
        </div>

    );
}

export default Grocery;

