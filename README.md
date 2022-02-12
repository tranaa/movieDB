## About Project

Project uses TheMovieDB API, to discover a list of movies and users can click on movies in the list to view further information about the movie.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Please have the following installed:

* node version 12 or higher. Check with:
  ```sh
  node -v
  ```

* npm
  ```sh
  npm install npm@latest -g
  ```

* expo-cli
  ```sh
  npm i -g expo-cli
  ```

### Installation

1. Clone the repo (if you have code already skip this step)
   ```sh
   git clone https://github.com/tranaa/movieDB.git
   ```
2. Navigate to root directory of project install NPM packages
   ```sh
   npm install
   ```
3. Create env refer to firebase/env steps below
4. Start expo project
   ```sh
   npm start
   ```
   or 
   ```sh
   expo start
   ```
5. Run application
   1. Once expo has started a console will open in your browser
   2. you can launch the project multiple ways
   3. easiest is web browser (notifications will not work)
   4. Steps for ios simulator https://docs.expo.dev/workflow/android-studio-emulator/
   5. Steps for android simulator https://docs.expo.dev/workflow/ios-simulator/
   6. Install expo app on mobile device and scan QR code

### Environment setup
1. Create an `.env` file at the root of the project directory
2. Paste the following with your the movie db api key
   ```API_KEY = [YOUR_API_KEY]
   ```