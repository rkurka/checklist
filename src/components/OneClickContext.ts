import {createContext} from "react";

interface OneClickContext {
    cashbook : boolean
    smartConnect : boolean
    sevDesk : boolean
    upload : boolean
}

export const OCContext = createContext({
    cashbook: true,
    smartConnect: false,
    sevDesk: false,
    upload: false,
} as OneClickContext);
