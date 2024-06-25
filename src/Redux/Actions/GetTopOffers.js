import axios from "axios"
import { TOPOFFERS } from "../Types/AllTypes";


export const getTopOffers = _ => {

    return async dispatch => {
        let res = await axios.get(`https://luke-app2.onrender.com/offers/top`);
        dispatch({
            type: TOPOFFERS,
            data: res.data.result,
        })
    }

}