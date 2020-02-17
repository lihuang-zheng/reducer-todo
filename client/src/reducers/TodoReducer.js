const initialState = [
    {
        item: 'Learning Reducer',
        completed: false,
        id: 123123123
    },
    {
        item: 'Learning Complex Reducer',
        completed: false,
        id: 234234234
    }
]

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            if (action.payload.trim() === "") {
                return state;
            }
            return [...state, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]

        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload)

        case "DELETE_ALL_COMPLETED":
            return state.filter(item => !item.completed)

        case "TOGGLE-COMPLETION_STATE":
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed }
                } else {
                    { return item }
                }
            })

        default:
            return state
    }
}

export { initialState, todoReducer }