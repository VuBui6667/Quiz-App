import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Box } from '@mui/material'
import MotionBox from '@components/common/MotionBox'
import Review from './components/Review'
import Quiz from './components/Quiz'
import SubmitQuiz from './components/SubmitQuiz'

const HomeScreen = () => {
  const [isStart, setIsStart] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)

  const [responseAnswers, setResponseAnswers] = useState<number[]>(Array(12).fill(0).map(_ => -1))

  const handleStartQuiz = () => {
    setIsStart(true)
  }

  const handleDoneQuiz = () => {
    setIsDone(true)
  }

  const handleGetResponseAnswers = (response: number[]) => {
    setResponseAnswers(response)
  }

  return (
    <Box position="relative">
      <AnimatePresence>
        {!isStart &&
          <MotionBox
            sx={{ position: "absolute", zIndex: 99 }}
            exit={{ y: -1000 }}
            transition={{ duration: 1.5 }}
          >
            <Review onStartQuiz={handleStartQuiz} />
          </MotionBox>
        }
      </AnimatePresence>
      <AnimatePresence>
        {!isDone &&
          <MotionBox
            exit={{ y: -1000 }}
            transition={{ duration: 1 }}
            sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 80 }}
          >
            <Quiz onDoneQuiz={handleDoneQuiz} handleGetResponseAnswers={handleGetResponseAnswers} />
          </MotionBox>
        }
      </AnimatePresence>
      {
        isDone &&
        <AnimatePresence>
          <MotionBox
            sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 70 }}
          >
            <SubmitQuiz responseAnswers={responseAnswers} />
          </MotionBox>
        </AnimatePresence>
      }
    </Box>
  )
}

export default HomeScreen