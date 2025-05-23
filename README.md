# Projekt React

React application for memes. App is having three routes: `/hot`, `/regular`, and `/add`. You are able to view, vote, star memes add your own.

## Project Structure

```
projekt_react
├── public
│   └── index.html              # Main HTML file
├── src
│   ├── components
│   │   ├── AddMemeForm.jsx     # Form to add a new meme
│   │   ├── MemeList.jsx        # Component to display a list of memes
│   │   ├── MemeList.css        # Styles for MemeList
│   │   ├── Meme.jsx            # Component to display an individual meme
│   │   ├── Meme.css            # Styles for Meme
│   │   └── Navigation.jsx      # Navigation bar
│   ├── data
│   │   └── memesData.js        # Initial memes data
│   ├── routes
│   │   └── MemesList.jsx       # Route for hot/regular memes (uses props)
│   ├── store
│   │   ├── memesSlice.js       # Redux slice for memes
│   │   └── store.js            # Redux store setup
│   ├── styles
│   │   └── App.css             # Application styles
│   ├── App.jsx                 # Main application component with routing
│   ├── index.js                # Entry point of the application
│   └── components
│       └── ErrorPage.jsx       # 404 Error page
├── package.json                # npm configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mariuszlis/projekt_react
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
