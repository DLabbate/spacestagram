<img src="./src/assets/logo.png" width=150 align="left"/>

# Spacestagram
Webpage that can pull images from NASA's Astronomy API, and allow the user to “like” and “unlike” their favourite images. Try it out here 👉 [https://dlabbate-spacestagram.netlify.app/]

<br/>

## Tech Stack
### Frontend
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Testing
<img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/> <img alt="Testing-Library" src="https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white"/>

## Overview
This project pulls data from <a href="https://api.nasa.gov/#apod">Astronomy Picture of the Day (APOD)</a> 

<img src="./src/assets/documentation/overview.gif" />

## Responsive Masonry Layout
The fetched data is displayed in a responsive "masonry" layout.

<img src="./src/assets/documentation/responsive.gif" />

## Google Lighthouse Scores
<img src="./src/assets/documentation/lighthouse.PNG" />

## Extras

### Select a Date Range
<img src="./src/assets/documentation/date.gif" />

### Likes Saved to Local Storage
<img src="./src/assets/documentation/local-storage.gif" />

### Lazy Loading Images
<img src="./src/assets/documentation/lazy-loading.gif" />

### Heartbeat Animation (On Hover)
<img src="./src/assets/documentation/heartbeat.gif" />

### URL Link
<img src="./src/assets/documentation/url.gif" />

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
