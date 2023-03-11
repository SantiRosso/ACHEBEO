const { Router } = require('express');
const { getProfile, postProfile, updateProfile } = require('./controllers');
const router = Router()

router.get('/', async (req, res) => {
    try {
        res.send(await getProfile())
    } catch (error) {
        res.status(500).send(error.message);
    }
})
router.post('/', async (req, res) => {
    const { name } = req.body
    try {
        res.send(await postProfile(name))
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.put('/:id', async (req, res) => {
    const { name, img } = req.body;
    const { id } = req.params;
    try {
        res.send(await updateProfile(name, img, id))
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router