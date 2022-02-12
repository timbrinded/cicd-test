const core = require('@actions/core')
const github = require('@actions/github')

try {
  core.debug('hello')
  core.warning('hello?')
  core.error('HELLO!')

  const name = core.getInput('who-to-greet')

  core.setSecret(name)
  console.log(`Hello ${name}`)

  const time = new Date()
  core.setOutput('time', time.toTimeString())

  console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
  core.setFailed('Error')
  console.error(error)
}
