import * as core from '@actions/core'
import {sync} from './sync'

export async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token', {required: true})
    const dir: string = core.getInput('dir', {required: true})
    const org: string = core.getInput('org', {required: true})
    const space: string = core.getInput('space', {required: true})
    const apiEndpoint: string = core.getInput('apiEndpoint', {required: true})
    const group: string = core.getInput('group')

    core.info(`Syncing ${dir} to space ${space} ...`)

    await sync({
      token,
      dir,
      org,
      space,
      apiEndpoint,
      group
    })
  } catch (error: any) {
    core.setFailed(error.message)
  }
}
