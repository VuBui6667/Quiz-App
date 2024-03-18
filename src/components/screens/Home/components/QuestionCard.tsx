import React from 'react'
import { Box } from '@mui/material'
import { Color } from '@constants/colors'

type Props = {
  question: string
  color: Color
}

const QuestionCard = ({ question, color }: Props) => {
  return (
    <Box
      sx={{ width: "100%", height: "100%", color: color.text, fontWeight: 600, textAlign: "start", display: "flex", alignItems: "center", backgroundColor: color.card }}
      padding={{ xs: "8px 20px", md: "24px 40px" }}
      fontSize={{ xs: "16px", md: "20px" }}
    >
      {question}
    </Box>
  )
}

export default QuestionCard