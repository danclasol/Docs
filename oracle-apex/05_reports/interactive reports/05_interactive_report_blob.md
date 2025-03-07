# Display Blob as download link

You can include a download link in an Interactive report to download a Blob columm.

## Add numeric/integer column expression on the query

Add a new numeric/integer column expression to your query, typically the size of the image file. If length is 0, the `BLOB` is `NULL` and no image is displayed

## Set Display Type as Blob

Set the Display Type of the colum as "Download Blob"

![Blob Display Type](images/interactive_report_blob.png)

## Specify the Blob attributes

![Blob Attributes](images/interactive_report_blob_attributes.png)

## Testing download

![Blob Download](images/interactive_report_blob_download.png)

# Display Blob as Image

Change the Display Type as "Display Image"

![Blob as Image](images/interactive_report_blob_image.png)

You can customize the display attributes of these images using custom CSS.

- Set an STATIC ID for the `BLOB` column
  ![Blob as Image](images/interactive_report_blob_image_conf.png)

- Go to inline CSS attribute in page level and write the custom CSS
  ![alt text](images/interactive_report_blob_image_css.png)
