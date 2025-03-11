# Workflow

Workflow refers to automation of a business process, in whole or part, during which documents, information or tasks are passed from one participant to another for action, according to a set of procedural rules.

Oracle APEX Workflow provides basic workflow capabilities for APEX developers.

## Workflow Roles

A Workflow can have three different user roles, each assigned unique privileges

### Owner

Workflow Owner has the authority to initiate and conclude instances of the workflow and to retry any workflow that has encountered an error

### Administrator

Workflow administrator is empowered to start, terminate, suspend, resume, and retry instances of the workflow

Additionally, they have the capability to modify variable values within a workflow instance

### Initiator

Workflow initiator is the user who starts a workflow.

Initiators can terminate workflow instances but only for workflows they initiated.

## Workflow Versions

Follow a well-defined design-time lifecycle

A workflow version can be in three different states:

- Development
  - editable and can only be run in the developer session
- Active
  - partially editable
  - cannot revert to the development state once active
- Inactive
  - cannot be used to start new workflow instances
  - multiple versions can be inactive simultaneously
  - inactive versions can be deleted, which also deletes their associated instances

## Workflow States

Current state of a workflow instance

- active:
  - currently running
- suspended:
  - paused at a specific activity
  - resumed by Administrator
- completed
  - successfully reached its end
- terminated
  - stopped by the owner or administrator or ended with a terminated state
- faulted:
  - error ocurred during execution
  - administrator can retry or stop

## Workflow State Transitions

Describes a workflow moving from one state to another. Happend by the workflow engine itself, by appropriate APIs or as a result of a user action

#### Possible transitions

- Active:

  - Completed
  - Faulted
  - Suspended
  - Terminated

- Faulted:

  - Active
  - Suspended
  - Terminated

- Supended:
  - Active
  - Faulted
  - Terminated

## Workflow Components

### Workflow Definitions

Workflow Definitions contain information about workflows including paramenters, variables, activities, connections, and participants.

### Workflow Designer

Workflow Designer is a graphical user interface that models Oracle APEX workflows.

### Workflow Console Page

Workflow Console pages enables users to view and manage their workflow instances.

Report Contexts can be configure based on user roles:

- My Workflows: for workflow owners
- Admin Workflows: for workflow administrators
- Initiated by Me: for workflow initiators

### Workflow Details Page

Provides key information:

- activities: states and timestamps
- variables: instance variables which can be edited by administrators
- parameters: associated instance parameters
- history: log of instance activities
- workflow diagram: read-only visual representaion

### Workflow Dashboard Page

Features several tabs of informtation

- Workflow by state
- active workflow
- faulted workflows
- performance

### Workflow Runtime

Runtime Engine for the execution of Workflows.

### Workflow Page Process Type

The Workflow Process type enables direct access to specific operations of Workflows:

- start
- terminate
- suspend
- resume
- retry

### Workflow APIs & Views

Public API (APEX_WORKFLOW Package), workflow metadata views, and workflow runtime views.

## Building Blocks of Workflow

The building blocks of a workflow include:

- parameters: inputs for the workflow that are needed to execute the business process
- activities: what happens at each step in a workflow
- connections: link workflow activities and determine the path through the workflow at runtime
- participants: APEX users with operational privileges over a workflow
- variables: are inputs to a workflow, like parameters, but are specific to a workflow version
