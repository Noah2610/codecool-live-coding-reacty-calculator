import Button from "../Button";
import "./keypad.css";

export default function Keypad({ setDigits }) {
    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    const addDigit = (digit) => setDigits((digits) => [...digits, digit]);

    return (
        <div className="keypad">
            {keys.map((key) => (
                <Button key={key} onClick={() => addDigit(key.toString())}>
                    {key}
                </Button>
            ))}
        </div>
    );
}
