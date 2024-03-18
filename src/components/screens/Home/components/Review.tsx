import React from 'react'
import { Box, Button } from '@mui/material'
import { yellow } from '@mui/material/colors'
import MotionBox from '@components/common/MotionBox'
import CircleBlur from '@components/common/CircleBlur'

type Props = {
  onStartQuiz: () => void
}

const Review = ({ onStartQuiz }: Props) => {
  return (
    <MotionBox
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity }}
      sx={{ backgroundColor: "#55CD5C", display: "flex", gap: 3, flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "100vh", color: "white", position: "relative", zIndex: 999 }} paddingX={{ xs: "40px", sm: "100px", md: "200px", lg: "360px", xl: "420px" }}>
      <CircleBlur color="#8ED246" size={400} top={-100} right={0} zIndex={-1} />
      <CircleBlur color="#F6FB68" size={400} bottom={-100} left={500} blur={140} zIndex={-1} />
      <MotionBox
        animate={{ y: [0, 100, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        sx={{ position: "absolute", left: -200, top: 20, zIndex: -1 }}
      >
        <Box
          component="img"
          src='/images/book.png'
          alt="book"
          width={{ xs: "60%", md: "70%", lg: "80%" }}
          height={{ xs: "60%", md: "70%", lg: "80%" }}
        />
      </MotionBox>
      <MotionBox
        animate={{ y: [0, 100, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        sx={{ position: "absolute", bottom: 20, zIndex: -1 }}
        right={{ xs: -400, md: -250 }}
      >
        <Box
          component="img"
          src='/images/butterfly.png'
          alt="butter fly"
          width={{ xs: "60%", md: "70%", lg: "80%" }}
          height={{ xs: "60%", md: "70%", lg: "80%" }}
        />
      </MotionBox>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{ fontWeight: 700, textAlign: "center" }} fontSize={{ xs: "54px", sm: "68px", md: "80px", lg: "96px", textShadow: "4px 4px rgba(0,0,0,0.2)" }}
        >
          Create Vibe
        </Box>
        <MotionBox
          animate={{
            x: [0, 40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          sx={{ position: "absolute", right: -350, zIndex: -1 }}
          top={{ xs: -160, sm: -180, md: -220, lg: -240 }}
        >
          <Box
            component="img"
            src='/images/pencil.png'
            alt="pencil"
            width={{ xs: "60%", md: "70%", lg: "80%" }}
            height={{ xs: "60%", md: "70%", lg: "80%" }}
          />
        </MotionBox>
      </Box >
      <Box component="p" sx={{ fontSize: "20px", fontWeight: 600, textAlign: "center" }}>Sau đây sẽ là 12 câu hỏi giúp bạn thấu hiểu bản thân nhiều hơn và tìm ra được kiểu thiên hướng sáng tạo của chính mình. Bạn đã sẵn sàng chưa?</Box>
      <Button
        sx={{ backgroundColor: yellow[500], color: "black", borderRadius: 8, width: "215px", height: "56px", fontWeight: 700, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)", transitionProperty: "all", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "300ms", '&:hover': { backgroundColor: yellow[500], opacity: 0.95, transform: "translate(3px, 3px)", boxShadow: "none" } }}
        onClick={onStartQuiz}
      >
        Bắt đầu ngay
      </Button>
    </MotionBox >
  )
}

export default Review