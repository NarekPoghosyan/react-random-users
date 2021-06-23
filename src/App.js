// libraries
import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

// actions
import { fetchUsers, filterUsersByParams, setLocalStorageUsers } from "./redux/actions";

// components
import { Search, Filters, User } from './components/components'

const App = ({ fetchUsers, filterUsersByParams, filteredUsers, setLocalStorageUsers }) => {
  const [params, setParams] = useState({
    gender: null,
    ageRange: [null, null],
    searchText: '',
    indexForAge: null,
    indexForGender: 0
  })

  // Set parameters for filtering by gender
  const selectGender = useCallback((e, i) => {
    setParams({ ...params, [e.target.name]: e.target.value, indexForGender: i })
  }, [params])

  // Set parameters for filtering by age
  const selectAge = useCallback((i, firstAge, lastAge) => {
    if (params.ageRange[0] === firstAge && params.ageRange[1] === lastAge) {
      setParams({ ...params, ageRange: [null, null], indexForAge: null })
      return
    }
    setParams({ ...params, ageRange: [firstAge, lastAge], indexForAge: i })
  }, [params])

  // Set parameters for filtering by search input text
  const searchUser = useCallback(inputValue => {
    setParams({ ...params, searchText: inputValue.toLowerCase() })
  }, [params])

  // Checking localStorage users
  useEffect(() => {
    const getUsersFromLocalStorage = JSON.parse(localStorage.getItem('randomUsers')) || []
    if (!getUsersFromLocalStorage.length) {
      fetchUsers()
      return
    }
    setLocalStorageUsers(getUsersFromLocalStorage)
  }, [])

  // Filtering user by parameters
  useEffect(() => {
    filterUsersByParams(params)
  }, [params])

  return (
    <div className="App">
      <Search searchUser={searchUser} />
      <Filters selectGender={selectGender} iGender={params.indexForGender} iAge={params.indexForAge} selectAge={selectAge} />
      <div className="conteiner_user">
        <div className="content_user">
          {!filteredUsers.length ? <h1 style={{ marginLeft: '20px' }}>Нет пользователей с такими параметрами фильтрации</h1> : filteredUsers.map((user, index) => {
            return <User user={user} key={`${user}_${index}`} />
          })}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchUsers,
  setLocalStorageUsers,
  filterUsersByParams
}

const mapStateToProps = ({ getUser }) => {
  return {
    filteredUsers: getUser.filteredUsers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
