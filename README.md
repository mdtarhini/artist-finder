# Swapart

A fullstack application to to search records of musical artists and their releases from the [musicbrainz](https://musicbrainz.org/) libray

**application website: [link](https://swapart.vercel.app/)**.

## Tech Stack

- React
- apollo-client for data fetching with GraphQL and for state management.
- TailwindCSS for styling

## Data

The Data is fetched from a GraphQL api: https://graphbrainz.herokuapp.com

## Features

- Debounced Search suggestions
- Infinte scrolling
- Favorite artists and groups

## Pages and screenshots

**Home Page**

![Home page screenshot](/screenshots/home.png?raw=true)

**Artist information**

![Sheet maker screenshot](/screenshots/artist.png?raw=true)

**Album information**

![example sheet screenshot](/screenshots/album.png?raw=true)

## Local testing

To run the application locally, simply clone this repository and run `npm install`. Once the packages installation is done, run `npm start`.
