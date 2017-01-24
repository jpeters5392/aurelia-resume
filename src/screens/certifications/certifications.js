import { CertificationsService } from '../../services/certifications';
import { sortByBeginDate } from '../../utilities/sorters';

export class Certifications {
    static inject() { return [ CertificationsService ]; }
    constructor(certificationsService) {
        this.certificationsService = certificationsService;
        this.certifications = [];
    }

    processResults = (certifications) => {
        const sortedCertifications = certifications.sort(sortByBeginDate);
        this.certifications = sortedCertifications;
    }

    canActivate() {
        return this.certificationsService.getCertifications().then(this.processResults);
    }
}