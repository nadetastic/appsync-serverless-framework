export function request(ctx) {
  return {
    operation: "Scan",
    // payload: { field: ctx.info.fieldName },
  };
}

export function response(ctx) {
  return ctx.result;
}
