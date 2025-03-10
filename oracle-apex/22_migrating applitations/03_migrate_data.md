# Migrate Data

## Download Data from Database Objects Browser

Navigate to SQL Workshop > Object Browser

Go to the Database Object you want to export and click on Data Tab

![Download Data](images/data_download.png)

Click on Download button

## Unload Data from Data Workshop

Navigate to SQL Workshop > Utilities > Data Workshop

![Unload Data](images/unload_data.png)

Select the format to use for data unload

- Text Format
- XML Format

### Unload to Text

Select the Schema, Table and columns you want to unload.

![Unload Data Columns](images/upload_data_columns.png)

Select the options

![Unload Data Options](images/unload_data_options.png)

Click on Unload Data and the txt file will be downloaded

## Upload Data

Navigate to SQL Workshop > Utilities > Data Workshop

![Load Data](images/load_data.png)

Load the file with the script

![Load Data File](images/load_data_file.png)

Enter the following settings

- Load to:
  - New Table
  - Existing Table
- Table Owner / Table Name
- Primary Keys
- Column Delimiter

![Load Data Settings](images/load_data_settings.png)

Click on Load Data
