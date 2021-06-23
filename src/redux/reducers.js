// types
import { SET_USERS, FILTER_USERS } from "./types";

const initialState = {
    allUsers: [],
    filteredUsers: []
}

// Reducer for getting and filtering users
export const getUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                allUsers: action.payload,
                filteredUsers: action.payload
            }
        case FILTER_USERS:
            return {
                ...state,
                // Filtering logic, checking action.payload object keys
                filteredUsers: state.allUsers.filter(user => {
                    return (!action.payload.gender || user.gender === action.payload.gender) && ((!action.payload.ageRange[0] || user.age >= action.payload.ageRange[0]) && (!action.payload.ageRange[1] || user.age <= action.payload.ageRange[1]))
                        && (!action.payload.searchText || user.name.toLowerCase().includes(action.payload.searchText) || user.address.toLowerCase().includes(action.payload.searchText))
                }),
            }
        default:
            return state;
    }
}