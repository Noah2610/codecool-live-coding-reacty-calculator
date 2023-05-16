import Button from "../Button";
import "./keypad.css";

export default function Keypad() {
    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    return (
        <div className="keypad">
            {keys.map((key) => (
                <Button key={key}>{key}</Button>
            ))}
        </div>
    );
}
