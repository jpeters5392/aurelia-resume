define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Resume';
      config.map([{ route: '', redirect: 'experience' }, { route: 'experience', moduleId: 'screens/experience/experience', nav: true, title: 'Work Experience' }, { route: 'certifications', moduleId: 'screens/certifications/certifications', nav: true, title: 'Professional Certifications' }, { route: 'technologies', moduleId: 'screens/technologies/technologies', nav: true, title: 'Technologies' }]);

      this.router = router;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('services/certifications',['exports', 'aurelia-fetch-client', 'whatwg-fetch'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CertificationsService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CertificationsService = exports.CertificationsService = function () {
        CertificationsService.inject = function inject() {
            return [_aureliaFetchClient.HttpClient];
        };

        function CertificationsService(httpClient) {
            _classCallCheck(this, CertificationsService);

            this.httpClient = httpClient;
        }

        CertificationsService.prototype.getCertifications = function getCertifications() {
            return this.httpClient.fetch('http://localhost:3000/certification').then(function (response) {
                return response.json();
            });
        };

        return CertificationsService;
    }();
});
define('services/experience',['exports', 'aurelia-fetch-client', 'whatwg-fetch'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.WorkExperienceService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var WorkExperienceService = exports.WorkExperienceService = function () {
        WorkExperienceService.inject = function inject() {
            return [_aureliaFetchClient.HttpClient];
        };

        function WorkExperienceService(httpClient) {
            _classCallCheck(this, WorkExperienceService);

            this.httpClient = httpClient;
        }

        WorkExperienceService.prototype.getWorkExperience = function getWorkExperience() {
            return this.httpClient.fetch('http://localhost:3000/experience').then(function (response) {
                return response.json();
            });
        };

        return WorkExperienceService;
    }();
});
define('services/technology',['exports', 'aurelia-fetch-client', 'whatwg-fetch'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TechnologyService = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TechnologyService = exports.TechnologyService = function () {
        TechnologyService.inject = function inject() {
            return [_aureliaFetchClient.HttpClient];
        };

        function TechnologyService(httpClient) {
            _classCallCheck(this, TechnologyService);

            this.httpClient = httpClient;
        }

        TechnologyService.prototype.getTechnologies = function getTechnologies() {
            return this.httpClient.fetch('http://localhost:3000/technology').then(function (response) {
                return response.json();
            });
        };

        return TechnologyService;
    }();
});
define('utilities/sorters',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.sortByBeginDate = sortByBeginDate;
    function sortByBeginDate(item1, item2) {
        var item1Dates = item1.beginDate.split('/').map(function (number) {
            return parseInt(number, 10);
        });
        var item2Dates = item2.beginDate.split('/').map(function (number) {
            return parseInt(number, 10);
        });

        if (item1Dates[1] < item2Dates[1]) {
            return 1;
        } else if (item1Dates[1] > item2Dates[1]) {
            return -1;
        }

        if (item1Dates[0] < item2Dates[0]) {
            return 1;
        } else if (item1Dates[0] > item2Dates[0]) {
            return -1;
        }

        return 0;
    }
});
define('resources/value-converters/employerValueConverter',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var EmployerValueConverter = exports.EmployerValueConverter = function () {
        function EmployerValueConverter() {
            _classCallCheck(this, EmployerValueConverter);
        }

        EmployerValueConverter.prototype.toView = function toView(value) {
            return Object.keys(value).map(function (key) {
                return {
                    name: key,
                    titles: value[key]
                };
            });
        };

        return EmployerValueConverter;
    }();
});
define('screens/certifications/certifications',['exports', '../../services/certifications', '../../utilities/sorters'], function (exports, _certifications, _sorters) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Certifications = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Certifications = exports.Certifications = function () {
        Certifications.inject = function inject() {
            return [_certifications.CertificationsService];
        };

        function Certifications(certificationsService) {
            var _this = this;

            _classCallCheck(this, Certifications);

            this.processResults = function (certifications) {
                var sortedCertifications = certifications.sort(_sorters.sortByBeginDate);
                _this.certifications = sortedCertifications;
            };

            this.certificationsService = certificationsService;
            this.certifications = [];
        }

        Certifications.prototype.canActivate = function canActivate() {
            return this.certificationsService.getCertifications().then(this.processResults);
        };

        return Certifications;
    }();
});
define('screens/experience/experience',['exports', '../../services/experience', '../../utilities/sorters', '../../utilities/groupers'], function (exports, _experience, _sorters, _groupers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Experience = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Experience = exports.Experience = function () {
        Experience.inject = function inject() {
            return [_experience.WorkExperienceService];
        };

        function Experience(workExperienceService) {
            var _this = this;

            _classCallCheck(this, Experience);

            this.processResults = function (workExperience) {
                var sortedWorkExperience = workExperience.sort(_sorters.sortByBeginDate);
                _this.workExperience = (0, _groupers.groupByProperty)(sortedWorkExperience, 'employer');
            };

            this.workExperienceService = workExperienceService;
            this.workExperience = {};
        }

        Experience.prototype.canActivate = function canActivate() {
            return this.workExperienceService.getWorkExperience().then(this.processResults);
        };

        return Experience;
    }();
});
define('screens/technologies/technologies',['exports', '../../services/technology', '../../utilities/sorters', '../../utilities/groupers'], function (exports, _technology, _sorters, _groupers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Technologies = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Technologies = exports.Technologies = function () {
        Technologies.inject = function inject() {
            return [_technology.TechnologyService];
        };

        function Technologies(technologyService) {
            var _this = this;

            _classCallCheck(this, Technologies);

            this.processResults = function (technologies) {
                _this.categories = (0, _groupers.groupByProperty)(technologies, 'category');
            };

            this.technologyService = technologyService;
            this.categories = {};
        }

        Technologies.prototype.canActivate = function canActivate() {
            return this.technologyService.getTechnologies().then(this.processResults);
        };

        return Technologies;
    }();
});
define('utilities/groupers',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.groupByProperty = groupByProperty;
    function groupByProperty(items, key) {
        var categories = {};
        items.forEach(function (item) {
            if (categories[item[key]]) {
                var _items = categories[item[key]];
                _items.push(item);
            } else {
                categories[item[key]] = [item];
            }
        });
        return categories;
    }
});
define('resources/value-converters/categoryValueConverter',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CategoryValueConverter = exports.CategoryValueConverter = function () {
        function CategoryValueConverter() {
            _classCallCheck(this, CategoryValueConverter);
        }

        CategoryValueConverter.prototype.toView = function toView(value) {
            return Object.keys(value).map(function (key) {
                return {
                    name: key,
                    technologies: value[key]
                };
            });
        };

        return CategoryValueConverter;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./resources/elements/navigation.html\"></require><navigation router.bind=\"router\"></navigation><div class=\"container\"><router-view></router-view></div></template>"; });
