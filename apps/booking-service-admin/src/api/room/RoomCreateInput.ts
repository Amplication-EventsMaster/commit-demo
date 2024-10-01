import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  available?: boolean | null;
  hotel?: HotelWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  typeField?: "Option1" | null;
};
