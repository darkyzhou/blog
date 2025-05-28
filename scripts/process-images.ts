import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'
import sharp from 'sharp'

const ASSETS_DIR = path.join(cwd(), 'public/assets')

const SUPPORTED_EXTENSIONS = ['.png', '.jpeg', '.jpg', '.webp']

async function processImages() {
  console.log('Processing images in public/assets/* directory...')

  const processDirectory = async (directory: string, ignoreFiles: boolean) => {
    const entries = fs.readdirSync(directory, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        await processDirectory(fullPath, false)
      }
      else if (entry.isFile() && !ignoreFiles && !entry.name.startsWith('_')) {
        const ext = path.extname(entry.name).toLowerCase()
        if (SUPPORTED_EXTENSIONS.includes(ext)) {
          await processImage(fullPath, ext)
        }
      }
    }
  }

  await processDirectory(ASSETS_DIR, true)
  console.log('Image processing complete!')
}

async function processImage(filePath: string, ext: string) {
  if (!SUPPORTED_EXTENSIONS.includes(ext)) {
    console.log(`Skipping ${filePath} because it is not a supported image format`)
    return
  }

  if (await isImageProcessed(filePath)) {
    console.log(`Skipping ${filePath} because it is already processed`)
    return
  }

  try {
    const basePath = filePath.substring(0, filePath.lastIndexOf('.'))
    const newPathTemp = `${basePath}_temp.jpg`
    const newPath = `${basePath}.jpg`

    console.log(`Processing ${filePath}...`)

    await sharp(filePath)
      .jpeg({
        quality: 80,
        progressive: true,
        mozjpeg: true,
        trellisQuantisation: true,
        overshootDeringing: true,
      })
      .resize({
        width: 1800,
        height: 1800,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toFile(newPathTemp)

    fs.renameSync(newPathTemp, newPath)

    if (ext !== '.jpg') {
      fs.unlinkSync(filePath)
    }
  }
  catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

async function isImageProcessed(filePath: string): Promise<boolean> {
  try {
    const metadata = await sharp(filePath).metadata()
    return (metadata.format === 'jpeg' || metadata.format === 'jpg') && !!metadata.isProgressive
  }
  catch (error: unknown) {
    console.error(`Error processing ${filePath}:`, error)
    return false
  }
}

processImages().catch(console.error)
