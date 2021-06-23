// types
import { SET_USERS, FILTER_USERS } from "./types";

// Action for getting users from RandomUserApi
export const fetchUsers = () => {
    return async dispatch => {
        const response = await fetch('https://randomuser.me/api/?results=30')
        const users = await response.json()
        const userDataArr = users.results.map(user => {
            return {
                img: user.picture.large,
                name: `${user.name.first} ${user.name.last}`,
                gender: user.gender,
                age: user.dob.age,
                address: `${user.location.city} ${user.location.country}`,
                registered: user.registered.date.substr(0, 10).split('-').reverse().join('.')
            }
        })

        // Adding users to localStorage
        localStorage.setItem('randomUsers', JSON.stringify(userDataArr))
        dispatch({ type: SET_USERS, payload: userDataArr })
    }
}

// Action for setting users from localStorage
export const setLocalStorageUsers = users => {
    return {
        type: SET_USERS,
        payload: users
    }
}

// Action for filtering users
export const filterUsersByParams = filterParams => {
    return {
        type: FILTER_USERS,
        payload: filterParams
    }
}
