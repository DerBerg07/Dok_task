let initialState = {
    page: null,
    currentCarData: []
};

export function page(state = initialState, action) {
    switch (action.type) {
        case 'PAGE_CHANGED':
            return {
                ...state,

                page:action.payLoad
            };
        case 'CAR_ADD_VALUE':
            state.currentCarData.push(action.payLoad.toLocaleLowerCase());
            return {
                ...state,
                currentCarData: state.currentCarData
            };

        default:
            return state;
    }
}
