let initialState = {
    content: [],
    fetching: false,
    fetched: false,
    error: null
};

export function content(state = initialState, action) {
    switch (action.type) {
        case 'DATA_SUCCES':
            return {
                ...state,
                fetching:false,
                fetched: true,
                content:action.payLoad
            };

        case 'DATA_ERROR':
            return {
                ...state,
                fetching:false,
                fetched: true,
                error:action.payLoad,
                content:[]
            };

        case 'DATA_LOADING':
            return {
                ...state,
                fetching:true
            };

        default:
            return state;
    }
}
