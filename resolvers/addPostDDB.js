import { util } from "@aws-appsync/utils";
export function request(ctx) {
  return {
    operation: "PutItem",
    // payload: { field: ctx.info.fieldName },
    key: {
      id: {
        S: ctx.arguments.input.id,
      },
    },
    attributeValues: {
      title: {
        S: ctx.arguments.input.title,
      },
    },
  };
}

export function response(ctx) {
  return ctx.result;
}
