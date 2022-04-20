
# Musiku - Spotify For Music 

Final project submission for Generasi Gigih

## Features

- Login using spotify account, Logout, Spotify user profile
- Search tracks
- List down searched tracks, and make them selectable
- Create playlist
- Infinite  scrolling for searching tracks 
- Responsive
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL`: domain to access the app. add this url to spotify developer account redirect uri too. in https://developer.spotify.com/dashboard/.

`REACT_APP_SPOTIFY_CLIENT_ID`: client id on spotify developer account

`REACT_APP_SPOTIFY_CLIENT_SECRET`: client secret on spotify developer account

``
## Run Locally

Clone the project

```bash
  git clone https://github.com/emilizapanee/musiku-panee.git
```

Go to the project directory

```bash
  cd musiku-panee
```

Install dependencies

```bash
  yarn install 
```

Start the server

```bash
  yarn start
```