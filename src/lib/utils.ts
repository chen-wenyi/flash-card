import { TimeLeft } from "@/typing";
import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateTimeLeft(unixTimestamp: number): TimeLeft {
    const now = dayjs(); // Current time
    const target = dayjs.unix(unixTimestamp);

    const diff = target.diff(now); // Difference in milliseconds

    // If the time has passed, return zeroed values
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, distance: 0 };
    }

    // Use day.js duration to get the time left in days, hours, minutes, and seconds
    const duration = dayjs.duration(diff);
    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
      distance: diff,
    };
  };