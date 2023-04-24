const express = require('express');
const cors = require('cors');
const authenticationRoutes = require("./routes/auth.js")
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.use('/auth', authenticationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));