const app = require('express');
// const router = express.Router();
const Username = require('../models/user');

// Route to create a new user with a username
router.post('/users', async (req, res) => {
  try {
    const newUser = await Username.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;