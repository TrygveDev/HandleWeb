import { useState } from "react";
import "../style/app.css";
import Header from "./Header";
import List from "./List";

function App() {
    const [money, setMoney] = useState(0)

    function subtractMoney(amount) {
        setMoney(money - amount)
    }
    function restoreMoney(amount) {
        setMoney(parseInt(money + amount))
    }

    return (
        <div className="container">
            <Header money={money} setMoney={setMoney} />
            <List subtractMoney={subtractMoney} restoreMoney={restoreMoney} />
        </div>

    );
}

export default App;

