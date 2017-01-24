class Certification {
    constructor(id, issuer, description, dates) {
        this.id = id;
        this.issuer = issuer;
        this.description = description;
        if (dates && dates.beginDate) {
            this.beginDate = dates.beginDate;
        }

        if (dates && dates.endDate) {
            this.endDate = dates.endDate;
        }
    }
}

module.exports = Certification;