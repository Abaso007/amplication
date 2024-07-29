import { InputType } from "@nestjs/graphql";
import { BlockTypeWhereInput } from "../../block/dto";

@InputType({
  isAbstract: true,
})
export class PrivatePluginWhereInput extends BlockTypeWhereInput {}
