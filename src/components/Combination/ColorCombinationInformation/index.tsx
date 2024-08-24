import React, { lazy, Suspense, useState } from 'react'
import { Box, Typography, CardMedia, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useDispatch } from 'react-redux'
import { toggleLike } from '@/features/colorCombinationSlice'
import { ColorGroup } from '@/types/color-combination.interface'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import CustomSnackbar from '@/elements/Snackbar'

import './style.scss'

const ColorPicker = lazy(() => import('@/components/ColorPicker'))

interface ColorCombinationInformationProps {
  combination: ColorGroup
}

const ColorCombinationInformation: React.FC<
  ColorCombinationInformationProps
> = ({ combination }) => {
  const dispatch = useDispatch()
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [isCopied, copyToClipboard] = useCopyToClipboard()
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const imageUrl = `/src/assets/_images/Thumbnail/${combination.featuredImage.url}`

  const handleCopyToClipboard = (hex: string) => {
    copyToClipboard(hex)
    setSnackbarOpen(true)
  }

  const handleColorClick = (hex: string) => {
    setSelectedColor((prev) => (prev === hex ? '' : hex))
  }

  const handleColorPickerClick = (hex: string) => {
    setSelectedColor((prev) => (prev === hex ? '' : hex))
    copyToClipboard(hex)
    setSnackbarOpen(true)
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const handleLikeClick = () => {
    dispatch(toggleLike(combination.id))
  }

  return (
    <Box className="color-combination">
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Copied to clipboard!"
        severity="success"
      />
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: 'center',
          marginTop: '10px',
          marginBottom: '50px',
          color: combination.colors[0].hex === '#391306' ? 'white' : 'black'
        }}
      >
        {combination.name}
        <br />
        color combination
      </Typography>

      {/* Image */}
      <Box className="card-image">
        <CardMedia
          component="img"
          image={imageUrl}
          alt={combination.featuredImage.alt}
          className="image"
        />

        {/* Like Button */}
        <IconButton className="button-vote" onClick={handleLikeClick}>
          {combination.liked ? (
            <FavoriteIcon className="like-icon" sx={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon className="like-icon" sx={{ color: 'black' }} />
          )}
          <Typography variant="caption" sx={{ ml: 0.5, color: 'black' }}>
            {combination.likes}
          </Typography>
        </IconButton>
      </Box>

      {/* Current Color Codes */}
      <Box className="color-codes">
        {combination.colors.map((color, index) => (
          <Box
            key={index}
            className="color-box"
            sx={{
              backgroundColor: color.hex
            }}
            onClick={() => handleCopyToClipboard(color.hex)}
          >
            <Box className="copy-overlay">Copy</Box>
          </Box>
        ))}
      </Box>

      {/* Color Names */}
      <Box className="color-names">
        {combination.colors.map((color, index) => (
          <Box key={index} className="color-name-box">
            {/* Text with underline */}
            <Typography variant="body2" className="color-name">
              {color.name}
            </Typography>
            {/* Hex code with lighter weight */}
            <Typography
              variant="body2"
              className="color-hex"
              onClick={() => handleColorClick(color.hex)}
            >
              {color.hex}
            </Typography>

            {/* ColorPicker */}
            {selectedColor === color.hex && (
              <Suspense fallback={<div>Loading...</div>}>
                <ColorPicker
                  color={selectedColor}
                  onChange={(newColor: string) =>
                    handleColorPickerClick(newColor)
                  }
                />
              </Suspense>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ColorCombinationInformation
