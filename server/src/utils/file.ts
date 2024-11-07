import path from 'path'
import { fileURLToPath } from 'url'

const getFileFromPath = (filePathFromDir: string[]) => {
    const dir = path.dirname(fileURLToPath(import.meta.url))
    return path.join(dir, ...filePathFromDir)
}

export default {
    getFileFromPath
}