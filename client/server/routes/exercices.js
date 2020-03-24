const express = require('express');
const router = express.Router();
let Exercice = require('../models/exercice');

//@routes : localhost5000/exercices
router.route('/').get((req, res, next) => {
    Exercice.find()
        .then(exercices => res.json(exercices))
        .catch(err => res.status(400).json(err));
});

//@routes : localhost5000/exercices/add
router.route('/add').post((req, res, next) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date)

    console.log(username, 'username body');
    const newExercice = new Exercice({
        username,
        description,
        duration,
        date
    });

    newExercice
        .save()
        .then(() => res.json('exercices added'))
        .catch(err => res.status(400).json(err));
});


//@routes : localhost5000/exercices/:id


router.route("/:id").get((req, res) => {
    Exercice.findById(req.params.id)
        .then((exercice) => res.json(exercice))
        .catch((err) => res.status(400).json(err))
})


router.route("/:id").delete((req, res) => {
    Exercice.findByIdAndDelete(req.params.id)
        .then((exercice) => res.json("exercice deleted"))
        .catch(err => res.status(400).json(err))
})


router.route("/updated/:id").post((req, res) => {
    Exercice.findById(req.params.id).then((exercice) => {
        exercice.username = req.body.username;
        exercice.description = req.body.description;
        exercice.date = Date.parse(req.body.date);
        exercice.duration = Number(req.body.duration);
        exercice.save()
            .then(exercice => res.json("exercice updated "))
            .catch(err => res.status(400).json(err))

    })

})


module.exports = router;