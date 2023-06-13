import useStore from "../../useStore";

export default function Display() {
    const digits = useStore((state) => state.digits);

    return (
        <div>
            {digits.map((digit, i) => (
                <span key={i}>{digit}</span>
            ))}
        </div>
    );
}
