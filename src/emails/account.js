const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'ledesmajorge07@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app, ${name}. Let me know how it is!`
    })

}
const sendDeleteEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'ledesmajorge07@gmail.com',
        subject: 'Goodbye!',
        text: `I'm sorry to see you go ${name}! Hope you enjoyed using the app`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}