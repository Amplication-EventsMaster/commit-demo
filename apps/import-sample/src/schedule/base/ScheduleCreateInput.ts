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
import { AvailabilityCreateNestedManyWithoutSchedulesInput } from "./AvailabilityCreateNestedManyWithoutSchedulesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EventTypeCreateNestedManyWithoutSchedulesInput } from "./EventTypeCreateNestedManyWithoutSchedulesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ScheduleCreateInput {
  @ApiProperty({
    required: false,
    type: () => AvailabilityCreateNestedManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => AvailabilityCreateNestedManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => AvailabilityCreateNestedManyWithoutSchedulesInput, {
    nullable: true,
  })
  availability?: AvailabilityCreateNestedManyWithoutSchedulesInput;

  @ApiProperty({
    required: false,
    type: () => EventTypeCreateNestedManyWithoutSchedulesInput,
  })
  @ValidateNested()
  @Type(() => EventTypeCreateNestedManyWithoutSchedulesInput)
  @IsOptional()
  @Field(() => EventTypeCreateNestedManyWithoutSchedulesInput, {
    nullable: true,
  })
  eventType?: EventTypeCreateNestedManyWithoutSchedulesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeZone?: string | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}

export { ScheduleCreateInput as ScheduleCreateInput };
