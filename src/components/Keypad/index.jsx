import Button from "../Button";
import useStore from "../../useStore";
import "./keypad.css";

export default function Keypad() {
    const addDigit = useStore((state) => state.addDigit);

    const keys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

    return (
        <div className="keypad">
            <Button onClick={() => addDigit(7)}>
                7
            </Button>
            <Button onClick={() => addDigit(8)}>
                8
            </Button>
            <Button onClick={() => addDigit(9)}>
                9
            </Button>
            <Button className="button-highlight">
                x
            </Button>
            <Button onClick={() => addDigit(4)}>
                4
            </Button>
            <Button onClick={() => addDigit(5)}>
                5
            </Button>
            <Button onClick={() => addDigit(6)}>
                6
            </Button>
            <Button className="button-highlight">
                -
            </Button>
            <Button onClick={() => addDigit(1)}>
                1
            </Button>
            <Button onClick={() => addDigit(2)}>
                2
            </Button>
            <Button onClick={() => addDigit(3)}>
                3
            </Button>
            <Button className="button-highlight">
                +
            </Button>
            <Button className="button-wide" onClick={() => addDigit(0)}>
                0
            </Button>
            <Button>
                .
            </Button>
            <Button className="button-highlight">
                =
            </Button>
        </div>
    );
}
