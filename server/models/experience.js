class Experience {
    constructor(id, employer, title, dates, bulletPoints) {
        this.id = id;
        this.employer = employer;
        this.isClient = false;
        this.title = title;
        if (dates && dates.beginDate) {
            this.beginDate = dates.beginDate;
        }

        if (dates && dates.endDate) {
            this.endDate = dates.endDate;
        } else {
            this.endDate = 'present';
        }

        if (bulletPoints) {
            this.bulletPoints = bulletPoints;
        } else {
            this.bulletPoints = [];
        }
    }
}

module.exports = Experience;