import { createStore } from "redux";
import { commentReducer } from "./action";

export const store = createStore(commentReducer)