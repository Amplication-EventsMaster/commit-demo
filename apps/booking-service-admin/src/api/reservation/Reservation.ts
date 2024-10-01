import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Reservation = {
  createdAt: Date;
  customer?: Customer | null;
  dateFrom: Date | null;
  dateTo: Date | null;
  id: string;
  room?: Room | null;
  updatedAt: Date;
};
