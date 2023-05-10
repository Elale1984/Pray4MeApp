export interface PrayerRequestDTO {
  prayerRequestId: number;
  category: string;
  text: string;
  createdAt: Date;
  username: string;
  isAnswered: boolean;
  isSelected: boolean;
}
