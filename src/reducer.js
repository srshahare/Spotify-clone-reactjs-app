export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    // token: "BQB_qThTzQp7LJncaX9XlvDodnSMiPHTzDJgDjGtc5TNh5gQnS9jWLzJHWlshEQdzE0TuUEVgqcBV4SJuVCcjQdLREbd-AHdTuAO2d7m79LHM3sdkF_isSR6xmK2SxmyjC4jgRUidaOOnvlbX0uDY8mecaaQN9MPB8WALV19NPCSlEue"
};

const reducer = (state, action) => {    
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        default: 
            return state;
    }
}

export default reducer;