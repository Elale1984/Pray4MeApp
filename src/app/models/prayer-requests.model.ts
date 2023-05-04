export interface PrayerRequests {
  prayerRequestId: number,
  userId: number,
  text: string,
  createdAt: Date,
  isAnswered: boolean
}