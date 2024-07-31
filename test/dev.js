import minimist from 'minimist'
import { nextDev } from 'next/dist/cli/next-dev.js'
import open from 'open'
import { getNextJSRootDir } from './helpers/getNextJSRootDir.js'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import chalk from 'chalk'

import { createTestHooks } from './testHooks.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

process.env.PAYLOAD_DROP_DATABASE = 'true'

const {
  _: [testSuiteArg],
  ...args
} = minimist(process.argv.slice(2))

// if (!fs.existsSync(path.resolve(dirname, testSuiteArg))) {
//   console.log(chalk.red(`ERROR: The test folder "${testSuiteArg}" does not exist`))
//   process.exit(0)
// }

if (args.turbo === true) {
  process.env.TURBOPACK = '1'
}

process.env.PAYLOAD_DROP_DATABASE = 'true'

const { beforeTest } = await createTestHooks(testSuiteArg)
await beforeTest()

const { rootDir, adminRoute } = getNextJSRootDir(testSuiteArg)

// Open the admin if the -o flag is passed
if (args.o) {
  await open(`http://localhost:3000${adminRoute}`)
}

// @ts-expect-error
await nextDev({ port: process.env.PORT || 3000, dirname: rootDir }, 'default', rootDir)

// fetch the admin url to force a render
fetch(`http://localhost:${process.env.PORT || 3000}${adminRoute}`)
