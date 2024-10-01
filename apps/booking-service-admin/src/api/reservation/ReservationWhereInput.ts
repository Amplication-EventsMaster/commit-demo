import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dateFrom?: DateTimeNullableFilter;
  dateTo?: DateTimeNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
};
