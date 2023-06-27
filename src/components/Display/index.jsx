import useStore from "../../useStore";

export default function Display() {
    const chars = useStore((state) => state.chars);

    return (
        <div>
            {chars.map((char, i) => (
                <span key={i}>{char}</span>
            ))}
        </div>
    );
}
