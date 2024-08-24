import React, { useState } from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import { ColorGroup } from '@/types/color-combination.interface'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import './style.scss'

interface ColorSelectionProps {
  colorGroups: ColorGroup[]
  onSelectColorGroup: (colors: ColorGroup) => void
}

const ColorSelection: React.FC<ColorSelectionProps> = ({
  colorGroups,
  onSelectColorGroup
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(5)

  // Function to load more items
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5) // Increase by 5 (or any number you choose)
  }

  return (
    <Box className="color-selection">
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: 'center',
          marginTop: '40px',
          marginBottom: '20px'
        }}
      >
        Related Combinations
      </Typography>
      <Grid container spacing={3}>
        {/* Set spacing to 0 */}
        {colorGroups.slice(0, visibleCount).map((group, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box className="group-select">
              <Box
                className="color-selection-item"
                onClick={() => onSelectColorGroup(group)}
              >
                <Box className="color-display">
                  {group.colors.map((color, idx) => (
                    <Box
                      key={idx}
                      className="color-box"
                      sx={{
                        flex: '1 1 0',
                        backgroundColor: color.hex
                      }}
                    >
                      {/* Empty box just for color display */}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className="additional-info">
                <Box className="info-left">
                  <Typography className="name" variant="body2">
                    {group.name}
                  </Typography>
                </Box>
                <Box className="info-right">
                  {group.liked ? (
                    <FavoriteIcon className="like-icon" sx={{ color: 'red' }} />
                  ) : (
                    <FavoriteBorderIcon
                      className="like-icon"
                      sx={{ color: 'black' }}
                    />
                  )}
                  <Typography variant="body2">{group.likes}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
        {/* Button to see more combinations */}
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            className="button-load-more"
            onClick={handleLoadMore}
          >
            See more combinations
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColorSelection
