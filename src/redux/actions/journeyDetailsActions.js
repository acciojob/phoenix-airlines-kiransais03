import { JOURNEY_DETAILS } from "./actionTypes";

export const storeJourneydata = (data)=>{
    return {
        type:JOURNEY_DETAILS,
        payload :data,
    }
}