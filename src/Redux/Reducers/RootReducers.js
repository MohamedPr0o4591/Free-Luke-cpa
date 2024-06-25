import { combineReducers } from "redux";
import { topOffersReducer } from "./TopOffers";
import { OffersWall } from "./OffersWall";
import { AllPaymentsReducer } from "./AllPaymentsWay";
import { userProfile } from "./UserProfile";


export const rootReducers = combineReducers({
    OffersData: topOffersReducer,
    offersPlatforms: OffersWall,
    PAYMENTSWAY: AllPaymentsReducer,
    USER_PROFILE: userProfile,
})