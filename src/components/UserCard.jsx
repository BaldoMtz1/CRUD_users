import React from 'react'

const UserCard = ({user,deleteUser,setStateUpdateUser, handleChangeModal}) => {
    
  return (
    <article className='user'>
        <h2 className='user-title'>{`${user.first_name} ${user.last_name}`}</h2> <hr />
        <ul className='user-list'>
            <li className='user-item'><span>EMAIL</span>{user.email}</li>
            <li className='user-item'><span><i className='bx bx-gift'></i>Birthday</span>{user.birthday}</li>
            
        </ul>    

        <div className='user-container_btn'>
            <button className='user-btn' onClick={() => deleteUser(user.id)}>
            <i className='bx bx-trash'></i>
            </button>


            <button className='user-btn' onClick={() => setStateUpdateUser(user)} >
              <i onClick={handleChangeModal} className='bx bx-pencil'></i>
            </button>
        </div>

        
        
    </article>
  )
}

export default UserCard