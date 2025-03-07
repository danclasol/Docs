# Page Items

Page Items are placed on a page and have associated user interface properties, such as display only, label, label template.

## Creation

You can create a page item in either of the following ways.

From Rendering Tab in the left pane

- go to Rendering tab > Page Designer
- go to the region node where you want to create the item
- right click and select "Create Page Item"

![Page Items Create From Rendering](images/page_items_rendering.png)

From the Gallery in the central pane

- go to the Layout tab > Gallery > Items
- passing the cursor over an item displays a tooltip that describes it
- select the item you want to create and drag it to the appropriate location in the layout

![Page Items Create From Gallery](images/page_items_gallery_drag.png)

## Referencing Item Values

You can reference item values stored in a session state in regions, computations, validations, processes, and branches. The syntax for referring item values are

### SQL

This index can be used for references within a SQL query.

```
:MY_ITEM
```

### PL/SQL

This is the PL/SQL syntax, referencing the item value using the V function.

```
V('MY_ITEM')
```

Use this syntax in PL/SQL code of packages or stored procedures and functions.

Avoid this syntax in SQL statements. May result in performance problems.

### PL/SQL

This is the standard PL/SQL syntax referencing the numeric item value using the NV function.

```
NV('MY_NUMERIC_ITEM')
```

Use this syntax in PL/SQL code of packages or stored procedures and functions.

Avoid the syntax in SQL statements. It may result in performance problems.

### Static Text (Exact)

This is used in static text for exact substitution.

```
&MY_ITEM
```

Exact substitution syntax should be avoided in SQL or PL/SQL code because it can result in SQL injection vulnerabilities.
