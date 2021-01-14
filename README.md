# Storytopia README
[Link to the live page](https://storytopia.herokuapp.com/#/)

Storytopia is a website that allows authors to publish their own stories. And of course, for readers to explore creative minds that haven't be discovered by publishers.


![main page](https://github.com/atlasneiko/Storytopia/blob/master/app/assets/images/mainpage.png)

Storytopia suppots the following features
* posting/editing stories
* login and sign up accounts
* Using demo account 
* clap up to 50 times for each stories
* post and edit comments under each story
* story feeds with 5 random stories, 6 most recent stories
* infinite scroll to render all of the stories

## Features
### User Profile
![user profile](https://github.com/atlasneiko/Storytopia/blob/master/app/assets/images/user_profile.png)


Users will be able to track how many stories each authors have published. Before the commit to more reading, they will see the estimated read time based on the length of the story .
### Stories
When displayed on the index, each story will also render an estimated read time.
Once clicked, it will render the show page for the story.


### Comments
![comment](https://github.com/atlasneiko/Storytopia/blob/master/app/assets/images/comment.png)


Under each story, readers will be able to post their comment and edit it. Soon, Storytopia will also support commenting comments. 

### Infinite Scroll
![infinite scroll](https://github.com/atlasneiko/Storytopia/blob/master/app/assets/images/infinite%20scroll.png)


This feature allows the page to render more content based on how far the user scrolls. It's basically a hook observing an element on the webpage to see if it's on the viewport. If so, the story index will fetch more stories. And in the case of scrolling to the end of all stories, it will render a pitbottom message.
