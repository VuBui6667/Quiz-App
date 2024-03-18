import React from 'react'
import { Box, Grid } from '@mui/material'
import { Color } from '@constants/colors'

type Props = {
  answers: String[]
  color: Color
  responseAnswer: number
  handleSelectAnswer: (index: number) => void
}

const AnswersCard = ({ answers, color, responseAnswer, handleSelectAnswer }: Props) => {
  return (
    <Box
      sx={{ backgroundColor: "#ffffffd1", color: "black", width: "100%", height: "100%", display: "flex", alignItems: "center", position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      padding={{ xs: "12px 18px", md: "24px 60px", }}
    >
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {answers.map((answer, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{ backgroundColor: responseAnswer === index ? color.card : "white", border: "1px solid black", borderRadius: "20px", height: "100%", cursor: "pointer", transition: "0.3s", "&:hover": { backgroundColor: color.card, color: color.text } }}
              padding={{ xs: "8px 12px", md: "20px" }}
              onClick={() => handleSelectAnswer(index)}
            >
              {answer}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AnswersCard