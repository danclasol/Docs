# Dynamic Content Region

Dynamic content region is based on PL/SQL that enables you to refresh the region dynamically.

The dynamic content region has an attribute called PL/SQL function body returning a CLOB. It displays any HTML value you return using this CLOB.

It is the developer's responsibility to ensure that the generated HTML is accessible and secure. Untrusted content should be escaped appropriately to avoid cross-site scripting.

This is similar to the PL/SQL dynamic content region we had earlier with a few differences:

- returns a HTML value as a CLOB instead of a HTTP package
- supports lazy loading
- region is refreshable
- support PL/SQL and Javascript (MLE)

## Example

Create a new Region and on the property editor select the Type as "Dynamic"

![Dynamic Content Region](images/dynamic_content_region.png)

Automatically it will show an error that means that you have to provide a PL/SQL function body returning a CLOB.

![Dynamic Content Region Error](images/dynamic_content_region_error.png)

Open the Code Editor and enter the PL/SQL function body

![Dynamic Content Region PLSQL Editor](images/dynamic_content_region_editor.png)

Now, if we run the application every time we click on the "Refresh" button the region will be updated
