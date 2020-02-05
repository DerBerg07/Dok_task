let initialState = {
    page: null,
    currentCarData: []
};

export function page(state = initialState, action) {
    switch (action.type) {
        case 'PAGE_CHANGED':
            console.log(state.currentCarData);
            return {
                ...state,
                page:action.payLoad,
                currentCarData: state.currentCarData.slice(0,action.payLoad)
            };
        case 'CAR_ADD_VALUE':

            return {
                ...state,
                currentCarData: action.payLoad
            };

        default:
            return state;
    }
}
