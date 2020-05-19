const initialState = {
    count: 0,
    static: 'Boiler plate for basic Redux',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 10,
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 10,
            };
        case 'input':
            return {
                ...state,
                count: state.count + action.inputValue,
            };
        default:
            return state;
    }
};

export default reducer;
