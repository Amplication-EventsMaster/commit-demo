import { FeedbackUpdateManyWithoutHotelsInput } from "./FeedbackUpdateManyWithoutHotelsInput";
import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  description?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutHotelsInput;
  name?: string | null;
  rating?: number | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
