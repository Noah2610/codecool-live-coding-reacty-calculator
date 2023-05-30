import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
    const [digits, setDigits] = useState([1, 2, 3]);

    return (
        <div>
            <Display digits={digits} />
            <Keypad setDigits={setDigits} />
        </div>
    );
}

export default App;
