# Search Configuration

Search configurations contain information about a searchable data source.

They can be referenced from search regions to add declarative searches in your application.

Searches can be based on:

- local data source
- REST-enabled SQL service
- REST data source
- predefined Oracle Text
- Oracle APEX list

## Creating Application Searches

Declarative seach can be create for an application by creating:

- search configuration on a data source
- serach page that displays the search result

## Search Configuration

In Shared Component, in the Navigation and Search section select "Search Configurations"

![Search Configurations](images/search_configuration_access.png)

Here you can see the list of Search Configuration of your application.

Click button "Create"

![Search Configuration List](images/search_configuration_list.png)

Enter details for the new Search Configuration

- Name
- Search Type

  - Standard
  - Oracle Text
  - List

- Data Source
- Source Type

![Search Configuration Create](images/search_configuration_create.png)

Enter the column mapping, suggest as primary key, the title column, and the description column. You can even enter an icon source.

![Search Configuration Column Mapping](images/search_configuration_mapping.png)

## Create Search Page

Create a new page and select the component Search Page

![Search Page Create](images/search_page_create.png)

Select the Search Configurations to be used in this page

![alt text](images/search_page_configurations.png)

Click on "Create Page"
