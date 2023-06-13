import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import useStore from "./useStore"

function App() {
    return (
        <div>
            <Display />
            <Keypad />
        </div>
    );
}

export default App;
