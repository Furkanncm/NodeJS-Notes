const express = require("express");
const router = express.Router();
const pool = require("./db");// Veritabanı bağlantısı için db dosyası çağrılır


//tum ogrenci bilgieri cekiliyor
router.get("/",   (req, res) => {
  // Tüm öğrenci kayıtlarını getiren sorgu
  const query = "SELECT * FROM ogrenci";
  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      if (result.rows.length === 0){
        res.status(500).send({message: "Ogrenci kaydi bulunamadi."})
      }else{
        res.status(200).send({ message: 'Öğrenci bilgileri başarıyla cekildi', result: result.rows});
      }
    }
  }); 
});


// Belirli bir öğrenciyi getir
router.get("/:id",  (req, res) => {
    const { id } = req.params;//urlden gelen parametre
    const query = "SELECT * FROM ogrenci WHERE id = $1"
    pool.query(query, [id], (err, result) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          if (result.rows.length === 0){
            //ogrenci yoksa
            res.status(500).send({message: "Ogrenci kaydi bulunamadi."})
          }else{
            res.status(200).send({ message: 'Öğrenci bilgileri başarıyla cekildi', result: result.rows});
          }
        }
      });   
   
    });

//ogrenci ekleme
router.post("/add", (req, res) => {
    const { name, email, deptid } = req.body;
    //queryde yazan seyin aynisi bodyde, nodejs icinde direkt parse ediliyor
    const query = `INSERT INTO ogrenci (name, email, deptid) VALUES ($1, $2, $3)`;
  
    pool.query(query, [name, email, deptid], (err, result) => {
      if (err) {
        if (err.code === '23505' || err.code === '23503') { 
          res.status(500).send({ error: 'Bağlantılı bir kayıt bulunduğu için güncelleme yapılamadı.' });
        } else {
          res.status(500).send(err.message);
        }
      } else {
        res.status(201).send({ message: 'Öğrenci başarıyla eklendi' });
      }
    });
  });

// Öğrenci güncelleme 
router.put("/update/:id",   (req, res) => {
  const id = req.params.id;//urlden gelen parametre
  const { name, email, deptid } = req.body;
  const query = `UPDATE ogrenci SET name = $1, email = $2, deptid = $3 WHERE id = $4`;
  pool.query(query, [name, email, deptid, id], (err, result) => {
    if (err) {
      if (err.code === '23505' || err.code === '23503') { 
        res.status(500).send({ error: 'Bağlantılı bir kayıt bulunduğu için güncelleme yapılamadı.' });
      } else {
        res.status(500).send(err.message);
      }
    } else {
      res.status(200).send({ message: 'Öğrenci başarıyla güncellendi' });
    }
  });
});

// Öğrenci silme
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;//urlden gelen parametre
    const query = `DELETE FROM ogrenci WHERE id = $1`;
    pool.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ message: 'Öğrenci başarıyla silindi' });
      }
    });
  });
  
module.exports = router;