export interface PrayerRequestDTO {
  category: string;
  text: string;
  createdAt: Date;
  username: string;
  isAnswered: boolean;
  isSelected: boolean;
}
