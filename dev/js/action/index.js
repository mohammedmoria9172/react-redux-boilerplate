export const selectUser = (user) => {
    console.log(user.first)
    return {
        type: 'USER_SELECT',
        payload: user
    }
}