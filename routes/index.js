const express = require("express");
const router = express.Router();


router.get("/", function (req, res){
    res.render("index", {
        title: "inicio",
        message: "Bienvenidos a nuestra pagina"
    });
});

module.exports = router