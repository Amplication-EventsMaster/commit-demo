/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { HotelWhereUniqueInput } from "../../hotel/base/HotelWhereUniqueInput";

@InputType()
class FeedbackCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => HotelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereUniqueInput)
  @IsOptional()
  @Field(() => HotelWhereUniqueInput, {
    nullable: true,
  })
  hotel?: HotelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;
}

export { FeedbackCreateInput as FeedbackCreateInput };
