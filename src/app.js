export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router){
    config.title = 'Resume';
    config.map([
      { route: '', redirect: 'experience'},
      { route: 'experience', moduleId: 'screens/experience/experience', nav: true, title: 'Work Experience'},
      { route: 'certifications', moduleId: 'screens/certifications/certifications', nav: true, title: 'Professional Certifications'},
      { route: 'technologies', moduleId: 'screens/technologies/technologies', nav:true, title: 'Technologies'},
    ]);

    this.router = router;
  }
}
