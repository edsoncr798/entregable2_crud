const {getAllUsers, getUserById, createUser} = require('./users.controllers')

const  getUser = (req, res) =>{
    const data = getAllUsers()
    // res.writeHead( {'content-Type': 'application/json'})
    res.status(200).json(data)
}


const getOneUser = (req, res)=>{
    const id = req.params.id
    const data = getUserById(id)

    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'invalid ID'})
    }
}

const createNewUser= (req, res)=>{
    const data = req.body

    if(data){
        const userData = createUser(data)
        res.status(200).json(userData)
    }else{
        res.status(400).json({message: 'missing data'})
    }
}


module.exports={
    getUser,
    getOneUser,
    createNewUser
}