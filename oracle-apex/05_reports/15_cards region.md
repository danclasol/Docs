# Cards Region

A cards page features colorful blocks which resemble index cards laid out on a page.

A cards report region declaratively supports customizations of layout, and appearance, and the inclusion of icons, badges, media, and actions.

![Cards Region Example](images/cards_region_example.png)

## Creation

Create Page, and Select Cards as component.

Under the name for the cards page, select the data source. I'm going to select a local database table called Projects.

![Cards Region Create](images/cards_region_create.png)

Enter the page information

- Page Definition
- Data Source
- Navigation Preferences

Choose from a different cards layout

- Grid
- Float
- Horizontal (Row)

![Cards Region Layout](images/cards_region_layout.png)

Set the card attributes that will be display

- Title column
- Body column
- Icon initials column
- Back column

![Cards Region Attributes](images/cards_region_attributes.png)

## Attributes

### Card

- CSS Classes
- Primary Key

### Media

Advanced Formatting option allows to edit the format with:

- HTML Expressions
- CSS classes

![Cards Media Edition](images/cards_media_edition.png)

## Customize Cards

### Cards with image

We can create display an image on the card by setting the source as "BLOB Column" and selecting the Blob column with the image

![Cards Media Image](images/cards_media_image.png)

### Cards with links

Create an action under the cards regions

![Cards Link Action](images/cards_link_action.png)

Configure the new action

- Set Identification > Type: Full Card
- Create the Link
  - Type
  - Target
