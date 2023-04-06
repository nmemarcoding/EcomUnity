const router = require("express").Router();
const User = require("../models/user.js");
const CryptoJS = require("crypto-js");
const auth = require("../middlewear/auth.js");
const jwt = require("jsonwebtoken");




//REGISTER
router.post("/register", async(req, res) => {
    const { username, email, password, role, firstName, lastName, dateOfBirth, phoneNumber, address, profilePicture } = req.body;

    try {
        // Check if a user with the same username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or email already in use' });
        }

        // Create a new user
        const encryptedPassword = CryptoJS.AES.encrypt(password, "secret").toString();
        const newUser = new User({
            username,
            email,
            password: encryptedPassword,
            role,
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
            address,
            profilePicture
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


//LOGIN

router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) {
            return res.status(401).json("Wrong username or password");
        }


        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "secret"
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        if (originalPassword != inputPassword) {

            return res.status(401).json("Wrong username or password");

        }

        const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            },
            "secret", { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.cookie("token", accessToken, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 1000 * 60 * 60 * 24 * 3,
        }).status(200).json({...others, accessToken});

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }

});




module.exports = router;