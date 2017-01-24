const Technology = require('./models/technology');

const initialTechnologies = [
    new Technology(null, 'Languages', 'C#'),
    new Technology(null, 'Languages', 'JavaScript'),
    new Technology(null, 'Languages', 'Perl'),
    new Technology(null, 'JavaScript Frameworks', 'Aurelia'),
    new Technology(null, 'JavaScript Frameworks', 'React/Redux'),
    new Technology(null, 'JavaScript Frameworks', 'React/Flux'),
    new Technology(null, 'JavaScript Frameworks', 'Angular 1.x'),
    new Technology(null, 'JavaScript Frameworks', 'Backbone'),
    new Technology(null, 'JavaScript Frameworks', 'Electron'),
    new Technology(null, 'JavaScript Frameworks', 'Express'),
    new Technology(null, 'JavaScript Libraries', 'jQuery'),
    new Technology(null, 'JavaScript Libraries', 'YUI 3'),
    new Technology(null, 'JavaScript Libraries', 'Lodash'),
    new Technology(null, 'JavaScript Libraries', 'ImmutableJS'),
    new Technology(null, 'Testing Frameworks', 'Mocha/Chai'),
    new Technology(null, 'Testing Frameworks', 'Jasmine'),
    new Technology(null, 'Testing Frameworks', 'QUnit'),
    new Technology(null, 'Testing Frameworks', 'Karma'),
    new Technology(null, 'Testing Frameworks', 'sinon'),
    new Technology(null, 'JavaScript Tooling', 'ESLint'),
    new Technology(null, 'JavaScript Tooling', 'TSLint'),
    new Technology(null, 'JavaScript Tooling', 'Grunt'),
    new Technology(null, 'JavaScript Tooling', 'Gulp'),
    new Technology(null, 'JavaScript Tooling', 'NPM scripts'),
    new Technology(null, 'JavaScript Tooling', 'Webpack 2'),
    new Technology(null, 'JavaScript Tooling', 'SCSS'),
    new Technology(null, 'JavaScript Tooling', 'node-sass'),
    new Technology(null, 'JavaScript Tooling', 'Typescript 2'),
    new Technology(null, 'JavaScript Tooling', 'Babel 5/6'),
    new Technology(null, 'JavaScript Tooling', 'SystemJS'),
];

module.exports = {
    initialTechnologies,
};