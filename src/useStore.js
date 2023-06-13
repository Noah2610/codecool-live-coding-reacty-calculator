import { create } from "zustand";

const useStore = create((set) => ({
    digits: [1, 2, 3],
    addDigit: (digit) => {
        set(({ digits }) => ({ digits: [...digits, digit] }));
    },
}));

export default useStore;
