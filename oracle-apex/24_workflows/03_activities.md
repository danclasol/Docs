# Workflow Activities

A workflow actiivit specifies the kinds of tasks that APEX performs when the workflow reaches that specific activity.

- only can be create if the workflow is in development
- Custom process Type Plug-in can be created as workflow activities

## Activity States

An activity can only be in one state at a time.

- active
  - current running
- waiting:
  - waiting for a result
- completed
  - completed sucessfully
- terminated
  - was in active state when was stopped
- faulted
  - fails to run

## Activity State Transistions

An activity transition describes an activity moving from one state to another

### Possible Transitions

- active

  - Completed
  - Faulted
  - Terminated
  - Waiting

- faulted

  - Active

- waiting
  - active
  - faulted
  - terminated

# Workflow Activities Types

## Workflow Start

A Start activity begins a workflow.

- can only be one start activity in a workflow
- cannot have any incoming connections

## Workflow End

An End activity ends a workflow or a workflow branch.

- supports two End States
  - completed
  - terminated
- can be one or multiple end activities
- doesn't have any outgoing connections

## Switch

A Switch activity defines conditional branches in your workflow.

- true / false
- check workflow variable
- case
- if / elseif / else

## Human Task - Create

An Approval or Action Task is created based on a specified Task Definition.

Activity enters a Waiting state until the task is completed

## Invoke API

An activity that invokes an API-

- can invoke PL/SQL Package, Procedures and functions
- supports invoking REST APIs based on REST Data Sources

## Invoke Workflow

An activity that invokes another workflow in the current application

- cannot invoke itself or any of its caller (avoid cyclic dependency)
- suport In/Out and Out Parameters

## Send Email

An activity that sends an email

- can use Email Templates

## Send Push Notification

An activity that sends a push notification.

## Execute Code

An activity that executes the entered code.

- supports PL/SQL, Javascript (MLE)
- supportsREST Enabled SQL

## Wait

An activity that represents a pause in the workflow
