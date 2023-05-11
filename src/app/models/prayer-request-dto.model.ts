export interface PrayerRequestDTO {
  prayerRequestId: number;
  category: string;
  text: string;
  createdAt: Date;
  userId: number;
  username: string;
  isAnswered: boolean;
  isSelected: boolean;
}
