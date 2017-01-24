const Experience = require('./models/experience');
const ClientExperience = require('./models/clientExperience');

const initialExperiences = [
    new Experience(null, 'ILM Professional Services, Inc.', 'Senior 1 Consultant', { 
        beginDate: '11/2013', endDate: '05/2014' 
    }),
    new Experience(null, 'ILM Professional Services, Inc.', 'Senior 2 Consultant', { beginDate: '05/2014', endDate: '10/2014' }),
    new Experience(null, 'ILM Professional Services, Inc.', 'Principal Consultant', { beginDate: '10/2014' }, [
        'Member of the technical interviewing team for the company', 
        'Meet with prospective clients to gather their business requirements and provide a technical proposal with time and materials estimates',
        'Embed into various client product teams as needed to help them meet their deliverables',
        'Maintain and develop new features for our internal company portal using C# on the backend and Angular 1.x on the client',
        'Created an Android app using Xamarin to submit timesheets and PTO requests',
        'Administer Visual Studio Team Services and Azure for our company properties', 
        'Create content for the company\'s development blog'
    ]),
    new Experience(null, 'Point Loma Nazarene University', 'Client/Server Programmer Analyst', { beginDate: '05/2007', endDate: '11/2013' }, [
        'Managed the university’s two web portals',
        'Worked with departments on-campus to gather requirements for new features',
        'Designed and developed the web services and UI to implement the new features leveraging JavaScript and AJAX to provide for a better user experience',
        'Trained and mentored student programmers',
        'Researched and implemented new web technologies such as web workers and responsive design'
    ]),
    new Experience(null, 'Point Loma Nazarene University', 'Student Programmer', { beginDate: '05/2005', endDate: '05/2007' }, [
        'Worked with the university\'s Perl CGI based student information system',
        'Developed new custom portlets for the university’s C# based web portal'
    ]),
    new ClientExperience(null, 'Thomson Reuters', 'Consultant', { beginDate: '11/2013', endDate: '04/2016' }, [
        'Worked on a team responsible for the software platform used by 10+ products',
        'Performed code reviews of C# and JavaScript code getting checked in to the platform to ensure that it met with the coding standards and architectural direction of the platform',
        'Occasionally used heap dumps and log files provided by the DevOps team to troubleshoot C# or JavaScript performance issues in the platform',
        'Worked with a team of 4 core developers to provide technical direction and education for all JavaScript development across the different products on the platform',
        'Converted deprecated JsUnit unit tests to QUnit, and cleaned up the test suites to remove any dependencies on the order of execution of the tests',
        'Helped design an approach to gradually migrate the JavaScript code base to a more modern stack using ES2015 modules',
        'Investigated and implemented approaches to reduce the total size and chattiness of initial page loads to improve the performance of the site'
    ]),
    new ClientExperience(null, 'Code42', 'Senior Web Developer (Consultant)', { beginDate: '09/2016' }, [
        'Help with the research into and implementation of modern web frameworks and tooling including Typescript, React/Redux, Webpack 2, Mocha, Enzyme',
        'Work with their different scrum teams to develop new JavaScript features for their various product releases using React/Redux',
        'Convert existing React/Flux applications to React/Redux and migrate full render tests using PhantomJS to be isolated unit tests that are executed with Mocha',
        'Work with UX designers to implement a UI that meets their wireframes',
        'Work closely with QA to investigate and resolve any client side bugs',
        'Standardize the NPM build processes for the various products to make them more consistent and stable',
        'Investigate ways to improve the performance of the client side code',
        'Design several higher order React components that would reduce duplicate or boilerplate code across the various apps',
        'Create Redux middleware that allows for synchronous action creators to trigger asynchronous behavior'
    ]),
];

module.exports = {
    initialExperiences,
};