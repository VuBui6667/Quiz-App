import React, { useEffect, useState } from 'react'
import { AnimatePresence, useAnimationControls } from 'framer-motion'
import { Box } from '@mui/material'
import MotionBox from '@components/common/MotionBox'
import CircleBlur from '@components/common/CircleBlur'
import QuestionCard from './QuestionCard'
import AnswersCard from './AnswersCard'
import Pagination from './Pagination'
import { COLORS, Color } from '@constants/colors'
import { QUIZ } from '@constants/quiz'
import { randomColor } from '@utils/randomColor'

type Props = {
  onDoneQuiz: () => void
  handleGetResponseAnswers: (response: number[]) => void
}

const Quiz = ({ onDoneQuiz, handleGetResponseAnswers }: Props) => {
  const [color, setColor] = useState<Color>(COLORS[0])
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0)
  const [responseAnswers, setResponseAnswers] = useState<number[]>(Array(12).fill(0).map(_ => -1))
  const [isDoneAnimation, setIsDoneAnimation] = useState<boolean>(false)

  const whiteLayer = useAnimationControls()
  const questionLayer = useAnimationControls()
  const termLayer = useAnimationControls()

  useEffect(() => {
    const newColor = randomColor()
    setColor(newColor)
  }, [selectedQuestion])

  const handleChangeQuestion = async (index: number) => {
    if (!isDoneAnimation) {
      setIsDoneAnimation(true);
      try {
        await whiteLayer.start({
          x: 0,
          transition: {
            duration: 0.3,
          }
        })
        await Promise.all([
          await questionLayer.start({
            x: "100%",
            transition: {
              duration: 0.1
            }
          }),
          termLayer.start({
            x: "-100%",
            transition: {
              duration: 0.4
            }
          }),
          whiteLayer.start({
            x: "100%",
            transition: {
              duration: 0.3,
            }
          }),
        ])
        setSelectedQuestion(index)
        await Promise.all([
          termLayer.start({
            x: 0,
            transition: {
              duration: 0.8
            }
          }),
          await whiteLayer.start({
            x: 0,
            transition: {
              duration: 0.4
            }
          }),
          await questionLayer.start({
            x: 0,
            transition: {
              duration: 0.3,
            }
          })
        ])
        await whiteLayer.start({
          x: "-100%",
          transition: {
            duration: 0.2
          }
        })
      } finally {
        setIsDoneAnimation(false)
      }
    }
  }

  const handleSelectAnswer = (indexAnswer: number) => {
    const updatedResponseAnswers = [...responseAnswers]
    updatedResponseAnswers[selectedQuestion] = indexAnswer
    setResponseAnswers(updatedResponseAnswers)
    if (updatedResponseAnswers.every(response => response !== -1)) {
      handleGetResponseAnswers(responseAnswers)
      onDoneQuiz()
    } else {
      handleChangeQuestion(selectedQuestion + 1)
    }
  }

  return (
    <Box
      sx={{
        background: color?.background, display: "flex", gap: 3, flexDirection: "column", color: "white", position: "relative"
      }}
      minHeight={{ xs: "100vh", sm: "100vh" }}
      paddingX={{ xs: "20px", sm: "100px", md: "140px", lg: "260px", xl: "420px" }}
    >
      <CircleBlur color={color.background} size={400} top={-100} right={0} />
      <CircleBlur color={color.background} size={400} bottom={-100} left={500} blur={140} />
      <Pagination responseAnswers={responseAnswers} handleChangeQuestion={handleChangeQuestion} />
      <Box
        position="relative"
        sx={{ width: "100%", height: "100%" }}
        marginTop={{ xs: "250px", sm: "320px" }}
      >
        <MotionBox
          animate={{ y: [0, 100, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          sx={{ position: "absolute", top: -160, left: -200 }}
        >
          <Box
            component="img"
            src='/images/cocktail.png'
            alt="book"
            width={{ xs: "30%" }}
            height={{ xs: "30%" }}
            sx={{ transform: "rotate(45deg)" }}
          />
        </MotionBox>
        <MotionBox
          animate={{ y: [0, 100, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          sx={{ position: "absolute", top: 0, right: -200, zIndex: 99 }}
        >
          <Box
            component="img"
            src='/images/ruler.png'
            alt="book"
            width={{ xs: "80%" }}
            height={{ xs: "80%" }}
          />
        </MotionBox>
        <AnimatePresence>
          {
            QUIZ.map((quiz, index) => (
              <MotionBox
                key={quiz.question}
                sx={{ position: "absolute", width: "100%", top: -200, zIndex: selectedQuestion === index ? 10 : -1 }} height={{ xs: "480px" }}
              >
                <Box
                  sx={{ width: "100%", height: "80px", overflowX: "hidden", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", position: "relative" }}
                >
                  <MotionBox
                    animate={termLayer}
                    initial={{ x: 0 }}
                    sx={{ height: "100%", width: "100%" }}
                    onClick={onDoneQuiz}
                  >
                    <QuestionCard question={quiz.question} color={color} />
                  </MotionBox>
                </Box>
                <Box
                  sx={{ width: "100%", height: "100%", overflowX: "hidden", position: "relative", borderBottomLeftRadius: "24px", borderBottomRightRadius: "24px" }}
                >
                  <MotionBox
                    initial={{ x: 0 }}
                    animate={questionLayer}
                    sx={{ height: "100%", width: "100%", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: color.background }}
                  >
                    <AnswersCard
                      answers={quiz.answers}
                      color={color}
                      responseAnswer={responseAnswers[index]}
                      handleSelectAnswer={handleSelectAnswer}
                    />
                  </MotionBox>
                  {/* <MotionBox
                    sx={{ backgroundColor: "white", position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 10, width: "100%" }}
                    initial={{ x: "-100%" }}
                    animate={whiteLayer}
                  /> */}
                </Box>
              </MotionBox>
            ))
          }
        </AnimatePresence >
      </Box >
    </Box >
  )
}

export default Quiz