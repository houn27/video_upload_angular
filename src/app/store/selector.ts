import { createFeatureSelector,createSelector } from "@ngrx/store";
import { StateType } from "./reducer";

export const selectUser=createFeatureSelector<StateType>('user');

export const selectUsername=createSelector(selectUser,(user:StateType)=>{
    return user.username;
})

export const selectNickname=createSelector(selectUser,(user:StateType)=>{
    return user.nickname;
})

export const selectId=createSelector(selectUser,(user:StateType)=>{
    return user.id;
})