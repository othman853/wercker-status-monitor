const shrinkRun =
  r => ({
    name: r.pipeline.name,
    result: r.result,
    status: r.status,
    progress: r.progress
  });

const pipelinesByCommit =
  (hash, wercker) =>
    wercker.filter(run => run.commitHash === hash).map(shrinkRun);

const commits =
  wercker => wercker.map(run => run.commitHash);

const transform =
  (commits, wercker) =>
    commits.map(
      hash => ({ commit: hash, stages: pipelinesByCommit(hash, wercker) })
    );

module.exports =
  response => transform(commits(response), response);
