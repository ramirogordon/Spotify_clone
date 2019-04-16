import React from 'react'

 const Track = (props) => {
    return (
        <>
            <li key={props.i}>
                <p>{props.song}</p>
            </li>
        </>
    )
}


export default Track;
