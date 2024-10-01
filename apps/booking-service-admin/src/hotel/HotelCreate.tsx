import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { RoomTitle } from "../room/RoomTitle";

export const HotelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput source="feedbacks" reference="Feedback">
          <SelectArrayInput
            optionText={FeedbackTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Rating" source="rating" />
        <ReferenceArrayInput source="rooms" reference="Room">
          <SelectArrayInput
            optionText={RoomTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
