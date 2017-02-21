
const BuildTemplate = function(build) {

  const stageToTemplate = function(stages) {
    const templateString = stage =>
    `<section class="build-stage build-stage-${stage.result}">
      <h3 class="build-stage-result">${stage.result}</h3>
      <p>${stage.name}</p>
    </section>`;
    return stages.map(templateString).join('');
  }

  const templateString =
  `<section class="build-info" id="${build.commit}">
    <section class="build-commit-details">
      <img src="https://www.gravatar.com/avatar/${build.user.gravatar}" alt="">
      <p class="build-commit-hash">${build.commit}</p>
    </section>
    <section class="build-stages">
      ${stageToTemplate(build.stages)}
    </section>
  </section>
  `;

  return templateString;

};
