const Home = function(doc) {

  const buildInfoSection =
    doc.getElementById('builds');

  const commitInfo =
    hash => { const p = doc.createElement('p'); p.innerHTML = 'Commit: ' + hash; return p; };

  const appendCommit =
    commit => buildInfoSection.appendChild(commitInfo(commit));

  const appendBuild =
    build => {
      const buildElement = doc.createElement('div');
      buildElement.innerHTML = BuildTemplate(build);
      buildInfoSection.appendChild(buildElement);
      console.log(buildInfoSection);
    };

  return { appendCommit, appendBuild };
};

const Events = function(doc) {
  const setClickById =
    (id, handler) => doc.getElementById(id).addEventListener('click', handler);

  return { setClickById };
};

const Dom = doc => Object.assign(Home(doc), Events(doc));
