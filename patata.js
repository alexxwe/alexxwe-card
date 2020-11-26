'use strict'

// Pull in our modules
import { white, green, gray, cyan, red, blue } from 'chalk'
import boxen from 'boxen'
import { writeFileSync } from 'fs'
import { join } from 'path'

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round'
}

// Text + chalk definitions
const data = {
	name: white('               David M. Fajardo'),
	handle: white('dawichi'),
	work: white('Sysadmin and javascript developer'),
	twitter: gray('https://twitter.com/') + cyan('dawichi_'),
	npm: gray('https://npmjs.com/') + red('~dawichi'),
	github: gray('https://github.com/') + green('dawichi'),
	linkedin: gray('https://linkedin.com/in/') + blue('dawichi'),
	//web: cyan('https://dawichi.ga'),
	//npx: red('npx') + ' ' + white('@dawichi/card  (via GitHub Package Registry)'),
	labelWork: white.bold('       Work:'),
	labelOpenSource: white.bold('Open Source:'),
	labelTwitter: white.bold('    Twitter:'),
	labelnpm: white.bold('        npm:'),
	labelGitHub: white.bold('     GitHub:'),
	labelLinkedIn: white.bold('   LinkedIn:'),
	//labelWeb: white.bold('        Web:'),
	//labelCard: white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
// const webing = `${data.labelWeb}  ${data.web}`
// const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
	newline + newline + // Add one whole blank line
	working + newline + // data.labelWork + data.work
	opensourcing + newline + newline + // data.labelOpenSource + data.opensource
	twittering + newline + // data.labelTwitter + data.twitter
	npming + newline + // data.labelnpm + data.npm
	githubing + newline + // data.labelGitHub + data.github
	linkedining + newline + // data.labelLinkedIn + data.linkedin
	webing + newline + newline + // data.labelWeb + data.web
	carding // data.labelCard + data.npx

writeFileSync(join(__dirname, 'bin/output'), green(boxen(output, options)))
