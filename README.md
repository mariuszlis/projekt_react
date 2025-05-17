# Projekt React

React application for memes. App is having three routes: `/hot`, `/regular`, and `/add`. You are able to view, upvote/downvote, star memes, and add your own.

## Project Structure

```
projekt_react
├── public
│   └── index.html              # Main HTML file
├── src
│   ├── components
│   │   ├── MemeList.jsx        # Component to display a list of memes
│   │   ├── MemeList.css        # Styles for MemeList
│   │   ├── Meme.jsx            # Component to display an individual meme
│   │   └── Meme.css            # Styles for Meme
│   ├── data
│   │   └── memesData.js        # Initial memes data
│   ├── routes
│   │   ├── Hot.jsx             # Route for hot memes
│   │   └── Regular.jsx         # Route for regular memes
│   ├── styles
│   │   └── App.css             # Application styles
│   ├── App.jsx                 # Main application component with routing
│   └── index.js                # Entry point of the application
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mariuszlis/memes_react
   ```
2. Navigate to the project directory:
   ```
   cd projekt_react
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Run

To start use:

```
npm start
```
