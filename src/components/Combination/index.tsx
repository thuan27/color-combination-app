import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Box, Typography, Button } from '@mui/material'
import ColorSelection from './ColorSelection'
import { setCombinations } from '../../features/colorCombinationSlice'
import { RootState } from '@/redux/store'
import ColorCombinationInformation from './ColorCombinationInformation'
import { ColorGroup, Color } from '@/types/color-combination.interface'
import CustomBreadcrumbs from '../../elements/Breadcrumbs'
import { getCombinations } from '@/services/colorCombinationService'

import './style.scss'

const items = [
  { name: 'Colors', url: '/' },
  { name: 'Color Palettes', url: '/' },
  { name: 'Pastel Blonde' }
]

const Combination = () => {
  const combinations = useSelector(
    (state: RootState) => state.colorCombination.combinations
  )
  const dispatch = useDispatch()

  const [selectedCombination, setSelectedCombination] =
    useState<ColorGroup | null>(null)
  const [selectedColor, setSelectedColor] = useState<Color | null>(null)

  useEffect(() => {
    const fetchCombinations = async () => {
      const combination = await getCombinations() // Call the service
      const combinationList = combination.map((item: any) => item.combination)
      dispatch(setCombinations(combinationList))

      if (combinationList.length > 0) {
        setSelectedCombination(combinationList[0])
        setSelectedColor(combinationList[0].colors[0])
      }
    }

    fetchCombinations()
  }, [dispatch])

  const handleColorGroupSelect = (colors: ColorGroup) => {
    if (selectedCombination) {
      setSelectedCombination({
        ...selectedCombination,
        ...colors
      })
      setSelectedColor(colors.color)
    }
  }

  useEffect(() => {
    if (selectedCombination) {
      const updatedCombination = combinations.find(
        (comb) => comb.id === selectedCombination.id
      )
      if (updatedCombination) {
        setSelectedCombination(updatedCombination)
      }
    }
  }, [combinations])

  return (
    <Grid container spacing={2} className="combination-list">
      {selectedCombination && (
        <>
          <Grid item xs={12} className="group-background">
            <Box
              className="background-image"
              sx={{
                backgroundImage: `url('/src/assets/_images/Asset/foreground.png')`,
                backgroundSize: 'cover',
                zIndex: -9,
                backgroundColor: selectedColor
                  ? selectedColor.hex
                  : 'transparent',
                width: '100%',
                height: '350px',
                position: 'relative'
              }}
            ></Box>
          </Grid>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <CustomBreadcrumbs
              items={items}
              color={selectedColor?.hex == '#800020' ? 'white' : 'black'}
            />
          </Grid>
          <Grid item xs={12}>
            <ColorCombinationInformation combination={selectedCombination} />
          </Grid>
          <Grid item xs={12}>
            <ColorSelection
              colorGroups={combinations}
              onSelectColorGroup={handleColorGroupSelect}
            />
          </Grid>
        </>
      )}

      <Grid item xs={12} sx={{ marginBottom: '20px', marginTop: '100px' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '20px'
          }}
        >
          Use this color palette and create beautiful
          <br />
          designs and documents!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            fullWidth
            className="button-click-browser"
            sx={{
              backgroundColor: selectedColor
                ? selectedColor.hex
                : 'transparent',

              color: selectedColor?.hex == '#800020' ? 'white' : 'black'
            }}
          >
            Browse templates
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Combination
