import 'whatwg-fetch';
import { HttpClient } from 'aurelia-fetch-client';

export class WorkExperienceService {
    static inject() { return [ HttpClient ]; }
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getWorkExperience() {
        return this.httpClient.fetch('http://localhost:3000/experience')
            .then((response) => response.json());
    }
}
