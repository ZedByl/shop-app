import httpService from './http.service'
import { getUserId } from './localStorage.service'

const userEndpoint = 'user/'

const userService = {
    create: async (payload: any) => {
        const { data } = await httpService.put(
            userEndpoint + payload._id,
            payload,
        )
        return data
    },
    getCurrentUser: async () => {
        const { data } = await httpService.get(
            userEndpoint + getUserId(),
        )
        return data
    },
    update: async (payload: any) => {
        const { data } = await httpService.patch(
            userEndpoint + getUserId(),
            payload,
        )
        return data
    },
}
export default userService
