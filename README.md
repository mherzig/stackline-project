This is my submission for the Stackline assessment.

Given directions:

> To complete the assessment, you will take what is provided and create a simple product web page that uses React to produce the view and Redux to manage the data.  It should take approximately 2 hours to complete a typical solution, but you may take up to 24 hours.
>
> Resources to get started (attached via email):
>
> 1. A JSON file to be used as the data source to populate the web page
> 1. A wire mockup of what your final web page should look like
>
> We are looking for:
> 
> 1. A solution that resembles the provided mock up closely and implements AT LEAST ONE of either the graph or chart as seen in the mock up
> 1. A working solution that takes the provided JSON file as output from a stubbed-out API call
> 1. A solution that implements React and Redux best practices and patterns
> 1. Clean code
>
> Assets to be returned via email within the provided time frame:
>
> 1. A public repository to view the final code
> 1. A public URL to view the web page

I ended up spending more like 4 &ndash; 5 hours on it. Why?

- I probably spent too long trying to get accurate colors and sizes. If this was a "real" assignment, my assumption is I would be given a Sketch/Illustrator/Photoshop/etc. document _or_ a set of images and colors & dimensions so that would take much less time.
- I did both the chart and the table instead of just one. I've done React, I've done charts, I've done sortable tables, but this is the first time I've done the combo so I wanted to experiment with both panels. It's just too enjoyable to quit sometimes :)
- There was that extra details + review data, and it seemed like it was screaming for the ability to tab between the "Overview" and "Sales" views. Since it wasn't really part of the assessment I didn't bother to do much to that Overview info other than just throw it on the page.

When you first load the page there is a button to click. This is simulating whatever you would have clicked or navigated to in order to get that specific product data.

To see the final result, [view it in the browser here](https://mhslassessment.z5.web.core.windows.net/) or run it locally:

1. Clone this repo
1. `npm i` to install dependencies
1. `npm run build` to build the app
1. `npm run serve` to run the app locally

This has been tested on macOS; I'm _relatively_ sure it would run on Windows Command Line given the use of `cross-env` but should work in WSL regardless.