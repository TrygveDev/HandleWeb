// import { useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";


function List() {
    // const [balance, setBalance] = useState(0);

    // function handleClick() {
    //     setBalance(10)
    // }

    return (
        <div className="container-list">
            <div className="list-button">
                <div><FontAwesomeIcon icon={faTrashCan} size="2xl" /></div>
                <div><FontAwesomeIcon icon={faPlus} size="2xl" /></div>
            </div>
            <div className="list">
                <Grocery title="Avocado" price="23" />
                <Grocery title="Avocado" price="23" />
                <Grocery title="Avocado" price="23" />
                <Grocery title="Avocado" price="23" />
                <Grocery title="Avocado" price="23" />
                <Grocery title="5Avocado" price="23" />
                <Grocery title="2Avocado" price="23" />
                <Grocery title="6Avocado" price="23" />
                <Grocery title="1Avocado" price="23" />
                <Grocery title="1vocado" price="23" />
                <Grocery title="2Avocado" price="23" />
                <Grocery title="6Avocado" price="23" />
                <Grocery title="5Avocado" price="23" />
                <Grocery title="2Avocado" price="23" />
            </div>
        </div>

    );
}

export default List;

