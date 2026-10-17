import { dailySchedule, festivals, type TimingSlot } from "./data";

export const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

export const fmt12 = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  const ap = h >= 12 ? "PM" : "AM";
  const hh = h % 12 || 12;
  return `${hh}:${String(m).padStart(2, "0")} ${ap}`;
};

/** Current time in the temple's timezone (IST), regardless of the visitor's location. */
export function templeNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return { h: get("hour"), m: get("minute"), s: get("second") };
}

export function scheduleState(minutes: number) {
  const current = dailySchedule.find((s) => minutes >= toMin(s.start) && minutes < toMin(s.end ?? s.start));
  const open = !!current && current.kind !== "closed";
  const nextAarti: TimingSlot =
    dailySchedule.find((s) => s.kind === "aarti" && toMin(s.start) > minutes) ?? dailySchedule[0];
  return { current, open, nextAarti };
}

export const upcomingFestivals = (from = new Date()) =>
  festivals.filter((f) => new Date(f.date + "T23:59:59+05:30") >= from);

export const fmtDate = (iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) =>
  new Date(iso + "T12:00:00+05:30").toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", ...opts });
