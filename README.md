# Sample Nest Application

## Description

* This is an app built wit `Nestjs`, `Typscript` and `Postgres` as database. This apps is used to schedule task that'll be executed at specific dates.

## Running

* To run this app, use `docker-compose -f docker-compose.yml` up.
* The app is available on `localhost:5000`

## API

* This app can be hit using 3 routes

### <http://localhost:5000>

* This returns all the tasks ever scheduled in the system

### <http://localhost:5000/create>

* This creates a new task

```json
{"first_date_of_execution": "2022-12-12T00:27:00",
"repeat": 5
}
```

### <http://localhost:5000/tasks>

* This returns the future tasks that have not yet been executed.
