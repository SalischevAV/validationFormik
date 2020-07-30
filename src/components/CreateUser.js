import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {createUser} from '../redux/actions/userActions';


export default () => {
    const userData = {
        fullname: '',
        email: '',
        password: '',
        address: '',
        city: '' ,
        zip: ''
    }
    const [user, setUser] = useState(userData);

    const handlerInputChange = event => {
    const { name, value } = event.currentTarget
    setUser({ ...user, [name]: value })
  }

  const dispatch = useDispatch();

  const handlerSubmit = event =>{
      event.preventDefault();
      dispatch(createUser(user));
      setUser(userData);
      
  }

    return (
        <div className='row m-2'>
            <h5>Without validation</h5>
            <form onSubmit={handlerSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="text"
                            className="form-control"
                            name='email'
                            value={user.email}
                            onChange={handlerInputChange}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password"
                            className="form-control"
                            name='password'
                            value={user.password}
                            onChange={handlerInputChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="John Smitt"
                        name='fullname'
                        value={user.fullname}
                        onChange={handlerInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address</label>
                    <input type="text"
                        className="form-control"
                        name='address'
                        value={user.address}
                        onChange={handlerInputChange}
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text"
                            className="form-control"
                            name='city'
                            value={user.city}
                            onChange={handlerInputChange}
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" 
                        className="form-control"
                        name='zip'
                        value={user.zip}
                        onChange={handlerInputChange} 
                         />
                    </div>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        </div>
    )

};
