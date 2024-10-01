import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type RoomWhereInput = {
  available?: BooleanNullableFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  reservations?: ReservationListRelationFilter;
  typeField?: "Option1";
};
