let timerId = 0;

// Load timers from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedTimers = JSON.parse(localStorage.getItem('timers')) || [];
    timerId = storedTimers.length ? storedTimers[storedTimers.length - 1].id : 0;
    storedTimers.forEach(timer => addTimerToDOM(timer));
});

function addNewTimer() {
    const timerName = prompt("Enter a name for the new timer:");
    if (timerName) {
        timerId++;
        const timer = {
            id: timerId,
            name: timerName,
            milliseconds: 0,
            isRunning: false
        };
        addTimerToDOM(timer);
        saveTimer(timer);
    }
}

function addTimerToDOM(timer) {
    const timerRow = document.createElement('tr');
    timerRow.id = `timer-${timer.id}`;
    timerRow.innerHTML = `
        <td id="timer-${timer.id}-name">${timer.name}</td>
        <td id="timer-${timer.id}-display">${formatTime(timer.milliseconds)}</td>
        <td><button onclick="startTimer(${timer.id})"><i class="fas fa-play"></i></button></td>
        <td><button onclick="stopTimer(${timer.id})"><i class="fas fa-pause"></i></button></td>
        <td><button onclick="resetTimer(${timer.id})"><i class="fas fa-redo"></i></button></td>
        <td><button onclick="renameTimer(${timer.id})"><i class="fas fa-edit"></i></button></td>
        <td><button onclick="deleteTimer(${timer.id})"><i class="fas fa-trash"></i></button></td>
    `;
    document.getElementById('timers').appendChild(timerRow);

    window[`timer${timer.id}`] = {
        ...timer,
        interval: null
    };
}

function startTimer(id) {
    stopAllTimers();
    const timer = window[`timer${id}`];
    if (!timer.isRunning) {
        timer.isRunning = true;
        const startTime = Date.now() - timer.milliseconds;
        timer.interval = setInterval(() => {
            timer.milliseconds = Date.now() - startTime;
            displayTime(id);
            updateTimerInStorage(timer);
        }, 10);
    }
}

function stopAllTimers() {
    for (let i = 1; i <= timerId; i++) {
        stopTimer(i);
    }
}

function stopTimer(id) {
    const timer = window[`timer${id}`];
    if (timer && timer.isRunning) {
        timer.isRunning = false;
        clearInterval(timer.interval);
        updateTimerInStorage(timer);
    }
}

function resetTimer(id) {
    stopTimer(id);
    const timer = window[`timer${id}`];
    if (timer) {
        timer.milliseconds = 0;
        displayTime(id);
        updateTimerInStorage(timer);
    }
}

function renameTimer(id) {
    const newName = prompt("Enter a new name for the timer:");
    if (newName) {
        document.getElementById(`timer-${id}-name`).textContent = newName;
        const timer = window[`timer${id}`];
        timer.name = newName;
        updateTimerInStorage(timer);
    }
}

function deleteTimer(id) {
    stopTimer(id);
    document.getElementById(`timer-${id}`).remove();
    removeTimerFromStorage(id);
}

function displayTime(id) {
    const timer = window[`timer${id}`];
    if (timer) {
        document.getElementById(`timer-${id}-display`).textContent = formatTime(timer.milliseconds);
    }
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const msecs = milliseconds % 1000;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${msecs.toString().padStart(3, '0')}`;
}

function saveTimer(timer) {
    const timers = JSON.parse(localStorage.getItem('timers')) || [];
    timers.push(timer);
    localStorage.setItem('timers', JSON.stringify(timers));
}

function updateTimerInStorage(updatedTimer) {
    const timers = JSON.parse(localStorage.getItem('timers')) || [];
    const index = timers.findIndex(timer => timer.id === updatedTimer.id);
    if (index !== -1) {
        timers[index] = { ...timers[index], ...updatedTimer };
        localStorage.setItem('timers', JSON.stringify(timers));
    }
}

function removeTimerFromStorage(id) {
    const timers = JSON.parse(localStorage.getItem('timers')) || [];
    const updatedTimers = timers.filter(timer => timer.id !== id);
    localStorage.setItem('timers', JSON.stringify(updatedTimers));
}

function clearAllTimers() {
    localStorage.removeItem('timers');
    document.getElementById('timers').innerHTML = '';
}
