import { addAPIKey, getAPIKeys, updateAPIKey } from '../../utils/apiKey'
import { addChatflowsCount } from '../../utils/addChatflowsCount'

const getAllApiKeys = async () => {
    try {
        const keys = await getAPIKeys()
        const dbResponse = await addChatflowsCount(keys)
        return dbResponse
    } catch (error) {
        throw new Error(`Error: apikeyService.getAllApiKeys - ${error}`)
    }
}

const createApiKey = async (keyName: string) => {
    try {
        const keys = await addAPIKey(keyName)
        const dbResponse = await addChatflowsCount(keys)
        return dbResponse
    } catch (error) {
        throw new Error(`Error: apikeyService.createApiKey - ${error}`)
    }
}

// Update api key
const updateApiKey = async (id: string, keyName: string) => {
    try {
        const keys = await updateAPIKey(id, keyName)
        const dbResponse = await addChatflowsCount(keys)
        return dbResponse
    } catch (error) {
        throw new Error(`Error: apikeysService.updateApiKey - ${error}`)
    }
}

export default {
    createApiKey,
    getAllApiKeys,
    updateApiKey
}