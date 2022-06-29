
const sigInValidator ={
    username:"string required",
    password:'string required',
}

const signUpValidator ={
    fullName:'string required',
    ...sigInValidator,
    confimrPassword:'string required',
    phone:"number required",
    avatarURL:'string'
}

module.exports ={
    sigInValidator,
    signUpValidator
}