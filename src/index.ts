import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    console.log(`Hello world!`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(JSON.stringify(error));
    }
  }
}

run();
