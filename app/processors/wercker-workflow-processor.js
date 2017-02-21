const pipelines =
  items =>
  items
    .filter(item => item.status !== 'notstarted')
    .map(item => ({
      result: item.result,
      status: item.status,
      progress: item.progress,
      name: item.data.targetName
    }));


const cleanStuff =
  workflow => ({
    commitMessage: workflow.data.message,
    commitHash: workflow.data.commitHash,
    pipelines: pipelines(workflow.items),
    user: workflow.user
  });

module.exports = workflows => workflows.map(cleanStuff);
