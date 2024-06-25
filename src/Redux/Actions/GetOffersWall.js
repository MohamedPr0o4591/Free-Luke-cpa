import axios from "axios"
import { ALLOFFERSWALL } from "../Types/AllTypes"

export const GetOffersWall = _ => {

    return async dispatch => {
        let res = await axios.get(`https://luke-app2.onrender.com/offers/wall`)

        dispatch({
            type: ALLOFFERSWALL,
            data: res.data.result,
        })
    }

}