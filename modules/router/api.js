const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("./../db/db.module").models.User;
const MedicineCard = require("./../db/db.module").models.MedicineCard;
const fs = require("fs");
const path = require("path");

module.exports = (function (dir) {
    const SECRET_KEY = fs.readFileSync(path.resolve(dir, "SECRET_KEY"), "utf-8");

    router.post("/user/verify", (req, res) => {
        const token = req.body._token;
        const id = req.body._id;
        if (!token || !id)
            res.status(201)
                .json({message: "В запиті на сервер повинен бути токен та ID", status: false});
        
        jwt.verify(token, SECRET_KEY, (result) => {
            User.findOne({_id: id}).exec((err, user) => {
                if (!user || err) {
                    return res.status(201).json({status: false});
                }
                res.status(200).json({status: true, user});
            });
        });
    });
    router.post("/user/register", (req, res) => {
        if (req.body.password !== req.body.retry_password) {
            return res.status(201).json({
                message: "Паролі мають співпадати! Спробуйте ще разок.",
                status: false
            });
        }

        const newUser = {
            email: req.body.email,
            name: {
                first: req.body.first_name,
                last: req.body.last_name
            },
            password: req.body.password,
            interests: ['']
        };

        User.findOne({
            email: newUser.email
        }).exec((err, existsUser) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ status: false, message: "Помилка у роботі БД" });
            }
            if (!existsUser) {
                const user = new User(newUser);

                return user.save((err, u) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ status: false, message: "Помилка у роботі БД" })
                    }; 
                    const token = jwt.sign({
                        email: newUser.email,
                        name: newUser.name
                    }, SECRET_KEY);

                    const newMedicineCard = new MedicineCard({
                        user_id: u.id 
                    });
                    
                    newMedicineCard.save(() => {
                        res.status(200).json({
                            _token: token, 
                            _id: u.id,
                            ...u
                        });
                    });
                });
            }
            return res.status(201).json({status: false, message: "Такий поштовий ящик вже зарєстрований!"});
        });
    });

    router.post("/user/medicine", (req, res) => {
        const _id = req.body.id;
        const _token = req.body.token;
        MedicineCard.findOne({
            user_id: _id
        }).exec((err, card) => {
            if (err || card == null) {
                return res.status(500).json({status: false});
            }
            return res.status(200).json(card);
        });
    });
    return router;
});