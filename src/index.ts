import * as core from "@actions/core";
import { getTopicsFromInput } from "./topics";

async function run(): Promise<void> {
  try {
    const topics = getTopicsFromInput();
    console.log(`Hello world with topics: ${topics}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(JSON.stringify(error));
    }
  }
}

run();
