import Button from "../Button";
import useStore from "../../useStore";
import "./keypad.css";

export default function Keypad() {
    const addDigit = useStore((state) => state.addDigit);

    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

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
