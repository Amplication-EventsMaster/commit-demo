/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FeedbackUpdateManyWithoutCustomersInput {
  @Field(() => [FeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackWhereUniqueInput],
  })
  connect?: Array<FeedbackWhereUniqueInput>;

  @Field(() => [FeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackWhereUniqueInput],
  })
  disconnect?: Array<FeedbackWhereUniqueInput>;

  @Field(() => [FeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackWhereUniqueInput],
  })
  set?: Array<FeedbackWhereUniqueInput>;
}

export { FeedbackUpdateManyWithoutCustomersInput as FeedbackUpdateManyWithoutCustomersInput };
