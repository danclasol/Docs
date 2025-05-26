# Dependent tasks

Tasks can be linked to run in sequence or as a chain.

You create task dependencies so one task starts only after another finishes.

- a parent task can support up to 100 child tasks
- `AFTER`: `task_b` will run only after `task_a` finishes successfully

```sql
CREATE OR REPLACE TASK task_b
WAREHOUSE = my_warehouse
AFTER task_a
AS
-- Your SQL statement for Task B
INSERT INTO table_b SELECT * FROM table_a WHERE processed = false;
```

Modifying a task you can also link tasks

```sql
ALTER TASK task_b
ADD AFTER task_a
```
