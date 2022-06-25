import * as core from "@actions/core";

async function run(): Promise<void> {
  try {
    const topicsStr = core.getInput("topics");
    console.log(`Hello world with topics: ${topicsStr}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(JSON.stringify(error));
    }
  }
}

run();
