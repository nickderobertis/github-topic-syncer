import * as core from "@actions/core";

const tokenInput = "token";

export function getTokenFromInputs(): string {
  const token = core.getInput(tokenInput);
  return token;
}
