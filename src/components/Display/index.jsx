export default function Display({ digits }) {
    return (
        <div>
            {digits.map((digit, i) => (
                <span key={i}>{digit}</span>
            ))}
        </div>
    );
}
