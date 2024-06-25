import axios from "axios"
import { ALLPAYMENTSWAY } from "../Types/AllTypes"


export const getAllPaymentsWay = _ => {
    return async dispatch => {
        let res = await axios.get(`https://luke-app2.onrender.com/payment`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        })
        dispatch({
            type: ALLPAYMENTSWAY,
            data: res.data.paymentWays,
        })
    }
}