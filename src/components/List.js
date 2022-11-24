import { useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";
import Modal from "./Modal";


function List(props) {
    const [displayModal, setDisplayModal] = useState(false)
    const [groceryList, setGroceryList] = useState(["Avocado", "Hotdog"]);
    const [grocery, setGrocery] = useState("");
    const [deleteMode, setDeleteMode] = useState(false);
    function addGrocery() {
        console.log("added")
        setGrocery("Avocado")
        setGroceryList(groceryList => [...groceryList, grocery])
        console.log(groceryList)
    }
    function deleteGrocery(index) {
        console.log("deleted")
        let listCopy = [...groceryList];
        listCopy.splice(index, 1);
        setGroceryList(listCopy);
    }
    function toggleDeleteMode() {
        deleteMode ? setDeleteMode(false) : setDeleteMode(true);
    }
    function toggleDisplayModal(boolean) {
        setDisplayModal(boolean);
        console.log(displayModal)
    }
    function subtractMoneyFromModal(amount) {
        props.subtractMoney(amount)
    }
    function restoreMoneyFromModal(amount) {
        props.restoreMoney(amount)
    }
    return (
        <div className="container-list">
            <Modal displayModal={displayModal} toggleDisplayModal={toggleDisplayModal} subtractMoneyFromModal={subtractMoneyFromModal} />
            <div className="list-button">
                <div className={deleteMode ? "button-div active" : "button-div"}><FontAwesomeIcon icon={faTrashCan} size="2xl" onClick={toggleDeleteMode} /></div>
                <div className="button-div"><FontAwesomeIcon icon={faPlus} size="2xl" onClick={addGrocery} /></div>
            </div>
            <div className="list">
                {
                    groceryList.map((item, index) => {
                        return (<Grocery title={item} key={index} price={null} deleteMode={deleteMode} deleteGrocery={deleteGrocery} toggleDisplayModal={toggleDisplayModal} displayModal={displayModal} restoreMoneyFromModal={restoreMoneyFromModal} />);
                    })
                }
            </div>
        </div>

    );
}

export default List;

