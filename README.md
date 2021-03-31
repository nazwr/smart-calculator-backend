# smart-calculator-backend

## Front End Application [Here](https://github.com/nate01776/smart-calculator)
## [SwaggerHub Link](https://app.swaggerhub.com/apis/Nathan-Demo/smartbear-calculator/2.0.0)
* There is a v1.0.0 (add, subtract) and v2.0.0 (include additional functions multiply and divide)

### Setup
* Clone repository
* `npm install` to setup dependencies
* `npm start` to start API
* By default, the API is exposed on localhost:8070 - if this causes a conflict, the port mapping can be updated in /index.js
* API documentation is exposed found at localhost:8070/docs

### Notes
* ReadyAPI project w/pre-configured calls is in the `/tests` folder
* There are *2* branches in this repository
    - `master` will serve the full API including all functions
    - `initial` will serve ONLY /add and /subtract

## Demo Flow
* `initial` branch should be running
* front end application should be running
* talk through existing functionality, either through FE or using ReadyAPI
* Open up SwaggerHub, v2 of the API that includes /multiply and /divide
* Import spec into ReadyAPI and update the existing project
* Generate virtual service from specification, remove /add and /subtract
* Route non-virtualized request to the localhost API
* This will 'catch' requests to /multiply and /divide and return example values
* Test this out with ReadyAPI - /add and /subtract should give real data, others should give dummy data
* In the front end repo, there is an 'endpoint_config.json' file, update this to the virtual service address
* Front end can now be updated to include buttons for multiply and divide
    * You can copy/paste the existing button HTML and change the names, its designed to grab the button title and use it to drive the API call
* Calculator app should now have extra buttons, and show dummy data in the output text!
* From here, we can update the virt to use a datasource, or handle number ranges on the incoming requests as parameter rules - whatever you think makes sense for your demo!!
