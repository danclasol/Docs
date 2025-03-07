# Faceted Search

The end user can set filters using facets on the left or upper side of the screen. A facet shows possible values together with the occurrence count within the result set.

When an end user changes a facet, the results, the dependent facet, and the occurrence counts refresh immediately.

![Faceted Search](images/faceted_search_example.png)

## Creation

Create a new page and select

![Faceted Search Create](images/faceted_search_create.png)

Enter the page information

- Page Definition
- Data Source
- Navigation Preferences

Select the facets you want to include in the report

Automatically, some Facet will be recommended to be selected based on the data of the table. You can refresh the column statistics to provide better recommendations.

![Faceted Search Select](images/faceted_search_select.png)

## Attributes

### Settings

- Batch Facet Changes
- Compact Numbers Threshold
- Show Current Facets
- Current Facets Selector
- Show Total Row Count: specify where to display the total row coun
- Total Row Count Label
- Show Charts
- Display Charts for Top N Values

## Customize Faceted Search

### Create a new Facet

New Facet can be created for our page

![Faceted Search Facet](images/faceted_search_facet.png)

Enter the settings attributes to customize the new facet

For example, this facet will filter Budget less than the input value

- Name
- Type
  - Checkbox Group
  - Input Field
  - Radio Group
  - Range
  - Search
  - Select List

![Faceted Search Facet Type](images/faceted_search_facet_type.png)
![Faceted Search Facet Settings](images/faceted_search_facet_settings.png)
![Faceted Search Facet Source](images/faceted_search_facet_source.png)

The result of the new facet

![Faceted Search Facet](images/faceted_search_facet_result.png)

### Enable Facet Filtering

We can enable filtering for a specific facet

![Faceted Search Enable Filtering](images/faceted_search_enable_filter.png)

### Create dependent Facets

We can associate facets so they depend on another facet

![Faceted Search Depend](images/faceted_search_facet_depend.png)
