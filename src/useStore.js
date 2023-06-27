import { create } from "zustand";

const useStore = create((set, get) => ({
    chars: [1, 2, 3],

    addChar: (char) => {
        set(({ chars }) => ({ chars: [...chars, char] }));
    },

    calculate: () => {
        const { chars } = get();

        const tokens = [];

        for (const char of chars) {
            const lastChar = tokens[tokens.length - 1];
            if (typeof lastChar === "number" && typeof char === "number") {
                tokens[tokens.length - 1] = Number(`${lastChar}${char}`);
                continue;
            }

            tokens.push(char);
        }

        let result = 0;
        let op = null;

        for (const token of tokens) {
            if (typeof token === "string") {
                op = token;
                continue;
            }

            if (!op && typeof token === "number") {
                result = token;
                continue;
            }

            if (op && typeof token === "number") {
                switch (op) {
                    case "+":
                        result += token;
                        break;
                    case "-":
                        result -= token;
                        break;
                    case "*":
                        result *= token;
                        break;
                    default:
                        throw new Error(`Unimplemented operator: ${op}`);
                }
            }
        }

        set({ chars: [result] });
    }
}));

export default useStore;
