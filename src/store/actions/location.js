import * as actionTypes from './actionTypes';

const editLocation = id => {
    let result;
    return {
        type: actionTypes.EDIT_TABLE,
        payload: id
    }
}

const addLocation = (data) => {
    let res;
    return {
        type:actionTypes.ADD_Location,
        payload:data
        // payload: {
        //     locationName : "",
        //     addr1 : "",
        //     addr2 : "",
        //     suiteNum : null,
        //     city : "",
        //     stateName : "",
        //     zip:null,
        //     phone : null,
        //     timezone : "",
        //     facilityTimes : "",
        //     appointmentPool : []
        // }
    }
}