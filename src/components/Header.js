import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'


function Header(props) {
    function handleClick() {
        // Open modal set modal value to new header value
    }

    return (
        <div className="container-header">
            <div className="header-edit">
                <FontAwesomeIcon icon={faPenToSquare} size="2xl" onClick={handleClick} />
            </div>
            <div className="header">
                <h1>{props.money} kr</h1>
                <p>Dine Penger</p>
            </div>
        </div>

    );
}

export default Header;

