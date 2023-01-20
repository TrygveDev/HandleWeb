import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import "../style/app.css";
import Header from "./Header";
import List from "./List";

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
            <Header money={money} setMoney={setMoney} restoreMoney={restoreMoney} subtractMoney={subtractMoney} />
            <List subtractMoney={subtractMoney} restoreMoney={restoreMoney} setMoney={setMoney} />
        </div>

    );
}

export default App;