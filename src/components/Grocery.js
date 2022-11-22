import "../style/grocery.css";
import { useState } from "react";

function Grocery(props) {
    const [checked, setChecked] = useState(false);
    function handleClick() {
        checked ? setChecked(false) : setChecked(true);
        if (!checked) {
            // Get and set price
        }
    }
    return (
        <div className={checked ? "grocery-item checked" : "grocery-item"} onClick={handleClick}>
            <div className="item-title">{props.title}</div>
            <div className="item-price">{props.price} kr</div>
        </div>

    );
}

export default Grocery;

