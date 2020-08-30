import * as actionTypes from "../actions/actionTypes";

const initialState={
            locationName : "",
            addr1 : "",
            addr2 : "",
            suiteNum : null,
            city : "",
            stateName : "",
            zip:null,
            phone : null,
            timezone : "",
            facilityTimes : "",
            appointmentPool : []
};

export default (state= initialState, action) => {
    state = action.payload
    switch(action.type){
        case actionTypes.ADD_Location:
            return {
               ...state
            };
        default: 
         return state;
    }
};
