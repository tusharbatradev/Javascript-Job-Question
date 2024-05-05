// Validate Email Address: Write a function that takes an email address as input and returns true if it's a valid email address format, false otherwise.

function EmailValidator(email){
    let valid = false;

    let splittedMail = email.split('@')

    if(email.includes('@') && splittedMail[1].includes('.')){
        valid = true
    }
    console.log(valid)
}

EmailValidator('tushar@gmail.com')