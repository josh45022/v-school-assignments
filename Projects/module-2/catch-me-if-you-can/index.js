function sum(num1, num2) {

    try {         
        throw "That's not a number."
        
    }

     catch (err) {
         console.log(err)
     }

     return num1 + num2
}

var user = {username: "sam", password: "123abc"};

function login (newUsername, newPassword) {
    try {
        if(newUsername !== user.username || newPassword !== user.password) {
        throw "That didn't match what I've got over here unfortunately."
        } else {
            console.log('login successful!')
        }
    }
    
    catch (err) {
        console.log(err)
    }

    return 

}



sum('1','2')//is not supposed to work since the numbers are strings

login("bob", "bob")//is not supposed to work since the usernames and passwords don't match

login("sam", "123abc")//is supposed to work since the passwords match
