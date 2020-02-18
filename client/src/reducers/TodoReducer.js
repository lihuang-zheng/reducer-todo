const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Prototest',
        completed: true,
        id: 684684
    },
];

const taskReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TASK":
            if (action.payload.trim() === "") {
                return state;
            }
            return [...state, { item: action.payload, completed: false, id: Date.now() }];

        case "DELETE_TASK":
            return state.filter(item => item.id !== action.payload);

        case "DELETE_ALL_COMPLETED":
            return state.filter(item => !item.completed);

        case "TOGGLE_COMPLETION_STATUS":
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed }
                }
                else {
                    return item
                }
            })

        default:
            return state;
    }
}

export { initialState, taskReducer };