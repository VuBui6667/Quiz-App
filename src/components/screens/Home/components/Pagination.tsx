import React from 'react'
import { Box } from '@mui/material'
import MotionBox from '@components/common/MotionBox'

type Props = {
  responseAnswers: number[]
  handleChangeQuestion: (index: number) => void
}

const Pagination = ({ responseAnswers, handleChangeQuestion }: Props) => {
  return (
    <Box
      sx={{ justifyContent: "center", gap: "8px", position: "absolute", left: 0, right: 0, top: 40, flexWrap: "wrap" }}
      display={{ xs: "none", sm: "flex" }}
    >
      {
        Array(12).fill(0).map((_, index) => (
          <MotionBox
            key={index}
            sx={{ boxShadow: "0px 0px 4px 0px #00000040", backgroundColor: responseAnswers[index] !== -1 ? "#004a3e" : "rgba(255, 255, 255, 0.6)", width: 36, height: 36, borderRadius: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: responseAnswers[index] !== -1 ? "#E1E1E1" : "black", cursor: "pointer", '&:hover': { backgroundColor: "white" } }}
            onClick={() => handleChangeQuestion(index)}
          >
            {index + 1}
          </MotionBox>
        ))
      }
    </Box>
  )
}

export default Pagination