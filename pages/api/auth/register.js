




export default function handler(req,res){
    if(req.method === 'POST'){
        const {username, password, email, confirmPassword } = req.body;
        console.log(req.body)
        
       if(password !== confirmPassword){
           res.status(400).json({message: 'Password do not match'})
       }else{
           const user = {username, password, email};
           console.log('new user Register:', user);
         
           res.status(201).json({data: user, message: "Registration Successful"});
           
       } 
    }else{
        res.status(405).json({message:'Method Not Allowed'})
    }
}