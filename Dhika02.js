function validUserName(username) {
    if (username.length == 8) {
        return console.log(true);
    }

    return console.log(false);
}

function validPassword(password) {
    if (password.length >= 8) {
        for (var i = 0; i < password.length; i++) {
            var ch = password.charAt(i);
            if ((ch < "A" || ch > "Z") && (ch < "a" || ch > "z") && (ch < "0" || ch > "9")) {
                return console.log(true);
            }
        }
        return console.log(false);
    }

    return console.log(false);
}

validUserName("andhikadi"); // return true
validUserName("adhdi"); // return false
validPassword("passworD+"); // return true
validPassword("passwo"); // return false