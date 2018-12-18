import React from 'react'

export default props =>{
    const {firstName, lastName, phone, email} = props.contact
    return (
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">{lastName}
                    <button key = {props.index} onClick = {props.delete} className = 'btn btn-danger float-right'>Delete</button>
                </div>
                <div className="card-block">
                    <h4 className="card-title">{firstName} {lastName}
                        <div className="card-text">
                            <p><b>Phone:</b> {phone}</p>
                            <p><b>Email:</b> {email}</p>
                        </div>
                    </h4>
                </div>
            </div>
        </div>
    )
}