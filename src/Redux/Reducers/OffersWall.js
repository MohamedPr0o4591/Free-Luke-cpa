import { ALLOFFERSWALL } from "../Types/AllTypes"

const initialValue = {
    offersWall: [],
}

export const OffersWall = (state = initialValue, action) => {
    switch (action.type) {
        case ALLOFFERSWALL:
            return {
                offersWall: action.data,
            }
        default:
            return state
    }
}