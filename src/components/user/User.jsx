// libraries
import React from 'react'

// styles
import './User.scss'

const User = ({ user }) => {
    return (
        <div className="user" >
            <img src={user.img} alt="user" />
            <div className="user_data">
                <div className="name">{user.name}</div>
                <div className="age"><span>Возраст:</span> {user.age}</div>
                <div className="gender"><span>Пол:</span> {user.gender}</div>
                <div className="address"><span>Адресс:</span> {user.address}</div>
                <div className="registered"><span>Дата регистрации:</span> {user.registered}</div>
            </div>
        </div >
    )
}

export default User;