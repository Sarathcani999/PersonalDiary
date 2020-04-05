import React from 'react'
import { connect } from 'react-redux'

function User(props) {
    return (
        <div>
            <h2 className="display-2">{props.user.name}</h2> 
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.auth.user
    }
}

export default connect(mapStateToProps)(User)
