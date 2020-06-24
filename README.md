This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Technical Questions
1. I spent 10 hours to deploy this project. I would use Jest for test.
2. The greatest feature of React in my point of view is adding the Virtual DOM and only update the component that is being updated. You can review my article about great features of React and its comparison with Angular: https://www.linkedin.com/pulse/react-vs-angular-which-one-right-decision-your-front-end-tayari/ 
3. If I bump into a slow performance in the software the first thing that I check is network tab of the browswer to see if any requests takes more than usual time. However, performance testing is a comprehensive topic and should be considered in the Unit Testing. I read an article about performance (https://stackify.com/ultimate-guide-performance-testing-and-software-testing/) some of them are (Load testing, Stress testing, Soak testing, Spike testing, Breakpoint testing, Configuration testing, Isolation testing, Internet testing. Moreover, for the front end, I have previously used gtmetrix and pingdom and resolved their reported issues.
4. I would double check the image_url, put the city, state, area, and country inside another object called location or address.
5. 
```json
[
  {
    "_id": 120000,
    "picture": "https://media-exp1.licdn.com/dms/image/C5603AQFPLINrZYpqFA/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=g2uHG0nIk5OIBQYqozM2n-c6bYYFVuK5gxAZ7K4XlO4",
    "name": "Alireza Tayari",
    "gender": "Male",
    "company": "SLG",
    "email": "alireza.tc@gmail.com",
    "phone": "+1 604-727-6565",
    "address": "Toronto",
    "about": "Persevered Front End Developer",
    "latitude": 43.6532, 
    "longitude": 79.3832,
    "tags": [
      "Front End Development",
      "UI Development",
      "UI/UX Design"
    ],
    "key skills": ["HTML5", "CSS3", "Bootstrap", "ES6", "JavaScript", "React", "MVC", "jQuery", "AngularJS", "wordpress", "GIT", "TFS", "Sourcesafe", "Piwik", "project management", "YouTrack", "responsive web design", "mobie first"],
    "friends": [
      {
        "id": 126478,
        "name": "Iman"
      },
      {
        "id": 126479,
        "name": "Kas"
      }
    ],
    "greeting": "Hello, welcome to Alireza Tayari json world!",
    "favoriteFruit": "banana"
  }
]
```