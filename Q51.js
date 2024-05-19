// Validate Email Address: Write a function that takes an email address as input and returns true if it's a valid email address format, false otherwise.

function EmailValidator(email) {
    let valid;

    let splittedEmail = email.split('@')

    if(splittedEmail[1].includes('.')){
        valid = true
    } else{
        valid = false
    }

    console.log(valid)
}

EmailValidator("tushar@gmail.com");
