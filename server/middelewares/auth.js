const jwt = require('jsonwebtoken');
//Verificar token
let verfToken = (req, resp, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            return resp.status(401).json({
                ok: false,
                err
            });
        };
        req.usuario = decoded.usuario;
        next();
    });
};
//Verificar el AdminRole
let verfAdminRole = (req, res, next) =>{
    let usuario = req.usuario;
    if( usuario.role === 'ADMIN_ROLE' ){
        next();
    }else{
        res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    };
};
module.exports = { verfToken, verfAdminRole }; 