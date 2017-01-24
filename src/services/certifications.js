import 'whatwg-fetch';
import { HttpClient } from 'aurelia-fetch-client';

export class CertificationsService {
    static inject() { return [ HttpClient ]; }
    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    getCertifications() {
        return this.httpClient.fetch('http://localhost:3000/certification')
            .then((response) => response.json());
    }
}
