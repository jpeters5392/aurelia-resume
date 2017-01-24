const Certification = require('./models/certification');
const apiCreator = require('./apiCreator');

const initialCertifications = [
    new Certification(null, 'Microsoft', 'Microsoft Certified Solutions Developer – Web Applications', { 
        beginDate: '06/2015', endDate: '06/2017' 
    }),
    new Certification(null, 'Microsoft', 'Microsoft Certified Solutions Developer – App Builder', { 
        beginDate: '09/2016' 
    }),
    new Certification(null, 'Xamarin', 'Certified Mobile Developer', { 
        beginDate: '06/2016', endDate: '06/2017' 
    })
];

module.exports = {
    initialCertifications,
};
