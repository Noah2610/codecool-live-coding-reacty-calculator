import { create } from "zustand";

const useStore = create((set) => ({
    chars: [1, 2, 3],
    addChar: (char) => {
        set(({ chars }) => ({ chars: [...chars, char] }));
    },
}));

export default useStore;
