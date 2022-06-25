# Github Topic Syncer

Sync Github Topics from a Github Action.

Whatever topics are provided in the action will replace the topics in the Github repository
when the action is executed.

## Inputs

## `topics`

A space-separated list of topics to sync. Topics can only contain lower-case letters,
numbers, and hyphens.

### Examples

```yaml
with:
  topics: "web-development python"
```

## `token`

A Github personal access token with the `repo` scope. Typically this is stored
in repository secrets to provide to the action:

### Examples

```yaml
with:
  token: ${{ secrets.gh_token }}
```

## Examples

Here's an example workflow that syncs the topics of a Github repository whenever
the workflow is updated on the `main` branch.

```yaml
name: Sync Github Topics
on:
  push:
    paths:
      - ".github/workflows/sync-topics.yml"
    branches:
      - main

jobs:
  sync-topics:
    runs-on: ubuntu-latest
    name: Sync Github Topics
    steps:
      - uses: nickderobertis/github-topic-syncer@alpha
        with:
          topics: "topic1 topic-2"
          token: ${{ secrets.gh_token }}
```

## Development Status

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for versioning.
Any time the major version changes, there may be breaking changes. If it is working well for you, consider
pegging to the current major version, e.g. `github-topic-syncer@v1`, to avoid breaking changes. Alternatively,
you can always point to the most recent stable release with the `github-topic-syncer@latest`.

## Developing

Clone the repo and then run `npm install` to set up the pre-commit hooks.

## Author

Created by Nick DeRobertis. MIT License.
