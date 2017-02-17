require('value-box/path')(__dirname, ['/stubs']);

const { wercker } = require('value-box');

const shrinkRun =
  r => ({ name: r.pipeline.name, result: r.result, status: r.status, progress: r.progress });

const pipelinesByCommit =
  hash => wercker.filter(run => run.commitHash === hash).map(shrinkRun);

const hashes =
  wercker.map(run => run.commitHash);

const singleCommitPipelines =
  hashes.map(hash => ({ commit: hash, stages: pipelinesByCommit(hash) }));

console.log(JSON.stringify(singleCommitPipelines));
