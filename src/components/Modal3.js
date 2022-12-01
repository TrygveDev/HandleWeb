import "../style/modal3.css";


function Modal3(props) {
    function hideModal3() {
        props.setDisplayModal3(false)
        document.getElementById('inputModal3').value = ""
    }
    function submitModal3() {
        props.setDisplayModal3(false)
        props.addGrocery(document.getElementById('inputModal3').value)
        document.getElementById('inputModal3').value = ""
    }
    return (
        <div className={props.displayModal3 ? "modal-view show" : "modal-view"}>
            <div className="modal">
                <p>Skriv inn en vare du skal handle</p>
                <input id="inputModal3" type="text" name="weight" placeholder="Eple..."></input>
                <div className="modal-btn">
                    <button onClick={hideModal3}>Avbryt</button>
                    <button onClick={submitModal3}>OK</button>
                </div>
            </div>
        </div>

    );
}

export default Modal3;

