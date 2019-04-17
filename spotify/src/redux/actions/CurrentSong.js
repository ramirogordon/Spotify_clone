const CurrentSong = payload => {
    return {
        type: 'CHANGE_SONG',
        payload
    }
}

export default CurrentSong;