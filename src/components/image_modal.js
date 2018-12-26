import React from 'react'

export default props =>{
    console.log(props)
    return (
        <div id="myModal" className="modal show">
                {/* <!-- The Close Button --> */}
                <span onClick = {props.click} className="close">&times;</span>

                {/* <!-- Modal Content (The Image) --> */}
                <img className="modal-content" src = {props.src}/>

                {/* <!-- Modal Caption (Image Text) --> */}
                <div id="caption"></div>
            </div>
    )
}