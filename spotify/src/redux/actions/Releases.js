const Releases = payload => {
    return {
        type: 'LOAD_RELEASES',
        payload
    }
}

export default Releases;