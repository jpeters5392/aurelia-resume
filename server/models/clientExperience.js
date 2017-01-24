const Experience = require('./experience');

class ClientExperience extends Experience {
    constructor(id, employer, title, dates, bulletPoints) {
        super(id, employer, title, dates, bulletPoints);
        this.isClient = true;
    }
}

module.exports = ClientExperience;