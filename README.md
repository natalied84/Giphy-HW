# Giphy-API-HW

###Introduction

This homework's intent was to help build skills in using AJAX and APIs as well as to continue building up my ability to use JS and JQuery in general. The aim was to make a page that can call gifs of various categories using on screen buttons as well as giving the ability to add new buttons. I chose to make all of the prerendered buttons be for reaction gifs however the user can technically search for anything they want, for example, bananas. The AJAX call pulls 10 gifs at a time in a paused state, the user has the ability to unpause gifs simply by clicking on them. Subsequent pressings of the same buttons pulls 10 new gifs instead of the same 10 as before.


###Technologies

Bootstrap 4, JQuery, Giphy's API

####Setup

Simply load the page then click buttons/search for gifs.

#####Minimum Requirements

Must have an internet connection.

###Features

-Prerendered buttons listing various reactions
  - When pressed they load 10 gifs related to the category they are    labeled for

-The ability to continue pulling more gifs 10 at a time from within  the same category

-The ability to search for more categories for which buttons are    automatically created

-Responsive to various screen sizes

-The ability to do barrel rolls

####Features I'd like to add

-Use of local storage so the user can favorite gifs

-Adding a location for said favorite gifs

-One touch gif downloading

-Adding the ability to choose ratings for gifs, G, PG, PG-13, or R if you're so inclined


####Assignment Instructions Below
# GifTastic

### Overview

In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.


### Bonus Goals

1. Ensure your app is fully mobile responsive.
    DONE!
2. Allow users to request additional gifs to be added to the page.
   * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.
    DONE!

3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.
    Added title which is good enough

4. Include a 1-click download button for each gif, this should work across device types.
    Plan on doing

5. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio
    Nah
6. Allow users to add their favorite gifs to a `favorites` section.
   * This should persist even when they select or add a new topic.
   * If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).
    Maybe
### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
