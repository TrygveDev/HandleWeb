import { useEffect, useRef, useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";
import Cookies from "js-cookie";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function List(props) {
    const inputRef = useRef(null);
    const [groceryList, setGroceryList] = useState(Cookies.get("groceryList") == null ? [] : JSON.parse(Cookies.get("groceryList")));
    const [deleteMode, setDeleteMode] = useState(false);

    let groceryObj = groceryList.map((item, index) => {
        return (<Grocery title={item.title} key={index} index={index} price={item.price} deleteMode={deleteMode} deleteGrocery={deleteGrocery} restoreMoneyFromModal={restoreMoneyFromModal} removeGroceryCost={removeGroceryCost} setGroceryCost={setGroceryCost} subtractMoneyFromModal={subtractMoneyFromModal} />);
    })
    useEffect(() => {
        Cookies.set("groceryList", JSON.stringify(groceryList), { expires: 365 })
    }, [groceryList, setGroceryCost])
    function addGrocery(grocery) {
        setGroceryList([...groceryList, { "title": grocery, "price": 0 }])
    }
    function deleteGrocery(index) {
        let listCopyFiltered = groceryList.filter((item) => groceryList.indexOf(item) !== index)
        setGroceryList(listCopyFiltered)
    }
    function toggleDeleteMode() {
        deleteMode ? setDeleteMode(false) : setDeleteMode(true);
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

    function plusClick() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='inputModal'>
                        <div className='inputModal-content'>
                            <h1>Skriv inn en vare du skal handle</h1>
                            <input ref={inputRef} placeholder="Eple..." type="text"></input>
                            <div className='inputModal-buttons'>
                                <button
                                    onClick={() => {
                                        onClose();
                                    }}
                                >Avbryt</button>
                                <button
                                    onClick={() => {
                                        if (inputRef.current.value === "") {
                                            alert("Du kan ikke legge til en vare uten navn!")
                                        } else {
                                            addGrocery(inputRef.current.value)
                                        }
                                        onClose();
                                    }}
                                >Ok</button>
                            </div>
                        </div>
                    </div >
                );
            }
        });
    }


    return (
        <div className="container-list">
            <div className="list-button">
                <div className={deleteMode ? "button-div active" : "button-div"}><FontAwesomeIcon icon={faTrashCan} size="2xl" onClick={toggleDeleteMode} /></div>
                <div className="button-div"><FontAwesomeIcon icon={faPlus} size="2xl" onClick={plusClick} /></div>
            </div>
            <div className="list">
                {groceryObj}
            </div>
        </div>

    );
}

export default List;

