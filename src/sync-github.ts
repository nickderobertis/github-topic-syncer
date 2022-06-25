import * as github from "@actions/github";

export async function syncGithubTopics(topics: string[]): Promise<void> {
  const token = getTokenFromEnv();
  const octokit = github.getOctokit(token);
  const repoInfo = getRepoInfoFromEnv();
  const result = await octokit.request("PATCH /repos/:owner/:repo/topics", {
    topics: topics,
    ...repoInfo,
  });
  if (result.status !== 200) {
    throw new Error(`Failed to update topics, got ${JSON.stringify(result)}`);
  }
}

function getTokenFromEnv(): string {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not set");
  }
  return token;
}

type RepoInfo = {
  owner: string;
  repo: string;
};

function getRepoInfoFromEnv(): RepoInfo {
  const repoWithOwner = process.env.GITHUB_REPOSITORY;
  if (!repoWithOwner) {
    throw new Error("GITHUB_REPOSITORY is not set");
  }
  const repoParts = repoWithOwner.split("/");
  if (repoParts.length !== 2) {
    throw new Error(
      `GITHUB_REPOSITORY is invalid, got ${process.env.GITHUB_REPOSITORY}`
    );
  }
  return {
    owner: repoParts[0],
    repo: repoParts[1],
  };
}
