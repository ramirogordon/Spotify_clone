const Songs = payload => {
    return {
        type: 'LOAD_SONGS',
        payload
    }
}

export default Songs;