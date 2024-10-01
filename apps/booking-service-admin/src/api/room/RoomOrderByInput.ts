import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  available?: SortOrder;
  createdAt?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
