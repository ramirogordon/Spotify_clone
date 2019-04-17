const defaultState = {
    data: {
        userName: 'User Name',
        userImageUrl: ''
      },
    contentDetails: {
        playlist: [],
        discover: [],
        songs: [],
        albums: [],
        artists: [],
        releases: []
    }
};

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case 'LOAD_USER_DATA': {
            return {...state, data: {
                ...state.data, 
                userName: payload.display_name,
                userImageUrl: payload.images[0] ? payload.images[0].url : null
            }}
        }
        case 'LOAD_PLAYLIST': {
            return {...state,  contentDetails: {
                ...state.contentDetails, playlist: payload
            }}
        }
        case 'LOAD_DISCOVER': {
            return {...state,  contentDetails: {
                ...state.contentDetails, discover: payload
            }}
        }
        case 'LOAD_SONGS': {
            return {...state,  contentDetails: {
                ...state.contentDetails, songs: payload
            }}
        }
        case 'LOAD_ALBUMS': {
            return {...state,  contentDetails: {
                ...state.contentDetails, albums: payload
            }}
        }
        case 'LOAD_ARTISTS': {
            return {...state,  contentDetails: {
                ...state.contentDetails, artists: payload
            }}
        }
        case 'LOAD_RELEASES': {
            return {...state,  contentDetails: {
                ...state.contentDetails, releases: payload
            }}
        }
        default: {
            return state;
        }
    }
}

export default reducer;