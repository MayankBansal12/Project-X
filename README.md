<h1 align="center"> Cine-X (Project-X) </h1>
<br />
Cine-X is a simple Next.js web app displaying details about your favourite movies and shows. Using supabase for authentication and TMDB API for fetching details about movies and tv shows.

## Features

- **Authentication**: You will have to Login in to the site to see the content. Used supabase auth for authenticating users.

- **Design**: Used tailwind css for the design on the landing page and other components

- **Banner**: Random banner images of the upcoming movies on the landing page.

- **Catalogue**: Browse through the catalogue of top rated movies and tv shows. Used TMDB API for fetching data related to that.

## Installation

For setting up the project locally you will need to set up the client side and TMDB API and supabase for handling authentication.

1. Clone the repository: `git clone [repository URL]`
2. Install dependencies: `npm i`
3. Start the server: `npm run dev` (port 3000)

### Setting the TMDB API
1. Obtain a TMDB API key and token:
    - Sign up for an account on the TMDB website and fill out the required form.
    - Generate an API key and token in the account settings.
    - Copy the API key and token.

2. Configure the TMDB API key and token in the .env file:
   - Create a `.env` file in the root directory of the project.
   - Add the following lines to the `.env` file:

  ```
  NEXT_API_KEY=your_key_here
  NEXT_API_TOKEN=your_token_here
  ```

### Setting up Supabase 
1. For Obtaining the Project url and key:
    - Sign up for an account on the website
    - Make a new project and in the setting for authentication enable email auth and disable verify email option.
    - Copy the public anon key and project url.

2. Configure the details in the .env.local file:
   - Create a `.env.local` file in the root directory of the project.
   - Add the following lines to the `.env.local` file:

  ```
  NEXT_PUBLIC_SUPABASE_URL=your_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
  ```


## Getting Started

1. Set up the client and server as described in the Installation section.
2. You will have a landing page at the start. Login to see the content inside.
3. On the /auth/login route you can log in using the dummy details available.
4. After login you can browse through the movies and TV shows section.

## Tech Stack

- **Frontend**: Next.js
- **Authentication**: Supabase
- **Data Fetching**: React-Query
- **Movies info**: TMDB API

## Demo
- You can visit the site [here](https://project-x-five-eta.vercel.app/)
- Screenshots for the site are available below: 

![LandingPage1](https://res.cloudinary.com/dwuyp1nss/image/upload/v1696865096/Website%20Demo/Landing_tpmawj.png)
![Landing2](https://res.cloudinary.com/dwuyp1nss/image/upload/v1696865098/Website%20Demo/Landing2_zw2imx.png)
![SignIn](https://res.cloudinary.com/dwuyp1nss/image/upload/v1696865419/Website%20Demo/Login_mjhorl.png)
![Shows](https://res.cloudinary.com/dwuyp1nss/image/upload/v1696865421/Website%20Demo/Shows_sza0su.png)


## Contact
If you have any questions or need support, feel free to contact at mayankbansal125@gmail.com
