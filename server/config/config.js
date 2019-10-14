//Puerto
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
 
//Base de datos

//Vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24;

//SEED
process.env.SEED = process.env.SEED || 'seed-secret';

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.a;
};
process.env.URLDB = urlDB;