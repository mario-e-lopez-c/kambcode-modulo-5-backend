const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            res.status(401)
            res.send('no estas autorizado')
        }
        const validToken = "eyJhbGciOiJIUzI1Ok6yJV_adQssw5c"
        const bearerToken = req.headers.authorization.split(' ')[1]
        if(validToken === bearerToken) next()
        else {
            res.status(403)
            res.send('no estas autorizado')
        }
    } catch (error) {
       res.status(500)
       console.log(error)
       res.send('oops hubo un error') 
    }
};

module.exports = authMiddleware;