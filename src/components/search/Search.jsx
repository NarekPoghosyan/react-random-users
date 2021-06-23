// libraries
import React from 'react'

// styles
import './Search.scss'

const Search = ({ searchUser }) => {
    return (
        <div className="search_user">
            <input type="text" placeholder="Начните вводить ..." onChange={e => searchUser(e.target.value)} />
        </div>
    )
}

export default Search
