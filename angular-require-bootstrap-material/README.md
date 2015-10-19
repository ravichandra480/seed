#version 1.0

Application Frameworks :

    1. JavaScript
       a. AngularJs - JavaScript MVC
       b. Jquery, Twitter Bootstrap & Angular Material- JavaScript librearies (Widgets)
       c. RequireJs - JavaScript AMD

    2. CSS 3
       a. SCSS - CSS Preprocessor
       b. Twitter Bootstrap - CSS libreary (RWD, Reset CSS, Required Component CSS)
       c. Angular Material - Components

    3. HTML 5
       a. ARIA - Symantic Tags usage & Roles

    4. Fonts & Icons
       a. 

    4. Build tools
       a. Yeoman (Yo) - Scaffolding Tool
       a. Bower - Package manager 
       b. Grunt - Task runner


Non Functanal Requirements:

    1. Application performance
        ToDo : Application performance benchmarks has to be determined
    2. Theaming
    3. Internationalization
    4. SEO (Search Engin Optimization)

How To Run :

    1. 

App structure :

    SPA (Single Page Application):

    <Application Name> |

                |Index.html - Base html file - Version (HTML 5)
                |Scripts   |
                           | Controllers - AngularJs MVC, Controllers
                           | Directives - AngularJs MVC, Custom HTML Tags
                           | Service - AngularJs MVC, Model
                           | Vendors |
                                     | AngularJs (JavaScript Object and Classes Dependencies) - v1.4.0-rc.2
                                     | Bootstrap (Application custom UI) - v3.3.4
                                     | Angular Material (0.11.2)
                                     | JQuery (JavaScript UI Library) - v2.1.3
                                     | Require (JavaScript AMD) - v2.1.15
                           | app.js - Angular app configuration using require module
                           | ng_require_config.js - Application require configuration
                           | routs.js - RequireJs routes
                | Styles   |
                           | CSS |
                                 | bootstrap v3.3.2 - UI Framework
                                 | Angular Material (0.11.2)
                           | SCSS

                  


Unit Tests :

  Instaling Karma:

    npm install karma --save-dev
    npm install karma-phantomjs-launcher --save-dev
    npm install karma-jasmine --save-dev
    npm install -g karma-cli

    karma init karma.config.js

    karma start karma.config.js

ToDo :

    1. 
