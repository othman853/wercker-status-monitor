const shrinkRun =
  r => ({
    name: r.pipeline.name,
    result: r.result,
    status: r.status,
    progress: r.progress,
    user: { gravatar: r.user.avatar.gravatar }
  });

const getUser =
  r => ({
    gravatar: r.user.avatar.gravatar
  });

const pipelinesByCommit =
  (hash, wercker) =>
    [...wercker.filter(run => run.commitHash === hash).map(shrinkRun).reverse()];

const userByCommit =
  (hash, wercker) =>
    ({ gravatar: (wercker.filter(run => run.commitHash === hash)[0].user.avatar.gravatar) })

const commits =
  wercker => [...new Set(wercker.map(run => run.commitHash))];

const transform =
  (commits, wercker) =>
    commits.map(
      hash => ({
        commit: hash,
        user: userByCommit(hash, wercker),
        stages: pipelinesByCommit(hash, wercker)
      })
    );

module.exports =
  response => transform(commits(response), response);
