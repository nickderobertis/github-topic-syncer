import * as core from "@actions/core";

const topicsInput = "topics";

function parseTopicsStr(str: string): string[] {
  return str.split(" ").map((s) => s.trim());
}

export function getTopicsFromInput(): string[] {
  const topicsStr = core.getInput(topicsInput);
  return parseTopicsStr(topicsStr);
}
