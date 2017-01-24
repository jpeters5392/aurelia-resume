import { WorkExperienceService } from '../../services/experience';
import { sortByBeginDate } from '../../utilities/sorters';
import { groupByProperty } from '../../utilities/groupers';

export class Experience {
    static inject() { return [ WorkExperienceService ]; }
    constructor(workExperienceService) {
        this.workExperienceService = workExperienceService;
        this.workExperience = {};
    }

    processResults = (workExperience) => {
        const sortedWorkExperience = workExperience.sort(sortByBeginDate);
        this.workExperience = groupByProperty(sortedWorkExperience, 'employer');
    }

    canActivate() {
        return this.workExperienceService.getWorkExperience().then(this.processResults);
    }
}
