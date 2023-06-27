import "./button.css";

export default function Button({ onClick, className, children }) {
    const classes = ["button"];
    if (className) {
        classes.push(className);
    }

    return (
        <button className={classes.join(" ")} type="button" onClick={onClick}>
            {children}
        </button>
    );
}
