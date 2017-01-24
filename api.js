const apiCreator = require('./server/apiCreator');
const experiences = require('./server/experience');
const certifications = require('./server/certifications');
const technologies = require('./server/technologies');
const express = require('express');
const expressLogging = require('express-logging');
const logger = require('logops');
const app = express();

// add logging
app.use(expressLogging(logger));

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req, res) {
  res.send('Welcome to the web api for my resume.  Please use /experience, /certification, or /technology to view my details.');
});

const experienceApi = apiCreator('/experience', experiences.initialExperiences);
app.get(experienceApi.getByIdRoute, experienceApi.getById);
app.get(experienceApi.getAllRoute, experienceApi.getAll);

const certificationApi = apiCreator('/certification', certifications.initialCertifications);
app.get(certificationApi.getByIdRoute, certificationApi.getById);
app.get(certificationApi.getAllRoute, certificationApi.getAll);

const technologyApi = apiCreator('/technology', technologies.initialTechnologies);
app.get(technologyApi.getByIdRoute, technologyApi.getById);
app.get(technologyApi.getAllRoute, technologyApi.getAll);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});