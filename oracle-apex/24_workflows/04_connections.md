## Workflow Connections

A Workflow Connection links two distinct activities within your workflow and indicates the direction in which the workflow should advance.

Every activity must have at least one incoming and one outgoing normal connection

The exceptions are the Start activity, which does not have an incoming connection, and the End activity, which does not have an outgoing connection.

## Types

- branches: connections from switch activities
- transitions: connections that go directly from one activity to another

## Error & Timeout Handling

In the Connection properties, specify the connection type:

### Normal

Default connection between activities

### Error

Specify an SQL error code

Each activity can have one or more error connections

The workflow will follow the error connection to a specific activity instead of going into a faulted state

### Timeout

Every activity can have a timeout connection specified if there is already a timeout value in the Deadline section of the activity properties

The exception is the wait activity, which already has its own timeout setting and cannot have another timeout connection stemming from it.

## Branching

It is possible to implement conditional branching through the use of the switch activity
