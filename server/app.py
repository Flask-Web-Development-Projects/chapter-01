# -*- coding: utf-8 -*-
import os
from flask_api import FlaskAPI
from flask_cors import CORS
from flask_pymongo import PyMongo

app = FlaskAPI(__name__)
app.config['MONGO_URI'] = os.environ.get(
    'MONGO_URI',
    'mongodb://localhost:27017/tasksdb'
)
CORS(app)
mongo = PyMongo(app)
prefix = '/api/v1'

@app.route(f'{prefix}/tasks')
def get_tasks() -> dict:
    """The home route.

    This view serves data that'll be consumed by the React client.

    Returns
    -------
    list
        A list of incomplete tasks, ordered by creation date.
    """
    tasks = mongo.db.tasks.find({'complete': False})
    return tasks