# Chapter 1: The To Do List

While the first chapter includes downloading and installing Flask, as well as getting familiar with some Python web frameworks, this repository will include only the code used in building the To Do list, both back and front end.

If you want to see this project built step by step, follow the branches of the repository:

- `master` will include the finished product.
- `checkpoint-00` is the initial commit, with just the most basic file structure

## Setup

**Requirements:**

- Python 3.7+ and the corresponding version of Pip
  - If you have [Homebrew](https://brew.sh/), you can install the latest version of Python with `brew install python`. If you want to use the specific version of Python that I'm using, `brew install python 3.7.3`
  - If you want to download the official installer, go to [https://www.python.org](https://www.python.org)
- Git

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

### Install the Flask framework

When you installed Python 3.7, you should've gotten a corresponding version of `pip`, which is the Python package manager.
Use `pip` to install the required packages for this project

```
(ENV) $ pip install -r requirements.txt
```