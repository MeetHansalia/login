


export default function handler(req, res){
    if(req.method === 'POST'){
        const {userName, password, userData} = req.body;
        if(userName === userData.username && password === userData.password){
            console.log("first")
            res.status(200).json({message:'Login successful'});
        }else{
            res.status(401).json({message:'Invalid credentials'})
        }
    }else{
        res.status(405).json({message: 'Method Not Allowed'})
    }
}