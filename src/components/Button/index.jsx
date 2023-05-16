import "./button.css";

export default function Button({ onClick, children }) {
    return (
        <button className="button" type="button" onClick={onClick}>
            {children}
        </button>
    );
}
