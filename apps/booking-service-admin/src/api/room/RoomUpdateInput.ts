import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  available?: boolean | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  typeField?: "Option1" | null;
};
