import { useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";
import Modal from "./Modal";
import Modal3 from "./Modal3";


function List(props) {
    const [displayModal, setDisplayModal] = useState(false)
    const [displayModal3, setDisplayModal3] = useState(false)
    const [groceryList, setGroceryList] = useState([]);
    const [deleteMode, setDeleteMode] = useState(false);
    const [groceryIndex, setGroceryIndex] = useState(null);
    var groceryObj

    function createGroceryObj() {
        groceryObj = groceryList.map((item, index) => {
            return (<Grocery title={item.props.title} key={index} index={index} price={null} deleteMode={deleteMode} deleteGrocery={deleteGrocery} toggleDisplayModal={toggleDisplayModal} displayModal={displayModal} restoreMoneyFromModal={restoreMoneyFromModal} setGroceryIndexState={setGroceryIndexState} />);
        })
    }
    createGroceryObj()

    function addGrocery(grocery) {
        setGroceryList([...groceryList, <Grocery title={grocery} />])

    }
    function deleteGrocery(index) {

        let listCopyFiltered = groceryObj.filter((item) => item.props.index !== index)
        setGroceryList(listCopyFiltered)
        console.log(groceryList)
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
    function setGroceryCost(amount, index) {
        let listCopy = groceryObj;
        listCopy[index].props.price = amount;
        setGroceryList(listCopy);
    }
    function setGroceryIndexState(index) {
        setGroceryIndex(index);
    }



    return (
        <div className="container-list">
            <Modal3 addGrocery={addGrocery} displayModal3={displayModal3} setDisplayModal3={setDisplayModal3} />
            <Modal setGroceryIndexState={setGroceryIndexState} groceryIndex={groceryIndex} setGroceryCost={setGroceryCost} displayModal={displayModal} toggleDisplayModal={toggleDisplayModal} subtractMoneyFromModal={subtractMoneyFromModal} />
            <div className="list-button">
                <div className={deleteMode ? "button-div active" : "button-div"}><FontAwesomeIcon icon={faTrashCan} size="2xl" onClick={toggleDeleteMode} /></div>
                <div className="button-div"><FontAwesomeIcon icon={faPlus} size="2xl" onClick={() => { setDisplayModal3(true) }} /></div>
            </div>
            <div className="list">
                {groceryObj}
            </div>
        </div>

    );
}

export default List;

