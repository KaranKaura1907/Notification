const nodemailer= require("nodemailer");
module.exports= nodemailer.createTransport({
    service:"gmail",
    debug:true,
    auth:{
        user: 'kaurakaran782@gmail.com',
        pass: 'elpwzktcrztfribm'
    }
})