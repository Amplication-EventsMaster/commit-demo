import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};
