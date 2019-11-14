import React from 'react'

const UserCard = props => {
    const {
        user,
        index,
        selectedUserIndex,
        setSelectedUserIndex
    } = props

    const handleClick = () => {
        setSelectedUserIndex(index)
    }
    return (
        <div
            className='user-card-container'
            onClick={handleClick}
            style={{
                backgroundColor: selectedUserIndex === index && 'green'
            }}
        >
            <strong>Name:{user.name}</strong>
            <p>Age:{user.age}</p>
            <p>Rank:{user.rank}</p>
        </div>
    )
}

export default UserCard