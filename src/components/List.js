import { useState } from "react";
import "../style/list.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Grocery from "./Grocery";


function List() {
    const [groceryList, setGroceryList] = useState(["Avocado", "Hotdog"]);
    const [grocery, setGrocery] = useState("Avocado");
    const [deleteMode, setDeleteMode] = useState(false);
    function addGrocery() {
        console.log("added")
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
    return (
        <div className="container-list">
            <div className="list-button">
                <div className={deleteMode ? "button-div active" : "button-div"}><FontAwesomeIcon icon={faTrashCan} size="2xl" onClick={toggleDeleteMode} /></div>
                <div className="button-div"><FontAwesomeIcon icon={faPlus} size="2xl" onClick={addGrocery} /></div>
            </div>
            <div className="list">
                {
                    groceryList.map((item, index) => {
                        return (<Grocery title={item} key={index} deleteMode={deleteMode} deleteGrocery={deleteGrocery} />);
                    })
                }
            </div>
        </div>

    );
}

export default List;

