import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/actions/userActions';
import userCreateSchemaValidation from './userCreateSchemaValidation';

const userData = {
    fullname: '',
    email: '',
    password: '',
    address: '',
    city: '',
    zip: ''
}

export default () => {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: userData,
        onSubmit: (values) =>{
            dispatch(createUser(values));
            formik.resetForm(userData);
         },
         validationSchema: userCreateSchemaValidation,
    });

    useEffect(() => {
        console.log({ formik });
    }, [])

    return (
        <div className='row m-2'>
            <h5>With Formik</h5>
            <form onSubmit={formik.handleSubmit} noValidate>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="text"
                            className="form-control"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                          {formik.errors.email &&
                            formik.touched.email && 
                                <div className="alert alert-danger">{formik.errors.email}</div>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password"
                            className="form-control"
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password &&
                            formik.touched.password && 
                                <div className="alert alert-danger">{formik.errors.password}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Name</label>
                    <input type="text"
                        className="form-control"
                        placeholder="John Smitt"
                        name='fullname'
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.fullname &&
                            formik.touched.fullname && 
                                <div className="alert alert-danger">{formik.errors.fullname}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address</label>
                    <input type="text"
                        className="form-control"
                        name='address'
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.address &&
                            formik.touched.address && 
                                <div className="alert alert-danger">{formik.errors.address}</div>}
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text"
                            className="form-control"
                            name='city'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.city &&
                            formik.touched.city && 
                                <div className="alert alert-danger">{formik.errors.city}</div>}
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text"
                            className="form-control"
                            name='zip'
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.zip &&
                            formik.touched.zip && 
                                <div className="alert alert-danger">{formik.errors.zip}</div>}
                    </div>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        </div>
    )

};
