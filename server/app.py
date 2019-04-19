# -*- coding: utf-8 -*-
import os
from flask import request
from flask_api import FlaskAPI
from flask_cors import CORS
from flask_pymongo import PyMongo
import datetime

app = FlaskAPI(__name__)
app.config['MONGO_URI'] = os.environ.get(
    'MONGO_URI',
    'mongodb://localhost:27017/tasksdb'
)
CORS(app)
mongo = PyMongo(app)
prefix = '/api/v1'

TIME_FMT = '%d %B %Y %H:%M:%S UTC'

@app.route(f'{prefix}/tasks', methods=["GET"])
def get_tasks() -> list:
    """The Get Tasks route.

    This endpoint serves data that'll be consumed by the React client.

    Returns
    -------
    list
        A list of incomplete tasks, ordered by creation date.
    """
    results = mongo.db.tasks.find({'complete': False})
    tasks = []
    for task in results:
        task["_id"] = str(task["_id"])
        tasks.append(task)
    return tasks

@app.route(f'{prefix}/tasks', methods=["POST"])
def new_task() -> dict:
    """The Task Creation route.

    This endpoint takes in new data that will be constructed into a new
    item for the To Do list.

    Returns
    -------
    None
    """
    new_task = request.data
    now = datetime.datetime.utcnow()
    new_task["creationDate"] = now.strftime(TIME_FMT)
    
    mongo.db.tasks.insert(new_task)
    new_task["_id"] = str(new_task["_id"])
    return new_task