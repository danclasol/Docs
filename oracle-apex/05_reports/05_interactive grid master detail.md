# Page Component Master Detail

## Using the Creation Page Wizard

Create a new page and choose the Master Detail component

![Master Detail](images/master_detail.png)

### Choose the style

![Master Details Styles](images/master_detail_styles.png)

#### Stacked

A single page master-detail utilizing editable Interactive Grids

#### Side by Side

Consists of a report page master-detail utilizing side by side layout and report regions with modal edit windows

#### Drill Down

report page that drills down to a page where the selected master is standard form items, and the detail tables use editable Interactive Grids

Choose de data source for the master table and the primary key

![Master Detail Master Table](images/master_detail_master_table.png)
![Master Detail Master PK](images/master_detail_master_table_pk.png)

Choose de data source for the detail table and the primery key

![Master Detail Detail Table](images/master_detail_detail_table.png)
![Master Detail Detail PK](images/master_detail_detail_pk.png)

Set the columns of the relationship between the tables

![Master Detail Relationship](images/master_detail_relationship.png)

## Without using the Creation Page Wizard

We need to set in the detail table the reference to the master table

![Master Detail Relationship](images/master_detail_relationship_manual.png)

And also, we need to set the relationship columns

![Master Detail Relationship](images/master_detail_relationship_manual_column.png)
