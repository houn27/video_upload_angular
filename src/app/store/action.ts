import { createAction,props} from "@ngrx/store";
import { StateType } from "./reducer";


export const Set = createAction("Set User Info",props< StateType>())
export const SetId = createAction("Set Id",props< Number >())
export const Reset = createAction("Reset User Info")
