import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')


    const AddUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if (+enteredAge < 1) {
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
        }

    return (
    <div>
        <ErrorModal title="An error occurred!" message="Something went wrong" />
        <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
        <label htmlFor='username'> Username</label>
        <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor='age'> Age(Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
        </div>
    )
}

export default AddUser