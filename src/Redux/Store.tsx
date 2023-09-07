import { createStore } from "redux";
import { Combined } from "./CombinedReducers";

export const store=createStore(Combined);