define('text!resources/elements/navigation.html', ['module'], function(module) { module.exports = "<template bindable=\"router\"><nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"navbar-header clearfix\"><a repeat.for=\"row of router.navigation\" class=\"navbar-item ${row.isActive ? 'is-active' : ''}\" href.bind=\"row.href\"><span>${row.title}</span></a></div></nav></template>"; });
define('text!screens/certifications/certificationItem.html', ['module'], function(module) { module.exports = "<template bindable=\"certification\"><li><h3>${certification.description} (${certification.beginDate} - ${certification.endDate})</h3><p>${certification.issuer}</p></li></template>"; });
define('text!screens/certifications/certifications.html', ['module'], function(module) { module.exports = "<template><require from=\"./certificationItem.html\"></require><header><h1>Professional Certifications</h1></header><article><ul><certificationitem repeat.for=\"certification of certifications\" certification.bind=\"certification\"></ul></article></template>"; });
define('text!screens/experience/employer.html', ['module'], function(module) { module.exports = "<template bindable=\"employer\"><require from=\"./experienceItem.html\"></require><li class=\"employer\"><h2>${employer.name}</h2><ul class=\"positions\"><experienceitem repeat.for=\"experience of employer.titles\" experience.bind=\"experience\"></ul></li></template>"; });
define('text!screens/experience/experience.html', ['module'], function(module) { module.exports = "<template><require from=\"./employer.html\"></require><require from=\"../../resources/value-converters/employerValueConverter\"></require><header><h1>Work Experience</h1></header><article><ul><employer repeat.for=\"employer of workExperience | employer\" employer.bind=\"employer\"></ul></article></template>"; });
define('text!screens/experience/experienceBullets.html', ['module'], function(module) { module.exports = "<template bindable=\"bulletPoints\"><ul if.bind=\"bulletPoints.length > 0\" class=\"bullet-points\"><li repeat.for=\"bullet of bulletPoints\">${bullet}</li></ul></template>"; });
define('text!screens/experience/experienceItem.html', ['module'], function(module) { module.exports = "<template bindable=\"experience\"><require from=\"./experienceBullets.html\"></require><li data-experience-id.bind=\"experience.id\"><div class=\"experience-description\"><strong>${experience.title}</strong> - (${experience.beginDate} - ${experience.endDate})</div><experiencebullets bullet-points.bind=\"experience.bulletPoints\"></li></template>"; });
define('text!screens/technologies/technologies.html', ['module'], function(module) { module.exports = "<template><require from=\"./category.html\"></require><require from=\"../../resources/value-converters/categoryValueConverter\"></require><header><h1>Technologies</h1></header><article><ul class=\"categories\"><category repeat.for=\"category of categories | category\" category.bind=\"category\"></ul></article></template>"; });
define('text!screens/technologies/technologyItem.html', ['module'], function(module) { module.exports = "<template bindable=\"technology\"><li><span>${technology.description}</span></li></template>"; });
define('text!screens/technologies/category.html', ['module'], function(module) { module.exports = "<template bindable=\"category\"><require from=\"./technologyItem.html\"></require><li class=\"category\"><h2>${category.name}</h2><ul class=\"category-technologies\"><technologyitem repeat.for=\"technology of category.technologies\" technology.bind=\"technology\"></ul></li></template>"; });
//# sourceMappingURL=app-bundle.js.map