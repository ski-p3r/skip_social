
### Main features

* Separated dev and production settings

* Example app with custom user model

* Bootstrap static files included

* User registration and log in

* Profile for easy deployments

* Separated requirements files

* SQLite by default if no env variable is set

# Usage

To use this template to start your own project:

### Existing virtualenv

If your project is already in an existing python3 virtualenv first install django by running

    $ pip install -r requirements.txt
    
      
      
After that just install the local dependencies, run migrations, and start the server.


# {{ Skip }}

# Getting Started

First clone the repository from Github and switch to the new directory:

    $ git clone git@github.com/manmuba/skip.git
    $ cd skip-main
    
Activate the virtualenv for your project.
    
Install project dependencies:

    $ pip install -r requirements.txt
    
    
Then simply apply the migrations:

    $ python manage.py migrate
    

You can now run the development server:

    $ python manage.py runserver
