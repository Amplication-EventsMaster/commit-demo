import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FeedbackWhereInput = {
  comments?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
};
