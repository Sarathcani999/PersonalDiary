import React from 'react'

import CreateNote from './CreateNote/CreateNotes'
import Notes from './Notes/Notes'

function Post() {
    return (
        <div>
            <CreateNote />
            <hr/>
            <Notes />
        </div>
    )
}

export default Post
