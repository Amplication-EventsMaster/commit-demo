import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: StringNullableFilter;
};
