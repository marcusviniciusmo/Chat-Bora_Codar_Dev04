import { format } from "date-fns";

export const GetLocaleTime = () => {
  const time = new Date();
  
  return format(time, 'HH:mm');
};

export const GetLocaleDate = () => {
  const date = new Date();

  return format(date, 'EEEE');
};