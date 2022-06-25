import * as github from "@actions/github";
import { getTokenFromInputs } from "./token";

export async function syncGithubTopics(topics: string[]): Promise<void> {
  const token = getTokenFromInputs();
  const octokit = github.getOctokit(token);
  const result = await octokit.request("PATCH /repos/:owner/:repo/topics", {
    topics: topics,
    ...github.context.repo,
  });
  if (result.status !== 200) {
    throw new Error(`Failed to update topics, got ${JSON.stringify(result)}`);
  }
}
