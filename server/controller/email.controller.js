// const emailHelper = require("../helpers/emails");
const {emailService}= require("../service");


exports.sendMail = async(req,res)=>{

    try {
        
        // emailHelper.sendSignUpMail(req);
        const response= await emailService.sendOfferLetterpMail(req);
        
        res.status(200).json({response,success:true, msg: 'Mail Sent Successfully!'});

    } catch (error) {
        console.log(error);
        res.status(400).json({success:false, msg: error.message});
    }

}

