import { Hotel } from "../hotel/Hotel";
import { Reservation } from "../reservation/Reservation";

export type Room = {
  available: boolean | null;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  name: string | null;
  price: number | null;
  reservations?: Array<Reservation>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
