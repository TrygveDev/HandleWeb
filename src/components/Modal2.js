import "../style/modal2.css";


function Modal2(props) {
    function hideModal2() {
        props.toggleDisplayModal(false)
        document.getElementById('inputmodal2').value = ""
    }
    function submitModal2() {
        props.toggleDisplayModal(false)
        let value = document.getElementById('inputmodal2').value === isNaN || document.getElementById('inputmodal2').value === "" ? 0 : document.getElementById('inputmodal2').value
        props.newHeaderMoney(value)
        document.getElementById('inputmodal2').value = ""
    }
    return (
        <div className={props.displayModal ? "modal2-view show" : "modal2-view"}>
            <div className="modal2">
                <p>Hvor mye penger har du?</p>
                <input id="inputmodal2" type="number" name="weight" placeholder="0"></input>
                <div className="modal2-btn">
                    <button onClick={hideModal2}>Avbryt</button>
                    <button onClick={submitModal2}>OK</button>
                </div>
            </div>
        </div>

    );
}

export default Modal2;

