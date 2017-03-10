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
    commit: { message: workflow.data.message, hash: workflow.data.commitHash },
    pipelines: pipelines(workflow.items),
    user: workflow.user
  });

module.exports = workflows => workflows.map(cleanStuff);
