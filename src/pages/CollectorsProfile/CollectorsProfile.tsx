import { FC, useRef, useEffect } from 'react'

export const CollectorsProfile: FC = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#E1B368'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const scaleFactor = canvas.height / img.height
        const scaleWidth = img.width * scaleFactor
        const scaleHeight = img.height * scaleFactor

        const dx = 0
        const dy = (canvas.height - scaleHeight) / 2

        ctx.drawImage(img, dx, dy, scaleWidth, scaleHeight)

        const text = 'Lleeto //'
        ctx.font = '48px serif'
        ctx.fillStyle = 'black'

        const textWidth = ctx.measureText(text).width
        const margin = 50
        const textX = canvas.width - textWidth - margin
        const textY = canvas.height - margin

        ctx.fillText(text, textX, textY)

        const twitterText = '@Lleeto26'
        ctx.font = '21px serif'
        ctx.fillStyle = 'black'

        const textWidth2 = ctx.measureText(twitterText).width
        const margin2 = 50
        const textX2 = canvas.width - textWidth2 - margin2
        const textY2 = canvas.height - margin + 20

        ctx.fillText(twitterText, textX2, textY2)

        const smallImg = new Image()
        smallImg.crossOrigin = 'anonymous'
        smallImg.onload = () => {
          const imgX = canvas.width - 100
          const imgY = canvas.height - 475

          const imgWidth = smallImg.width * 0.1
          const imgHeight = smallImg.height * 0.1

          ctx.drawImage(smallImg, imgX, imgY, imgWidth, imgHeight)
          ctx.drawImage(smallImg, imgX - 50, imgY, imgWidth, imgHeight)
          ctx.drawImage(smallImg, imgX - 100, imgY, imgWidth, imgHeight)
          ctx.drawImage(smallImg, imgX - 150, imgY, imgWidth, imgHeight)
        }
        smallImg.src = 'Achievment_transparent.png'
      }
      img.src = 'IMG_4149.jpg'
    }
  }, [])

  const handleDownloadImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')

      // Create a link and trigger the download
      const link = document.createElement('a')
      link.href = image
      link.download = 'TwitterBanner.png'
      document.body.appendChild(link) // Required for Firefox
      link.click()
      document.body.removeChild(link) // Clean up
    }
  }

  return (
    <>
      <canvas ref={canvasRef} width="1500" height="500"></canvas>

      <button onClick={handleDownloadImage} className="bg-green-500">
        Download Banner
      </button>
    </>
  )
}
