import hostedGitInfo from 'hosted-git-info'
import { RepoUrlInfo } from './types'

const OPTIONS: hostedGitInfo.Options = {
  noCommittish: true,
  noGitPlus: true,
}

export function getRepoInfo(repoUrl: string): RepoUrlInfo {
  const info = hostedGitInfo.fromUrl(repoUrl, OPTIONS)
  if (!info || !info.project || !info.user || !info.type) {
    throw new Error(`Unknown or unsupported repo host: ${repoUrl}`)
  }
  return {
    type: info.type,
    project: info.project,
    user: info.user,
    url: info.browse(),
  }
}
