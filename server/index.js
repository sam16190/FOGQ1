const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const Nav = require('./model/navbarModel');
const Rules = require('./model/ruleModel');
const Settings = require('./model/settingsModel');
const Advanced = require('./model/advancedModel');

const app =express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    //useUnifiedToplogy:true,
}).then(()=>{
    console.log('DB connection successful');
}).catch((err)=>{
    console.log(err.message);
});


app.get('/api/nav', async (req, res) => {
    try {
      const nav = await Nav.find();
      res.send(nav);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
    }
  });

  app.get('/api/settings', async (req, res) => {
    try {
      const settings = await Settings.find();
      res.send(settings);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
    }
  });

  app.get('/api/rules', async (req, res) => {
    try {
      const rules = await Rules.find();
      res.send(rules);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
    }
  });

  app.get('/api/advanced', async (req, res) => {
    try {
      const advanced = await Advanced.find();
      res.send(advanced);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data');
    }
  });

  

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server started on Port ${process.env.PORT}`);
});
