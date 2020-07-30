import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import User from './User';

export default () => {
    const users = useSelector(state => state.user.users)
    return (
        <Fragment>
            {users.map(user => <User user={user} key={user.zip} />)}
        </Fragment>
    )
};

/*
const users = [
    {email: "qwe@qwe.com",
    password: 'qwe',
    fullname: '1Qwe Asd1',
    address: 'qweasd',
    city: 'ASDCity',
    state: 'Oklakhoma',
    zip: 123
    },
    {email: "qwe@qwe.com",
    password: 'qwe',
    fullname: '2Qwe Asd2',
    address: 'qweasd',
    city: 'ASDCity',
    state: 'Oklakhoma',
    zip: 1234
    },
    {email: "qwe@qwe.com",
    password: 'qwe',
    fullname: '3Qwe Asd3',
    address: 'qweasd',
    city: 'ASDCity',
    state: 'Oklakhoma',
    zip: 12345
    },
]
*/
