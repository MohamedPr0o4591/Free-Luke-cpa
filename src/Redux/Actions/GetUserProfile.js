import axios from "axios"
import { USERPROFILE } from "../Types/AllTypes"


export const getUserProfile = _ => {
    return async dispatch => {

        let res = await axios.get(`https://luke-app2.onrender.com/user/profile`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        dispatch({
            type: USERPROFILE,
            data: res.data.userProfile,
            points: res.data.userProfile.points,
            img: res.data.userProfile.profilePic.secure_url,
            payments: res.data.userProfile['previous-requests'],
        })

    }
}