import mysql from'mysql'
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'quote-station'
})
db.connect((err)=>{
    if(err) throw err
    console.log('connected to database')
})
export default db