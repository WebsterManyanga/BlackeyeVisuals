import { createGlobalState } from "react-hooks-global-state";

const state= {
    socialsActive: false,
    menuOpen: false,
    showPorfolio: false
};

export const {useGlobalState} = createGlobalState(state);