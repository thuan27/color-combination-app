import React from 'react'
import { SketchPicker } from 'react-color'
import './style.scss'

const ColorPicker: React.FC<{
  color: string
  onChange: (color: string) => void
}> = ({ color, onChange }) => {
  const handleColorChange = (newColor: any) => {
    onChange(newColor.hex)
  }

  return (
    <div className="color-picker">
      <SketchPicker color={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
