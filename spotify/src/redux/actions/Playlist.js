const Playlist = payload => {
    return {
        type: 'LOAD_PLAYLIST',
        payload
    }
}

export default Playlist;