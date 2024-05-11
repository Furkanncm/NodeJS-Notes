const express = require("express");
const router = express.Router();
const pool = require("./db");// Veritabanı bağlantısı için db dosyası çağrılır


// Belirli bir bolum id'sine sahip bölümü
router.get("/:id", async (req, res) => {
    const dept_std_id = req.params.id;
    const query = `SELECT * FROM bolum WHERE dept_std_id= $1`;
    pool.query(query, [dept_std_id], (err, result) => {
        if (err) {
        res.status(500).send(err.message);
        } else {
            if (result.rows.length === 0){
                // departmanda bulunmamasi durumu
                res.status(500).send({message: "kaydi bulunamadi."})
              }else{
                res.status(200).send({ message: 'Bilgileri başarıyla cekildi', result: result.rows});
              }        
        }
    });

});

// Yeni bölüm
router.post('/add', (req, res) => {
    //bodyden alincaklar
    const { name, dept_std_id } = req.body;
    //queryde yazan seyin aynisi bodyde, nodejs icinde direkt parse ediliyor
    //yeni bolum ekleme komutu
    const query = `INSERT INTO bolum (name, dept_std_id) VALUES ($1, $2)`;
    pool.query(query, [name, dept_std_id], (err, result) => {
        if (err) {
        res.status(500).send(err.message);
        } else {//201 Created
        res.status(201).send({ message: 'Bölüm başarıyla eklendi' });
        }
    });
});

// bölümü güncelle
router.put("/update/:id", (req, res) => {
    //urlden gelen bilgiyi eski dept id olarak tanimladik
    const old_dept_std_id = req.params.id;

    //yeni bilgiler
    var { name, dept_std_id } = req.body;
    
    //yenid epartman id belirlenmemisse ayni departman id uzerinden degisiklik yapilacak
    if (dept_std_id === undefined) {
        dept_std_id = old_dept_std_id;
    }

    //update komutu
    const query = `UPDATE bolum SET name = $1, dept_std_id = $2 WHERE dept_std_id = $3`;

    pool.query(query, [name, dept_std_id,  old_dept_std_id], (err, result) => {
        if (err) { 
            // console.log(err.code) // foreign key hata numari ogrenildi err.code icin
            
            if (err.code === '23505' || err.code === '23503') { 
                //departmanda ogrenci varsa deptid de degisiklik yapilamaz
              res.status(500).send({ error: 'Bağlantılı bir kayıt bulunduğu için güncelleme yapılamadı.' });
            } else {
              res.status(500).send(err.message);
            }
          } else {
            res.status(200).send({ message: 'Bölüm başarıyla güncellendi' });
          }
    });
  });
  
// Belirli bir bölümü silme
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;// URL'den gelen bölüm id

    //silme sorgusu
    const query = `DELETE FROM bolum WHERE dept_std_id = $1`;
    pool.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ message: 'Bölüm başarıyla silindi' });
      }
    });
  });

  module.exports = router;