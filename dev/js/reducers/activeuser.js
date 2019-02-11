export default function activeUser(state = {}, action) {
    switch (action.type) {
        case 'USER_SELECT':
            return action.payload;
            break;
    }
    return state;
}