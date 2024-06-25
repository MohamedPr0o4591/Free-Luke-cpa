import { ALLPAYMENTSWAY } from "../Types/AllTypes";

const initialValue = {
    paymentsWay: [],
}

export const AllPaymentsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ALLPAYMENTSWAY:
            return {
                paymentsWay: action.data,
            }
        default:
            return state
    }
}