let initialState = {
   status: false
};

export function table(state = initialState, action) {
    switch (action.type) {
        case 'TABLE_STATUS_CHANGED':
            return {
                ...state,
               status: !state.status
            };
        default:
            return state;
    }
}
