const currentDate = document.getElementById("date");
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
};

function dateTick(){
    currentDate.textContent = new Date().toLocaleString("ru", options);
}

dateTick();
setInterval(dateTick, 7000);
