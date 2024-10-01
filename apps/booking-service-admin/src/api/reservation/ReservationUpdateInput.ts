import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dateFrom?: Date | null;
  dateTo?: Date | null;
  room?: RoomWhereUniqueInput | null;
};
