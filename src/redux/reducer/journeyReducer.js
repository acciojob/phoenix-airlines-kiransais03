import {JOURNEY_DETAILS} from "../actions/actionTypes";
import storeJourneydata from "../actions/journeyDetailsActions";

let initialState = null;

const journeyReducer = (state=initialState,action)=>{
    switch(action.type) {
        case JOURNEY_DETAILS : return (action.payload);
        default : return state;
    }
}

export default journeyReducer;