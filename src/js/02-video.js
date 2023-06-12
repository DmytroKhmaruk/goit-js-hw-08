import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);
console.log(throttle);

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}

function restoreCurrentTime() {
  const savedTime = localStorage.getItem(currentTimeKey);
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
}

player.ready().then(() => {
  restoreCurrentTime();
});