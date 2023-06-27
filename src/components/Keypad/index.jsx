import Button from "../Button";
import useStore from "../../useStore";
import "./keypad.css";

export default function Keypad() {
    const addChar = useStore((state) => state.addChar);

    return (
        <div className="keypad">
            <Button onClick={() => addChar(7)}>
                7
            </Button>
            <Button onClick={() => addChar(8)}>
                8
            </Button>
            <Button onClick={() => addChar(9)}>
                9
            </Button>
            <Button className="button-highlight">
                x
            </Button>
            <Button onClick={() => addChar(4)}>
                4
            </Button>
            <Button onClick={() => addChar(5)}>
                5
            </Button>
            <Button onClick={() => addChar(6)}>
                6
            </Button>
            <Button className="button-highlight">
                -
            </Button>
            <Button onClick={() => addChar(1)}>
                1
            </Button>
            <Button onClick={() => addChar(2)}>
                2
            </Button>
            <Button onClick={() => addChar(3)}>
                3
            </Button>
            <Button className="button-highlight" onClick={() => addChar("+")}>
                +
            </Button>
            <Button className="button-wide" onClick={() => addChar(0)}>
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
