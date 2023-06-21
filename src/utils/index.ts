import { DateTime, Duration } from "luxon";

export const formatReleaseDate = (dateToFormat: string) =>
  DateTime.fromISO(dateToFormat).toFormat("dd/MM/yyyy");

export const formatLength = (millisTimeToFormat: number) =>
  Duration.fromMillis(millisTimeToFormat)
    .shiftToAll()
    .toISOTime({ suppressMilliseconds: true });
