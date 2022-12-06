import { useEffect, useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";
import Modal from "./Modal";
import Modal3 from "./Modal3";
import Cookies from "js-cookie";


function List(props) {
    const [displayModal, setDisplayModal] = useState(false)
    const [displayModal3, setDisplayModal3] = useState(false)
    const [groceryList, setGroceryList] = useState(Cookies.get("groceryList") == null ? [] : JSON.parse(Cookies.get("groceryList")));
    const [deleteMode, setDeleteMode] = useState(false);
    const [groceryIndex, setGroceryIndex] = useState(null);

    let groceryObj = groceryList.map((item, index) => {
        return (<Grocery title={item.title} key={index} index={index} price={item.price} deleteMode={deleteMode} deleteGrocery={deleteGrocery} toggleDisplayModal={toggleDisplayModal} displayModal={displayModal} restoreMoneyFromModal={restoreMoneyFromModal} setGroceryIndexState={setGroceryIndexState} removeGroceryCost={removeGroceryCost} />);
    })
    useEffect(() => {
        Cookies.set("groceryList", JSON.stringify(groceryList), { expires: 365 })
        console.log("grocerlist updated")
    }, [groceryList, setGroceryCost])
    function addGrocery(grocery) {
        setGroceryList([...groceryList, { "title": grocery, "price": 0 }])
    }
    function deleteGrocery(index) {
        let listCopyFiltered = groceryObj.filter((item) => item.props.index !== index)
        setGroceryList(listCopyFiltered)
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
    // eslint-disable-next-line
    function setGroceryCost(amount, index) {
        let listCopy = groceryList;
        listCopy[index].price = amount;
        setGroceryList(listCopy)
    }
    function removeGroceryCost(index) {
        let listCopy = groceryList;
        listCopy[index].price = 0;
        setGroceryList(listCopy)
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

