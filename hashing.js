import bcrypt from "bcrypt";

let password = "123password";
let hashPassword = await bcrypt.hash(password, 10);
console.log(hashPassword);

let pass = "123password";
let comparePassword = await bcrypt.compare(pass, hashPassword);
console.log(comparePassword);

// let password1 = "123password";
// let hashPassword1 = await bcrypt.hash(password1, 10);
// console.log(hashPassword1);

// let pas = "123password";
// let comparePassword1 = await bcrypt.compare(pas, hashPassword1);
// console.log(comparePassword1);
