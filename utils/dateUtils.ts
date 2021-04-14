import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';

export const formatJp = (date: Date, formatStr: string) =>
  format(date, formatStr, { locale: ja });

export const formatYMD = (date: Date) => format(date, 'yyyy.MM.dd');
