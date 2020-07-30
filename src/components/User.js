import React from 'react';

export default ({ user }) => {
    return (
        <div className="card w-100 m-2" >
            <div className="card-header">
                {user.fullname}
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {user.email}</li>
                    <li className="list-group-item">Password: {user.password}</li>
                    <li className="list-group-item">Address: {user.address}</li>
                    <li className="list-group-item">City: {user.city}</li>
                    <li className="list-group-item">ZIP: {user.zip}</li>
                </ul>
                <button className='btn btn-danger'>Delete</button>

            </div>
        </div>
    )

};
