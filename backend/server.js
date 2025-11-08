const express = require('express');
const cors = require('cors')
const ConnectToDB = require('../backend/config/db');
const ProductRouter = require('../backend/Router/ProductRouter');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 

app.use('/api', ProductRouter);
app.use("/products", ProductRouter);
app.use("/AddPr", ProductRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    ConnectToDB();
});