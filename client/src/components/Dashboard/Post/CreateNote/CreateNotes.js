import React , {useState} from 'react'
import { Card, CardBody , CardFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { createNote } from '../../../../redux'

function CreateNotes(props) {
    let { createNote } = props
    let [body , setBody] = useState('')

    return (
        <div style={{width : "100%"}}>
            <Card style={{ width : "100%"}}>
                <CardBody style={{padding : 0}}>
                    <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Write your Day..." style={{padding : "10px" , border : "none" , width : "100%" , height : "100%", minHeight : "150px" , textAlign : "start"}}></textarea>
                    <hr style={{marginBottom : "0px" , marginTop : "0px" , width : "97%"}}/>
                </CardBody>
                <CardFooter style={{padding : "5px 12px" , backgroundColor : "white" , border : "none" }}>
                    <Button onClick={() => {
                        console.log(body)
                            createNote(body)
                            setBody('')
                        }}>Post</Button> 
                </CardFooter>
            </Card>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {

//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        createNote : (body) => dispatch(createNote(body))
    }
}


export default connect(null , mapDispatchToProps)(CreateNotes)
