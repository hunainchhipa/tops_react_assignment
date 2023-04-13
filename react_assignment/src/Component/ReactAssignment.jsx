import React from "react";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <>
      <table align="center">
        <th colSpan="2">
          <h1>React Assignment</h1>
        </th>
        <tr>
          <td>Q.1</td>
          <td>What is React?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            The Reactjs is an open-source JavaScript library developed by
            Facebook. It’s used for building interactive user interfaces and web
            applications quickly and efficiently with significantly less code
            than you would with vanilla JavaScript.
            <br />
            In React, you develop your applications by creating reusable
            components that you can think of as independent Lego blocks. These
            components are individual pieces of a final interface, which, when
            assembled, form the application’s entire user interface.
          </td>
        </tr>
        <tr>
          <td>Q.2</td>
          <td>What is NPM in React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            npm is the world's largest Software Library. NPM is short for node
            package manager, an online directory that contains the various
            already registered open-source packages. NPM modules consume the
            various functions as a third-party package when installed into an
            app using the NPM command npm install.
          </td>
        </tr>
        <tr>
          <td>Q.3</td>
          <td>What is role of Node Js in react Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            ReactJS and NodeJS are both JavaScript technologies. But the uses of
            NodeJS and ReactJS are entirely different. NodeJS is a framework of
            JavaScript which is mainly used for working with the backend of our
            application or building the backend using JavaScript, whereas
            ReactJS is a JavaScript front-end library. It is mainly used for
            building the user interface or the frontend of our application.
            Though both are used for different purposes, both these technologies
            make our application faster and easy to handle. <br />
            Node.js enables the creation of scalable and quick back-end RESTful
            APIs. On the other hand, React is a front-end library that creates
            interactive user interfaces. With both tools, you can fast build
            complex and scalable web apps. Node is the most popular platform for
            hosting and running web servers for React apps.
          </td>
        </tr>
        <tr>
          <td>Q.4</td>
          <td>What is CLI (command line interface) command In React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <p>
              Let us learn the basic command available in Create React App
              command line application in this chapter.
            </p>
            <u>Creating a new application</u>
            <p>
              <i>
                <u>
                  Create React App provides multiple ways to create React
                  application.
                </u>
              </i>
            </p>
            <i>
              <u>Using npx script.</u>
            </i>
            <p>
              "npx create-react-app `react-app-name`" <br />
              "npx create-react-app hello-react-app"
            </p>
            <i>
              <u>Using npm script.</u>
            </i>
            <p>
              "npm create-react-app `react-app-name`" <br />
              "npm create-react-app hello-react-app"
            </p>
            <i>
              <u>Using yarn package manager.</u>
            </i>
            <p>
              "yarn init react-app `react-app-name`" <br />
              "yarn init react-app hello-react-app"
            </p>
            <i>
              <u>Selecting a template</u>
            </i>
            <p>
              Create React App creates React application using default template.
              Template refers the initial code with certain build-in
              functionality. There are hundreds of template with many advanced
              features are available in npm package server. Create React App
              allows the users to select the template through –template command
              line switch. <br /> <br />
              "create-react-app my-app --template typescript" <br /> <br />
              Above command will create react app using cra-template-typescript
              package from npm server.
            </p>
            <i>
              <u>Installing a dependency</u>
            </i>
            <p>
              React dependency package can be installed using normal npm or yarn
              package command as React uses the project structure recommended by
              npm and yarn.
            </p>
            <i>
              <u>Using npm package manager.</u>
            </i>
            <p>"npm install --save react-router-dom"</p>
            <i>
              <u>Using yarn package manager.</u>
            </i>
            <p>"yarn add react-router-dom"</p>
            <i>
              <u>Running the application</u>
            </i>
            <p>
              React application can be started using npm or yarn command
              depending on the package manager used in the project.
            </p>
            <i>
              <u>Using npm package manager.</u>
            </i>
            <p>"npm start"</p>
            <i>
              <u>Using yarn package manager.</u>
            </i>
            <p>"yarn start"</p>
            <p>
              To run the application in secure mode (HTTPS), set an environment
              variable, HTTPS and set it to true before starting the
              application. For example, in windows command prompt (cmd.exe), the
              below command set HTTPS and starts the application is HTTPS mode.
              <br /> <br />
              "set HTTPS=true && npm start"
            </p>
          </td>
        </tr>
        <tr>
          <td>Q.5</td>
          <td>What is Components in React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <ul>
              <li>Components are the building blocks of any React app.</li>
              <li>
                Components let you split the UI into independent, reusable
                pieces, and think about each piece in isolation.
              </li>
              <li>
                Components are like JavaScript functions. They accept arbitrary
                inputs (called “props”) and return React elements describing
                what should appear on the screen.
              </li>
              <li>
                Always start component names with a capital letter. React treats
                components starting with lowercase letters as DOM tags. For
                example, {"<div />"} represents an HTML div tag, but
                {"<App />"} represents a component requires App to be in scope.
              </li>
              <li>
                There are two types of components. 1. Function Component. 2.
                Class Component.
              </li>
              <br />
              <u>
                <i>1. Function Component</i>
              </u>
              <p>
                It is a JavaScript function which accepts a single “props”
                object argument with data and returns a React Element.
              </p>
              <u>
                <i>Syntax:-</i>
              </u>
              <p>
                {"function func_name(params) {"} <br />
                {"return React Element "} <br />
                {"}"}
              </p>
              <u>
                <i>Example:-</i>
              </u>
              <p>
                {"function Student( ){"} <br />
                {"return <h1>Hello Rahul</h1> }"} <br />
                <br />
                {"const Student = ( ) =>{"} <br />
                {"return <h1>Hello Rahul</h1>"} <br />
                {"}"}
              </p>
              <u>
                <i>2. Class Component</i>
              </u>
              <p>
                A class component requires you to extend from React.Component.
                The class must implement a render() member function which
                returns a React component to be rendered, similar to a return
                value of a functional component. In a class-based component,
                props are accessible via this.props.
              </p>
              <u>
                <i>Syntax:-</i>
              </u>
              <p>
                {"class class_name extends Component {"} <br />
                {"render( ){"} <br />
                {"return React Element"} <br />
                {"}"} <br />
                {"}"}
              </p>
              <u>
                <i>Example:-</i>
              </u>
              <p>
                {"class Student extends Component {"} <br />
                {"render( ){"} <br />
                {" return <h1>Hello Rahul</h1>"} <br />
                {"}"} <br />
                {"}"} <br />
                <br />
                {" class Student extends Component {"} <br />
                {"render( ){"} <br />
                {"return <h1>Hello {this.props.name}</h1>"} <br />
                {"}"} <br />
                {"}"}
              </p>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Q.6</td>
          <td>What is Header and Content Components in React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <u>
              <i>Header Component:</i>
            </u>
            <p>
              A "header" component is typically used to display content at the
              top of a web page or a section of a web application. It may
              contain elements such as a logo, navigation links, a search bar,
              or other UI elements that provide context or functionality to the
              user. The header component is usually used for branding, site
              navigation, or providing important information about the page or
              application.
            </p>
            <u>
              <i>Content Component:</i>
            </u>
            <p>
              A "content" component is typically used to display the main
              content of a web page or a section of a web application. It may
              contain elements such as text, images, forms, or other UI elements
              that make up the primary content that the user interacts with. The
              content component is usually used to display the main purpose or
              functionality of the web page or application.
            </p>
          </td>
        </tr>
        <tr>
          <td>Q.7</td>
          <td>How to install React Js on Windows, linux Operating System?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <u>
              <i>
                Install React.js on Windows <br /> <br />
                Step 1:
              </i>
            </u>
            <p>
              You can download the Node.js installer free from the official
              website. The long-term support (LTS) version is recommended even
              though the current version has the latest features. <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image01-Install-Node.js-LTS-version-min.png"
                alt=""
              />
            </p>
            <u>
              <i>Step 2:</i>
            </u>
            <p>
              Follow the installation instructions on how to install React on
              windows until you get asked if you want to automatically install
              the necessary tools. Leave the checkbox unchecked to automatically
              install the necessary tools and proceed with the installation.{" "}
              <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image02-Node.js-install-without-Chocolatey-min.png"
                alt=""
              />
            </p>
            <u>
              <i>Step 3:</i>
            </u>
            <p>
              After the installation, you can open the command prompt by typing
              cmd in the Windows search bar. At the prompt, run the `node -v`
              command. <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image03-Open-Command-Prompt-and-run-node-v-min.png"
                alt=""
              />
            </p>
            <p>
              It should give you the current version of Node.js installed. After
              that, run the following command at the prompt to install the
              Create-React-App module, making creating and deploying React into
              projects with a single command effortless. <br /> <br />
              <u>
                <i>npm install -g create-react-app</i>
              </u>{" "}
              <br /> <br />
              Use the following command to verify the installation. <br />{" "}
              <br />
              <u>
                <i>create-react-app --version</i>
              </u>{" "}
              <br /> Here is the output <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image04-create-react-app-version-ouput-min.png"
                alt=""
              />
            </p>
            <u>
              <i>Step 4:</i>
            </u>
            <p>
              When using the create-react-app command, ensure you are in the
              desired directory or folder location since it creates the project
              folder in the current path. Create a new folder in which your
              first React app will be. You can do so from the command prompt by
              running the following command. For this tutorial, the new folder
              is myfirstreactapp. <br /> <br />
              <u>
                <i>mkdir myfirstreactapp</i>
              </u>{" "}
              <br /> <br /> After that, move inside that folder by running the
              cd command followed by the folder name. <br /> <br />
              <u>
                <i>cd myfirstreactapp</i>
              </u>{" "}
              <br /> <br /> Here is the output. <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image05-mkdir-and-cd-to-React-app-output-min.png"
                alt=""
              />{" "}
              <br /> <br />
              Once inside your new folder, run the following command. It
              installs all the required dependencies and creates a new folder
              for your React app. For this tutorial, the name is yourfirstapp.{" "}
              <br /> <br />
              <u>
                <i>create-react-app yourfirstapp</i>
              </u>{" "}
              <br /> <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image06-launch-create-react-app-and-name-it-min.png"
                alt=""
              />{" "}
              <br /> If everything is successful, you will see a similar output
              as below. <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image07-Successful-React-app-creation-output-min.png"
                alt=""
              />
            </p>
            <u>
              <i>Step 5:</i>
            </u>
            <p>
              Move inside the newly created app folder. Again, this tutorial’s
              app is yourfirstapp. Do this by running the cd yourfirstapp
              command. Once inside your new React development environment, start
              your first app by running the following command. <br /> <br />
              <u>
                <i>npm start</i>
              </u>{" "}
              <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image08-npm-start-output-min.png"
                alt=""
              />{" "}
              <br /> If everything goes well, you will see a new tab with the
              React logo opened in your default browser. <br />
              <img
                src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2023/03/image09-React.js-screen-in-browser-min.png"
                alt=""
              />{" "}
              <br /> You are ready to start coding in your newly created React
              development environment.
            </p>
          </td>
        </tr>
        <tr>
          <td>Q.8</td>
          <td> How to install NPM and How to check version of NPM?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            To download the latest version of npm, on the command line, run the
            following command: <br /> <br />
            {"`npm install -g npm`"} <br /> <br />
            <u>
              <i>Checking your version of npm and</i>
            </u>{" "}
            <br /> <br />
            To see if you already have npm installed and check the installed
            version, run the following command: <br /> <br />
            {"`npm -v`"}
          </td>
        </tr>
        <tr>
          <td>Q.9</td>
          <td>How to check version of React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            The package.json contains metadata about our project. It is created
            by default when we create our React project. <br /> <br />
            The package.json file contains a lot of information in the
            name/value pairs in JSON format. We can easily check our React
            version under the list of dependencies as shown in the image given
            below. <br />
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210923161201/packageoutput.png"
              alt=""
            />{" "}
            <br />
            <u>
              <i>Using command line</i>
            </u>{" "}
            <br /> <br /> We can easily check the React version by using the
            command mentioned below on our command line. <br /> <br />
            {"`npm view react version`"}
          </td>
        </tr>
        <tr>
          <td>Q.10</td>
          <td>How to change in components of React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <p>
              <u>
                <i>
                  To make changes to components in React.js, you typically
                  follow these steps:
                </i>
              </u>{" "}
              <br /> <br />
              <ol>
                <li>
                  <u>
                    <i>Identify the component:</i>
                  </u>{" "}
                  Determine which component you want to modify. Components in
                  React.js are typically defined as JavaScript classes or
                  functions.
                </li>{" "}
                <br />
                <li>
                  <u>
                    <i>Update component's code:</i>
                  </u>{" "}
                  Once you have identified the component, you can modify its
                  code according to your requirements. This may involve changing
                  the component's properties (also known as props), its state,
                  or its rendering logic.
                </li>{" "}
                <br />
                <li>
                  <u>
                    <i>Save changes:</i>
                  </u>{" "}
                  After making the desired changes in the component's code, save
                  the changes in your code editor.
                </li>{" "}
                <br />
                <li>
                  <u>
                    <i>Hot-reloading:</i>
                  </u>{" "}
                  In many development environments, such as Create React App or
                  React Native, React.js supports hot-reloading, which means
                  that the changes you make in the component's code will be
                  automatically reflected in the rendered output of your
                  application without needing to manually refresh the page or
                  restart the application.
                </li>{" "}
                <br />
                <li>
                  <u>
                    <i>Test and verify:</i>
                  </u>{" "}
                  After saving the changes, test and verify the behavior of the
                  component in your application. Ensure that the changes you
                  made have the desired effect and do not introduce any
                  unintended issues or errors.
                </li>{" "}
                <br />
                <li>
                  <u>
                    <i>Repeat if needed:</i>
                  </u>{" "}
                  If further changes are required, you can go back to step 2 and
                  make additional modifications to the component's code as
                  needed.
                </li>
              </ol>
            </p>
          </td>
        </tr>
        <tr>
          <td>Q.11</td>
          <td>How to Create a List View in React Js?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td></td>
        </tr>
        <tr>
          <td>Q.12</td>
          <td>Create Increment decrement state change by button click?</td>
        </tr>
        <tr>
          <td>Ans:</td>
          <td>
            <Link to="/inc_dec">Click Here...</Link>
          </td>
        </tr>
      </table>
    </>
  );
}