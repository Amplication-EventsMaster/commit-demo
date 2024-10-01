import { Feedback } from "../feedback/Feedback";
import { Reservation } from "../reservation/Reservation";

export type Customer = {
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
