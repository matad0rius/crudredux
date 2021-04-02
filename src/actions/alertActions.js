import {
    SHOW_ALERT,
    HIDE_ALERT,
} from '../types';

// show alert
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(showAlertError())
    }
}

const showAlertError = alert => ({
    type: SHOW_ALERT,
    payload: alert
})

// hide alert
export function hideAlertAction() {
    return (dispatch) => {
        dispatch(hideAlert())
    }
}

const hideAlert = () => ({
    type: HIDE_ALERT,
})