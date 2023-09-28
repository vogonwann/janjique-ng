interface WeekDay {
  date: Date,
  userId: number,
  status: DayStatus
}

enum DayStatus {
  Present,
  Missing,
  CalledIn,
  Current,
  Future
}

export const sampleWeekDays: WeekDay[] = [
  {
    date: new Date("2023-09-25"),
    userId: 1,
    status: DayStatus.CalledIn
  },
  {
    date: new Date("2023-09-26"),
    userId: 1,
    status: DayStatus.CalledIn
  },
  {
    date: new Date("2023-09-27"),
    userId: 1,
    status: DayStatus.CalledIn
  },
  {
    date: new Date("2023-09-28"),
    userId: 1,
    status: DayStatus.CalledIn
  },
  {
    date: new Date("2023-09-29"),
    userId: 1,
    status: DayStatus.CalledIn
  }
]
