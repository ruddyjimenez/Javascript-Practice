var username = 'john'
var password = 'password1'

if (!username || !password){
    console.log("Please provide username and password")
} else {
    if(username === 'john' && password === 'password1') {
        console.log('Access granted!')
    } else {
        console.log ('Please enter the correct username and password')
    }
}
