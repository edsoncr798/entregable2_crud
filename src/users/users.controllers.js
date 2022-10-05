const uuid = require('uuid');

const userDB = [
    {
        id: 'b1ffad08-b0e7-4b6a-8b9e-2f42efc168c0',
        first_name: 'ezequiel',
        last_name: 'andy jipa',
        email: 'edson@academlo.com',
        password: 'eze1234',
        birthday: '1998/05/08'
    },
    {
        id: '6af2278d-45f5-49bc-8607-8ff2616d3e0b',
        first_name: 'edson',
        last_name: 'frashk',
        email: 'edson@academlo.com',
        password: 'ed1234',
        birthday: '2000/05/08'
    }
];

const getAllUsers=()=>{
    return userDB
}

const getUserById=(id)=>{
    const userData= userDB.find(user => user.id === id)
    return userData
}

const createUser =(data)=>{
    const newUser={
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }

  userDB.push(newUser)
  return newUser

}

// console.log(createUser('{9de4e867-4b44-4ab0-a052-0421cb1eed6d,edson,
//  andi,edson@gmail.com,edson1234,1990/05/08}')) 

module.exports ={
    getAllUsers,
    getUserById,
    createUser
}

