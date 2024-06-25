import { TOPOFFERS } from "../Types/AllTypes"

const initialValue = {
    offers: [],
}

export const topOffersReducer = (state = initialValue, action) => {
    switch (action.type) {
        case TOPOFFERS:
            return {
                offers: action.data,
            }
        default:
            return state
    }
}