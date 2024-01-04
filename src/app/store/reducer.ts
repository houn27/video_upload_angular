import { Action,createReducer, on } from "@ngrx/store";
import { Set,SetId, Reset } from "./action";


export interface StateType{
    id:number,
    username:string,
    nickname:string
}

export const initialState:StateType={
    id:-1,
    username:"aaa",
    nickname:"aaa"
}

export const userReducer = createReducer(
    initialState,
    on(Set, (state:StateType,action) =>{
        state={...action};
        return state;
    } ),
    on(SetId, (state:StateType,action) =>{
        return {...state,id:Number(action)};
    } ),
    on(Reset, (state) => initialState)
  )

// export function userReducer(state:StateType=initialState,action:Action){
//     switch(action.type){
//         case ActionTypes.Change:
//             return action.type;
//         case ActionTypes.Reset:
//             return initialState;
//         default:
//             return state;
//     }
// }