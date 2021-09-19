<img src="./src/assets/logo.png" width=150 align="left"/>

# Spacestagram
Webpage that can pull images from NASA's Astronomy API, and allow the user to “like” and “unlike” their favourite images

<br/>

## Tech Stack
### Frontend
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Testing
<img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/> <img alt="Testing-Library" src="https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white"/>

## Overview
This project pulls data from <a href="https://api.nasa.gov/#apod">Astronomy Picture of the Day (APOD)</a> and displays the data in a "masonry" layout.

## Google Lighthouse Scores

## Extras

### Select a Date Range

### Likes Saved to Local Storage

### Lazy Loading Images

### Heartbeat Animation (on hover)

### URL Link

### Testing
I implemented some unit tests using `jest` and `react-testing-library`. An example outlined below:

```javascript
const date = new Date(2021, 3, 17);

test("date is formatted in YYYY-MM-DD", () => {
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe("2021-04-17");
});
```

Note that the testing in this project is not comprehensive, but a work in progress that I would like to continue improving!

## References
* <a href="https://www.flaticon.com/">Icons made by Flaticon</a>
