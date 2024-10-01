import { Feedback } from "../feedback/Feedback";
import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  rating: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
