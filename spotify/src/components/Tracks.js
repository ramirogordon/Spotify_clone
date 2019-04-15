import React from 'react'

 const Tracks = (props) => {
    return (
        <>
            <li key={props.i}>
                <p>{props.song}</p>
            </li>
        </>
    )
}


export default Tracks;
