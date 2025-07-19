require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/indexRoute');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000; 

// views
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static files
const assetsPath = path.join(__dirname, "Assets");
app.use(express.static(assetsPath));

// routes
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`Serve is running on port ${port}`);
});
