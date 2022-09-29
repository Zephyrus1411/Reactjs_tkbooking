import cookie from "react-cookies"

const initState = cookie.load('current_user')
const myReducer = (user = initState, action) => {
    switch (action.type) {
        case "login": 
            return action.payload
        case "logout":
            return null

    }

    return user
}

export default myReducer;