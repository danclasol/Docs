# APEX Engine

The APEX engine dynamically renders and processes pages based on the data stored in database tables.

To view a rendered version of your application, you request it from the APEX engine.

The APEX engine can either:

- run pages individually
- run an entire application

# Page Processsing and Page Rendering

When you run an APEX application, the APEX engine relies on two processes:

## _show page (page rendering)_:

The page rendering process does the following:

- assembles attributes, regions, items, and buttons configured in the page
- displays all this content in the form of a viewable HTML page
- when you request a page using a URL, the engine is running Show Page

## _accept page (page processing)_:

- when you submit a page, the engine is running _Accept Page_ or performing _Page Processing_
- during which it submits all these items in the session cache
- and then performs any computations, validations, processes or branching defined in the page
- e.g.: forms page processing, computations, validations, processes, and branching

# Processes, Computations and Validations

You can control how your pages and page components display content with:

- computations
- processes
- validations
