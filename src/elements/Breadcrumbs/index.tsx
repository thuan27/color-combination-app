import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface BreadcrumbsProps {
  color?: string
  items?: Array<{ name: string; url?: string }>
}

const CustomBreadcrumbs: React.FC<BreadcrumbsProps> = ({
  color = 'black',
  items
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Breadcrumbs
        className="header-breadcrumbs"
        separator={<ChevronRightIcon fontSize="small" sx={{ color: color }} />}
        aria-label="breadcrumb"
      >
        {items?.map((crumb, index: number) => {
          if (crumb.url) {
            return (
              <Link
                key={index}
                underline="hover"
                href={crumb.url}
                sx={{ color: color }}
              >
                <Typography>{crumb.name}</Typography>
              </Link>
            )
          } else {
            return (
              <Typography sx={{ color: color, fontWeight: 300 }} key={index}>
                {crumb.name}
              </Typography>
            )
          }
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default CustomBreadcrumbs
