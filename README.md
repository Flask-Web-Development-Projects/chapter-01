# Chapter 1: The To Do List

While the first chapter includes downloading and installing Flask, as well as getting familiar with some Python web frameworks, this repository will include only the code used in building the To Do list, both back and front end.

## Index:

- [Setup](#Setup)
- [The Walkthrough](#Overview-of-the-Walkthrough)

## Setup

**Requirements:**

- Git
- Python 3.7+ and the corresponding version of Pip
  - If you have [Homebrew](https://brew.sh/), you can install the latest version of Python with `brew install python`. If you want to use the specific version of Python that I'm using, `brew install python 3.7.3`
  - If you want to download the official installer, go to [https://www.python.org](https://www.python.org)
- MongoDB
  - If you have [Homebrew](https://brew.sh), you can install the latest version of MongoDB with `brew install mongodb`
- Node and Node Package Manager
  - Have node 10.15.3+ (I use node 11.0)
  - If you have Homebrew, install node and npm (if you don't already have them) with `brew install node`

Clone this repository to your local development machine.
Note that this was built on a 2017 Macbook Pro running OSX v. 10.13.6.
You will need to [have git on your local machine](https://git-scm.com/downloads) in order to clone this repository down.

```
$ git clone https://github.com/Flask-Web-Development-Projects/chapter-01.git
```

### Start the Python Virtual Environment

Navigate into the cloned directory and start a Python 3 development environment.
You can call yours whatever you want, but I always call mine `ENV`.
Once created, activate it

```
$ cd chapter-01
$ python3.7 -m venv ENV
$ source ENV/bin/activate
(ENV) $
```

### Install the Flask framework and other required packages

When you installed Python 3.7, you should've gotten a corresponding version of `pip`, which is the Python package manager.
Use `pip` to install the required packages for this project

```
(ENV) $ pip install -r requirements.txt
```

### Install and Run MongoDB

If you don't already have MongoDB (version 4.0.9+), [download and install it here](https://docs.mongodb.com/manual/administration/install-community/).

With Homebrew, you can install it with

```
(ENV) $ brew tap mongodb/brew
(ENV) $ brew install mongodb-community@4.0
```

Start MongoDB as a background process

```
(ENV) $ brew services start mongodb/brew/mongodb-community
```

### Set an Environment Variable for Running Flask

Append to your `ENV/bin/activate` script an environment variable that points to the flask app.
Reactivate your environment to enable access to the new environment variable.

```
(ENV) $ BASE_DIR=$(pwd)
(ENV) $ echo "export FLASK_APP=$BASE_DIR/server/app.py flask run" >> ENV/bin/activate
(ENV) $ source ENV/bin/activate
```

Run the application with `flask run`.
You'll be able to view the resulting website on http://127.0.0.1:5000

```
(ENV) $ flask run
 * Serving Flask app "server/app.py"
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

### Install the software for the client directory and run the client

Navigate to the `client` directory and install all the dependencies

```
(ENV) $ cd client
(ENV) $ npm install
```

Once installed, run the front end

```
(ENV) $ npm start
```

## Overview of the Walkthrough

If you want to see this project built step by step, follow the branches of the repository:

- [master](https://github.com/Flask-Web-Development-Projects/chapter-01/) will include the finished product.
- [checkpoint-00](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-00) is the initial commit, with just the most basic file structure
- [checkpoint-01](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-01) is the first route of the Flask application
- [checkpoint-02](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-02) adds the start of the corresponding React application and modifies the first route of the Flask application to serve data to what will be the front end
- [checkpoint-03](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-03) does a few things:
  - modifies the React application to convert it to Typescript
  - strips out everything that isn't needed from the default output of `create-react-app`
  - creates some file structure to tuck away React components in a separate directory
  - converts the App component from a class component to a hooks component
  - adds a first view for displaying a list of tasks
  - updates the Flask app to use [Flask-CORS](https://flask-cors.readthedocs.io/en/latest/)
- [checkpoint-04](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-04) connects the Flask API to an existing MongoDB database instance.
- [checkpoint-05](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-05) creates an API endpoint for creating new To Do items
- [checkpoint-06](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-06) does a few things:
  - adds a component to the client that allows for the creation of a new Task
  - updates the main app to include that component
  - breaks the task list out into a separate component
- [checkpoint-07](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-07) adds a new API endpoint for deleting tasks
- [checkpoint-08](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-08) updates the front end to allow deletion of tasks, and breaks out individual task items into a component
- [checkpoint-09](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-09) adds a new API endpoint for updating tasks
- [checkpoint-10](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-10) updates the Task component to allow for the completion of a task, using the "update" endpoint
- [checkpoint-11](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-11) updates the Task component to allow for editing of the body of a task
- [checkpoint-12](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-12) updates the front end with some rudimentary Bootstrap styling
- [checkpoint-13](https://github.com/Flask-Web-Development-Projects/chapter-01/tree/checkpoint-13) adds a title line and handles the case of no task items