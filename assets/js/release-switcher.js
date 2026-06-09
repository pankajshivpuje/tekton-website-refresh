if (typeof componentVersions === 'undefined') {
  const componentVersions = JSON.parse('[{"name": "CLI", "tags": [{"name": "release-v0.43.0", "displayName": "v0.43.0"}, {"name": "release-v0.42.0", "displayName": "v0.42.0"}, {"name": "release-v0.41.1", "displayName": "v0.41.1"}, {"name": "release-v0.40.0", "displayName": "v0.40.0"}, {"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/cli/tags"}, {"name": "Pipelines", "tags": [{"name": "release-v1.9.x", "displayName": "v1.9.x-LTS"}, {"name": "release-v1.6.x", "displayName": "v1.6.x-LTS"}, {"name": "release-v1.3.x", "displayName": "v1.3.x-LTS"}, {"name": "release-v1.0.x", "displayName": "v1.0.x-LTS"}, {"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/pipeline/tags"}, {"name": "Chains", "tags": [{"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/chains/tags"}, {"name": "Triggers", "tags": [{"name": "release-v0.34.x", "displayName": "v0.34.x-LTS"}, {"name": "release-v0.33.x", "displayName": "v0.33.x-LTS"}, {"name": "release-v0.32.x", "displayName": "v0.32.x-LTS"}, {"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/triggers/tags"}, {"name": "Results", "tags": [{"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/results/tags"}, {"name": "Operator", "tags": [{"name": "release-v0.79.x", "displayName": "v0.79.x-LTS"}, {"name": "release-v0.78.x", "displayName": "v0.78.x-LTS"}, {"name": "release-v0.77.x", "displayName": "v0.77.x-LTS"}, {"name": "release-v0.76.x", "displayName": "v0.76.x-LTS"}, {"name": "release-v0.75.x", "displayName": "v0.75.x-LTS"}, {"name": "release-v0.74.x", "displayName": "v0.74.x-LTS"}, {"name": "release-v0.73.x", "displayName": "v0.73.x-LTS"}, {"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/operator/tags"}, {"name": "Dashboard", "tags": [{"name": "release-v0.65.x-lts", "displayName": "v0.65.x-LTS"}, {"name": "release-v0.63.x-lts", "displayName": "v0.63.x-LTS"}, {"name": "release-v0.60.x-lts", "displayName": "v0.60.x-LTS"}, {"name": "release-v0.57.x-lts", "displayName": "v0.57.x-LTS"}, {"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/dashboard/tags"}, {"name": "Pruner", "tags": [{"name": "main", "displayName": "main"}], "archive": "https://github.com/tektoncd/pruner/tags"}]');
}

const getComponentReleases = () => {
  const pathName = window.location.pathname;
  const vaultIdx = pathName.indexOf('/vault/');
  if (vaultIdx === -1) return {};
  const afterVault = pathName.substring(vaultIdx + 7);
  const componentVersionStr = afterVault.split('/')[0];
  const componentRawName = componentVersionStr.split('-')[0];
  let latestVersion;
  let nightlyVersion;
  let latestLTS;
  let componentName;

  componentVersions.forEach((componentVersion) => {
    if (componentVersion.name.toLowerCase() === componentRawName) {
      componentName = componentVersion.name;
      const versions = componentVersion.tags;
      latestVersion = versions[0].displayName;
      if (versions.length > 1) {
        nightlyVersion = versions[versions.length - 1].displayName;
      }
      versions.forEach((version) => {
        if (version.displayName.toLowerCase().includes('lts') && !latestLTS) {
          latestLTS = version.displayName;
        }
      });
    }
  });
  return {
    name: componentName,
    latest: latestVersion,
    nightly: nightlyVersion,
    lts: latestLTS,
  };
};

const findReleases = () => {
  const prefix = typeof getBasePrefix === 'function' ? getBasePrefix() : '';
  const componentReleases = getComponentReleases();

  const releasesNode = document.getElementById('release-switcher');
  const latestNode = document.getElementById('latest-release-li');
  const nightlyLiNode = document.getElementById('nightly-release-li');
  const nightlyNode = document.getElementById('nightly-release-link');
  const ltsLiNode = document.getElementById('lts-release-li');
  const ltsNode = document.getElementById('lts-release-link');

  if (componentReleases.name) {
    let nightlyURL = `${prefix}/vault/${componentReleases.name}-${componentReleases.nightly}`;
    let ltsURL = `${prefix}/vault/${componentReleases.name}-${componentReleases.lts}`;
    releasesNode.style.visibility = 'visible';
    latestNode.innerText = `Documentation for ${componentReleases.name}-${componentReleases.latest}`;
    if (componentReleases.nightly) {
      nightlyLiNode.style.visibility = 'visible';
      nightlyNode.setAttribute('href', nightlyURL.toLowerCase());
    }
    if (componentReleases.lts) {
      ltsLiNode.style.visibility = 'visible';
      ltsURL = (componentReleases.lts == componentReleases.latest) ? '#' : ltsURL.toLowerCase();
      ltsNode.setAttribute('href', ltsURL);
    }
  }
};
