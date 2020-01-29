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
            return {
                ...state,
                currentCarData: "das"
            };

        default:
            return state;
    }
}
