import "../style/grocery.css";
import { useState } from "react";

function Grocery(props) {
    const [checked, setChecked] = useState(false);
    function handleClick() {
        if (props.deleteMode) {
            console.log(props)
            props.deleteGrocery(props.index)
        } else {
            checked ? setChecked(false) : setChecked(true);
            if (!checked) {
                props.toggleDisplayModal(true);
            } else if (checked) {
                props.restoreMoneyFromModal(props.price)
            }
        }
    }
    return (
        <div className={checked ? "grocery-item checked" : "grocery-item"} onClick={handleClick}>
            <div className="item-title">{props.title}</div>
            <div className="item-price">{props.price === null ? "" : props.price + " kr"}</div>
        </div>

    );
}

export default Grocery;

