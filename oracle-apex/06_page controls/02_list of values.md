# List of Values

## Access to List of Values

To access the application items page:

- navigate to the application home page and click on Shared Components

![List of Values Access](images/application_items_access_shared_comp.png)

- go to Other Components > List of Values

![List of Values Access](images/list_values_access.png)

## Create List of Values

Click on button "Create" and the wizard will pop up

![List of Values Create](images/list_values_create.png)

### Static Type

To create a static list select the type "Static"

![List of Values Static](images/list_values_static.png)

Fill the static values for the list

![List of Values Static Values](images/list_values_static_values.png)

### Dynamic Type

The dynamic list of values is based on the SQL query or the SQL query returned by a function body.

To create a dynamic list select the type "Dynamic"

![List of Values Dynamic](images/list_values_dynamic.png)

Select the data source for the values of the list

![List of Values Dynamic Source](images/list_values_dynamic_source.png)

Select the column mapping

![List of Values Dynamic Source](images/list_values_dynamic_mapping.png)

## Associate List of Values to Page Item

You can associate with the page item type that can accept the list of values:

- select list
- shuttle
- check box
- radio group
- pop-up LOV
- list manager

### Set List of Values Attributes

In the List of Values Attributes select:

- Type: Shared Component
- List of Values: select your list of values created

![Select list Attributes](images/select_list_attributes_list_values.png)

And the result should be this

![Select list example](images/select_list_example.png)

### Cascade List of Values

Create two item as Select List but on the seconde Select list include a reference to the first select list

```sql
select e.empno, e.ename from emp e where e.deptno = :P7_DEPARTMENT
```

![Select List Cascade](images/select_list_cascade.png)

Also, under Cascading List of Values, for parent items, select the first select list.

This indicates that the list of values for `P7_ENAME` is determined by the value selected in the `P7_department` number select list.

![Select List Cascade Parent](images/select_list_cascade_parent.png)
