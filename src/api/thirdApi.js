import { GET, POST } from './api'

export const getBilibili = (param) => {
  return GET('https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&vmid=458066744', param)
}