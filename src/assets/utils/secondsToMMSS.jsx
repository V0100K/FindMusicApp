// импорт функции для отображения времени в минутах и секундах

import moment from "moment";

export default (seconds) => moment.utc(seconds * 1000).format("mm:ss");