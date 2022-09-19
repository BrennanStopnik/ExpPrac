var express = require('express');
var router = express.Router();


const dogList = [{
    breed: "Pit Bull",
    size: "M",
    temperment: "calm",
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z"
},
{
    breed: "German Shepard",
    size: "L",
    temperment: "",
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z"
},
{
    breed: "Irish Wolf Hound",
    size: "XL",
    temperment: "",
    activities: [],
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z"
},
{
    breed: "Chihuahua",
    size: "",
    temperment: "",
    activities: [],
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z"
},
{
    breed: "",
    size: "",
    temperment: "",
    activities: [],
    createdAt: "2022-03-22T10:36:37.176Z",
    lastModified: "2022-03-22T10:36:37.176Z"
},
];

/* GET dogs listing. */
router.get('/', (req, res) =>  {
  res.send('respond with a resource');
});

router.put('/update-one/:dogbreed', (req, res) => {
    const breed = req.params.dogbreed

    const size = req.body.size
    const temperment = req.body.size
    const activities = req.body.activities
    const ogBreedIndex = dogList.findIndex((dog) => {
        return dog.breed === breed
    })

    const ogBreed = dogList[ogBreedIndex]

    const dogsData = {
        breed: ogBreed.breed,
        size,
        temperment,
        activities,
        createdAt: ogBreed.createdAt,
        lastModified: new Date()
    }

    const dogDataCheck = validateDogData(dogsData)

    if (dogDataCheck.isValid === false) {
        res.json({
            success: false,
            message: dogDataCheck.message
        })
        return;
    }

    dogList[ogBreedIndex] = dogList

    res.json({
        success: true
    })
})

module.exports = router;