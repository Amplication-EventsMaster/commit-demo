import { FeedbackCreateNestedManyWithoutHotelsInput } from "./FeedbackCreateNestedManyWithoutHotelsInput";
import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  description?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutHotelsInput;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
