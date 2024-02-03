import React from 'react'
import Form from './Form'

const Recommendations = ({ games }) => {
    return (
        <>
            <div>
                <Form games={games} />
            </div>
        </>
    )
}

export default Recommendations
