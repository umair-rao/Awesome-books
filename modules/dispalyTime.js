import { DateTime } from '../node_modules/luxon/src/luxon.js';

const displayTime = () => {
  const timeHolder = document.querySelector('.time');
  timeHolder.textContent = DateTime.now()
    .setZone('system').toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default displayTime;