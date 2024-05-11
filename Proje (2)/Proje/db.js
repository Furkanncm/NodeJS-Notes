const { Pool } = require('pg');//PostgreSQL modülünün Pool sinifi veritabanı bağlantılarını etkin bir şekilde yönetmek
require('dotenv').config();

const pool = new Pool({//yeni bir Pool nesnesi oluşturuyoruz
    user: process.env.DB_USER,//veritabanına bağlan
    host: 'localhost',//sunucusunun konumunu
    database: 'mydb',//veritabanının adını
    password: process.env.DB_PASSWORD,//veritabani sifersi
    port: 5432//veritabanına bağlanmak için kullanılan port numarasını
})

module.exports = pool;