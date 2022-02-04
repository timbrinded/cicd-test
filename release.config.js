module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/timbrinded/cicd-test',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
}
