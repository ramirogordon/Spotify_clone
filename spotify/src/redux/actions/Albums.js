const Albums = payload => {
    return {
        type: 'LOAD_ALBUMS',
        payload
    }
}

export default Albums;