# InstaGeek LHL Midterm Project

## InstaGeek is the instagram for geeks intended for posting and displaying educational resources. It allows users to post and save educational resources posted by other users. The purpose of the app is to be able to easily access resources in a way that is very visually attractive and social media friendly. 
### The main page of the app displays resources posted by all users. 
### When a user posts a new url into the new article form. Meta tags that have OG properties are grabbed. Such as title, image, description and an article card is rendered displaying these automatically
### Users can comment, like, and rate resources. 
### Users can also  view comments by other users on each article and an average rating on posted articles
### Resources liked by or posted by the user are displayed by clicking "My Board" on the nav bar
### Users can also make search queries to receive articles with matching titles.
### Become an InstaGeek now! 


## Final Product
!["Main Page/Regiser Login Page"](https://github.com/josekhon/InstaGeek/blob/master/docs/loginpage.png?raw=true)
!["Resources page with all articles"](https://github.com/josekhon/InstaGeek/blob/master/docs/main-board.png?raw=true)
!["Add new resource"](https://github.com/josekhon/InstaGeek/blob/master/docs/add-new-article.png?raw=true)
!["Resource pop up with comments"](https://github.com/josekhon/InstaGeek/blob/master/docs/article-popup.png?raw=true)
!["Filter by subjects"](https://github.com/josekhon/InstaGeek/blob/master/docs/filter-by-subjects.png?raw=true)
!["Search results"](https://github.com/josekhon/InstaGeek/blob/master/docs/search-result.png?raw=true)
!["User Profile"](https://github.com/josekhon/InstaGeek/blob/master/docs/user-profile.png?raw=true)



## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
