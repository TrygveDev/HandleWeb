import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import "../style/app.css";
import "../style/menu.css";
import Header from "./Header";
import List from "./List";
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCalendar } from "@fortawesome/free-solid-svg-icons";

function App() {
    const [money, setMoney] = useState(Cookies.get("money") == null ? 0 : Cookies.get("money"))

    function subtractMoney(amount) {
        setMoney(money - amount)
    }
    function restoreMoney(amount) {
        setMoney(parseInt(money) + parseInt(amount))
    }

    useEffect(() => {
        Cookies.set("money", money, { expires: 365 })
    }, [money])

    return (
        <div className="container">
            <Menu
                right
                className="menu"
                // customBurgerIcon={<FontAwesomeIcon icon={faBars} color={"white"}></FontAwesomeIcon>}
                customCrossIcon={<FontAwesomeIcon icon={faClose} color={"black"}></FontAwesomeIcon>}
            >
                <div className="menu-item">
                    <FontAwesomeIcon icon={faCalendar} color={"white"}></FontAwesomeIcon>
                </div>
                <div className="menu-item">Instillinger</div>
                <div className="menu-item">Om Appen</div>
            </Menu>
            <Header money={money} setMoney={setMoney} restoreMoney={restoreMoney} subtractMoney={subtractMoney} />
            <List subtractMoney={subtractMoney} restoreMoney={restoreMoney} setMoney={setMoney} />
        </div>
    );
}

export default App;