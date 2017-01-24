import 'whatwg-fetch';
import { HttpClient } from 'aurelia-fetch-client';

export class TechnologyService {
    static inject() { return [ HttpClient ]; }
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getTechnologies() {
        return this.httpClient.fetch('http://localhost:3000/technology')
            .then((response) => response.json());
    }
}
