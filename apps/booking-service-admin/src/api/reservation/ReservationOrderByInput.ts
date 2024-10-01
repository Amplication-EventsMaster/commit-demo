import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dateFrom?: SortOrder;
  dateTo?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
};
