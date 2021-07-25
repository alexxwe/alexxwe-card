'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round'
}

// Text + chalk definitions
const data = {
	name: chalk.white('              David M. Fajardo'),
	alias: chalk.white('dawichi'),
	work: chalk.white('Software developer'),
	twitter: chalk.gray('https://twitter.com/') + chalk.blue('dawichi_'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~dawichi'),
	github: chalk.gray('https://github.com/') + chalk.green('dawichi'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.yellow('dawichi'),
	web: chalk.magenta('https://dawichi.dev'),
	labelWork: chalk.white.bold('       Work:'),
	labelOpenSource: chalk.white.bold('Open Source:'),
	labelTwitter: chalk.white.bold('    Twitter:'),
	labelnpm: chalk.white.bold('        npm:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelWeb: chalk.white.bold('        Web:'),
}

// Actual strings we're going to output
const new__line = '\n'
const title = `${data.name} | ${data.alias}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = title + // data.name + data.alias
	new__line + new__line + // Add one whole blank line
	working + new__line + new__line + // data.labelWork + data.work
	npming + new__line + // data.labelnpm + data.npm
	githubing + new__line + // data.labelGitHub + data.github
	twittering + new__line + // data.labelTwitter + data.twitter
	linkedining + new__line + // data.labelLinkedIn + data.linkedin
	webing// data.labelWeb + data.web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))