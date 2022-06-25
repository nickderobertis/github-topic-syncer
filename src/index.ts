import * as core from "@actions/core";
import { syncGithubTopics } from "./sync-github";
import { getTopicsFromInput } from "./topics";

async function run(): Promise<void> {
  try {
    const topics = getTopicsFromInput();
    await syncGithubTopics(topics);
    console.log(`Successfully synced: ${topics}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
      throw error;
    } else {
      core.setFailed(JSON.stringify(error));
    }
  }
}

run();
