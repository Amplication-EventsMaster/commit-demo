import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { ReservationUpdateManyWithoutCustomersInput } from "./ReservationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationUpdateManyWithoutCustomersInput;
};
