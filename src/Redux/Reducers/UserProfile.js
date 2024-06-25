import { USERPROFILE } from "../Types/AllTypes"

const initialValue = {
    userProfile: [],
    userPoints: 0,
    imgProfile: '',
    prevent_payments: [],
}

export const userProfile = (state = initialValue, action) => {
    switch (action.type) {
        case USERPROFILE:
            return {
                userProfile: action.data,
                userPoints: action.points,
                imgProfile: action.img,
                prevent_payments: action.payments,
            }
        default:
            return state
    }
}