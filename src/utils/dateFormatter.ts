import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

const dateFormat = (date: string) => {
  if (!date) return null;
  return dayjs(date).format('DD/MM/YYYY, HH:mm:ss');
};
export default dateFormat;
