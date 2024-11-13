const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monhtly = document.querySelector("#monthly");

const work = document.querySelector(".work");
const play = document.querySelector(".play");
const study = document.querySelector(".study");
const exercise = document.querySelector(".exercise");
const social = document.querySelector(".social");
const selfcare = document.querySelector(".selfcare");

function displayData(timeFrame) {
  activities.forEach((activity) => {
    let targetContainer;
    switch (activity.title) {
      case "Work":
        targetContainer = work;
        break;
      case "Play":
        targetContainer = play;
        break;
      case "Study":
        targetContainer = study;
        break;
      case "Exercise":
        targetContainer = exercise;
        break;
      case "Social":
        targetContainer = social;
        break;
      case "Self Care":
        targetContainer = selfcare;
        break;
    }

    targetContainer.textContent = "";

    const title = document.createElement("p");
    const dots = document.createElement("img");
    const titleDots = document.createElement("div");
    titleDots.classList.add("title-dots");
    dots.src = "./images/icon-ellipsis.svg";
    dots.classList.add("dots-image");
    title.textContent = activity.title;
    title.classList.add("activity-title");
    titleDots.append(title, dots);
    targetContainer.append(titleDots);

    const currentHours = document.createElement("p");
    currentHours.textContent = `${activity[timeFrame].current}hrs`;
    currentHours.classList.add("current-hours");
    targetContainer.appendChild(currentHours);

    // console.log(activity.title)

    let previousLabel;
    switch (timeFrame) {
      case "daily":
        previousLabel = "Last Day";
        break;
      case "weekly":
        previousLabel = "Last Week";
        break;
      case "monthly":
        previousLabel = "Last Month";
        break;
    }

    const previousHours = document.createElement("p");
    previousHours.textContent = `${previousLabel} ${activity[timeFrame].previous}hrs`;
    previousHours.classList.add("previous-hours");
    targetContainer.appendChild(previousHours);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("hours-container");
    hoursContainer.append(previousHours, currentHours);
    targetContainer.append(hoursContainer);

    // const hoursContainer = document.createElement("div");
    // hoursContainer.classList.add("hours-container");
    // hoursContainer.append("previous-hours, current-hours");
  });
}

daily.addEventListener("click", () => displayData("daily"));
weekly.addEventListener("click", () => displayData("weekly"));
monthly.addEventListener("click", () => displayData("monthly"));

displayData("weekly");
