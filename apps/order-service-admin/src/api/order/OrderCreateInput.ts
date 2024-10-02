import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  orderNumber?: string | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
};
