
const sigInValidator ={
    username:"string required",
    password:'string required',
}

const signUpValidator ={
    fullName:'string required',
    ...sigInValidator,
    confirmPassword:'string required',
    phone:"string required",
    avatarURL:'string'
}

module.exports ={
    sigInValidator,
    signUpValidator
}