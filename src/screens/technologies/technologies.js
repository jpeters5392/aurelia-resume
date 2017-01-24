import { TechnologyService } from '../../services/technology';
import { sortByBeginDate } from '../../utilities/sorters';
import { groupByProperty } from '../../utilities/groupers';

export class Technologies {
    static inject() { return [ TechnologyService ]; }
    constructor(technologyService) {
        this.technologyService = technologyService;
        this.categories = {};
    }

    processResults = (technologies) => {
        this.categories = groupByProperty(technologies, 'category');
    }

    canActivate() {
        return this.technologyService.getTechnologies().then(this.processResults);
    }
}