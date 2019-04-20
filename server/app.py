# -*- coding: utf-8 -*-
import os
import datetime
from bson.objectid import ObjectId
from flask import request
from flask_api import FlaskAPI
from flask_cors import CORS
from flask_pymongo import PyMongo
from pymongo import ReturnDocument

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
    dict
        The data of the task, as it has been inserted into the database
    """
    new_task = request.data
    now = datetime.datetime.utcnow()
    new_task["creationDate"] = now.strftime(TIME_FMT)
    
    mongo.db.tasks.insert(new_task)
    new_task["_id"] = str(new_task["_id"])
    return new_task

@app.route(f'{prefix}/tasks/<string:task_id>', methods=["DELETE"])
def remove_task(task_id: str) -> str:
    """The Task Deletion route.

    This endpoint takes in the id of the task to be deleted, finds it in the
    database, and removes it. On a successful deletion, it returns the
    id of the deleted task to the client.

    Parameters
    ----------
    task_id : str
        The ID of the task to be deleted, as a string.

    Returns
    -------
    str
        The ID of the deleted task, as a string.
    """
    mongo.db.tasks.delete_one({'_id': ObjectId(task_id)})
    return task_id

@app.route(f'{prefix}/tasks/<string:task_id>', methods=["PUT"])
def update_task(task_id: str) -> dict:
    """The Task Update route.

    This endpoint takes in the id of the task to be updated in the URL, as
    well as the new state of the task item in the request body. On a
    successful update, it returns the new state of the updated task to the
    client.

    Parameters
    ----------
    task_id : str
        The ID of the task to be updated, as a string.

    Returns
    -------
    dict
        The updated data of the task.
    """
    update_data = request.data
    update_data.pop("_id")
    updated_task = mongo.db.tasks.find_one_and_update(
        {"_id": ObjectId(task_id)},
        {"$set": update_data},
        return_document=ReturnDocument.AFTER
    )
    updated_task["_id"] = str(updated_task["_id"])
    return updated_task
