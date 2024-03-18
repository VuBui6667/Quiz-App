import React, { ChangeEvent, useState } from 'react'
import { Box, Button } from '@mui/material'
import { yellow } from '@mui/material/colors'
import MotionBox from '@components/common/MotionBox'
import CircleBlur from '@components/common/CircleBlur'
import { QUIZ } from '@constants/quiz'

type FormSubmit = {
  name: string
  phone: string
  email: string
}

type Props = {
  responseAnswers: number[]
}

const ERROR_MESSAGE: FormSubmit = {
  name: "Vui lòng nhập tên của bạn.",
  phone: "Vui lòng nhập số điện thoại của bạn.",
  email: "Vui lòng nhập đúng định dạng email của bạn."
}

const SubmitQuiz = ({ responseAnswers }: Props) => {
  const [formSubmit, setFormSubmit] = useState<FormSubmit>({
    name: "",
    phone: "",
    email: "",
  })
  const [errorMessage, setErrorMessage] = useState<FormSubmit>({
    name: "",
    phone: "",
    email: "",
  })

  const handleChangeFormSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value
    const phoneRegex = /^(?:\+?84|0)(?:\d{9,10})$/
    const regexEmail = /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

    setFormSubmit({
      ...formSubmit,
      [name]: value
    })
    setErrorMessage({
      ...errorMessage,
      [name]: !!value ? "" : ERROR_MESSAGE[name as keyof FormSubmit]
    })
    if (name === "phone" && !phoneRegex.test(value)) {
      setErrorMessage({
        ...errorMessage,
        [name]: ERROR_MESSAGE[name as keyof FormSubmit]
      })
    }
    if (name === "email" && !regexEmail.test(value)) {
      setErrorMessage({
        ...errorMessage,
        [name]: ERROR_MESSAGE[name as keyof FormSubmit]
      })
    }
  }

  const handleSubmit = () => {
    let isValid = true
    let newErrorMessage: FormSubmit = {
      name: "",
      phone: "",
      email: "",
    }
    Object.entries(formSubmit).map(([key, value]) => {
      if (!value) {
        newErrorMessage = {
          ...newErrorMessage,
          [key]: ERROR_MESSAGE[key as keyof FormSubmit]
        }
        isValid = false
      }
    })
    setErrorMessage(newErrorMessage)
    if (isValid) {
      console.log("==========RESPONSE ANSWERS==========")
      responseAnswers.map((responseAnswer, index) => {
        console.log(`${index + 1}. ${QUIZ[index].question} ${QUIZ[index].answers[responseAnswer]}`)
      })
      console.log("==========INFORMATION==========")
      console.log("Họ và tên: " + formSubmit.name)
      console.log("Số điện thoại: " + formSubmit.phone)
      console.log("Email: " + formSubmit.email)
    }
  }

  return (
    <MotionBox
      sx={{ backgroundColor: "#55CD5C", display: "flex", gap: 3, flexDirection: "column", alignItems: "center", minHeight: "100vh", color: "white", position: "relative", zIndex: 999 }}
      paddingX={{ xs: "32px", sm: "80px", md: "180px" }}
      paddingY={{ xs: "32px", sm: "80px" }}
    >
      <CircleBlur color="#8ED246" size={400} top={-100} right={0} zIndex={-1} />
      <CircleBlur color="#8ED246" size={400} bottom={-20} left={-160} zIndex={-1} />
      <MotionBox
        animate={{ y: [0, 100, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        sx={{ position: "absolute", right: -500, bottom: 0, zIndex: -1 }}
      >
        <Box
          component="img"
          src='/images/book.png'
          alt="book"
          width={{ xs: "20%", md: "40%" }}
          height={{ xs: "20%", md: "40%" }}
          sx={{ transform: "rotate(-45deg)" }}
        />
      </MotionBox>
      <MotionBox
        animate={{ y: [0, 100, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        sx={{ position: "absolute", top: -80, zIndex: -1 }}
        left={{ xs: -300, md: -120 }}
      >
        <Box
          component="img"
          src='/images/butterfly.png'
          alt="butter fly"
          width="60%"
          height="60%"
          sx={{ transform: "rotate(-45deg)" }}
        />
      </MotionBox>
      <Box paddingX={{ sm: "40px", lg: "80px" }}>
        <Box
          sx={{ fontWeight: 700, textAlign: "center", textShadow: "4px 4px rgba(0,0,0,0.2)" }}
          fontSize={{ xs: "40px", sm: "55px", md: "64px" }}
        >
          Chúc mừng bạn đã hoàn thành bài Quiz
        </Box>
        <Box component="p" sx={{ textAlign: "center", marginY: "12px" }}>Hãy điền những thông tin dưới đây để chúng mình có thể gửi đến bạn kết quả bài quiz, bộ tài liệu về cơ hội việc làm ngành sáng tạo và vé mời miễn phí tham gia trải nghiệm tại colorME Rooftop nha.</Box>
      </Box >
      <Box width="100%">
        <Box
          sx={{ display: "flex", paddingBottom: "16px" }}
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 2, md: 4 }}
        >
          <Box sx={{ flexBasis: "70%" }}>
            <Box component="p" paddingBlock="8px" fontSize={18}>Họ và tên*</Box>
            <Box
              component="input"
              type="text"
              name="name"
              sx={{ backgroundColor: "inherit", border: "1px solid white", borderRadius: "8px", padding: "10px 12px", color: "white", width: "100%", fontSize: "18px", outline: "none", "&:focus": { outline: "3px solid rgba(255, 255, 255, 0.4)" } }}
              value={formSubmit.name}
              onChange={handleChangeFormSubmit}
            />
            <Box sx={{ color: "red", paddingY: "8px" }}>{errorMessage.name}</Box>
          </Box>
          <Box sx={{ flexBasis: "30%" }}>
            <Box component="p" paddingBlock="8px" fontSize={18}>Số điện thoại*</Box>
            <Box
              component="input"
              name="phone"
              type="text"
              sx={{ backgroundColor: "inherit", border: "1px solid white", borderRadius: "8px", padding: "10px 12px", color: "white", width: "100%", fontSize: "18px", outline: "none", "&:focus": { outline: "3px solid rgba(255, 255, 255, 0.4)" } }}
              value={formSubmit.phone}
              onChange={handleChangeFormSubmit}
            />
            <Box sx={{ color: "red", paddingY: "8px" }}>{errorMessage.phone}</Box>
          </Box>
        </Box>
        <Box>
          <Box component="p" paddingBlock="8px" fontSize={18}>Email*</Box>
          <Box
            component="input"
            name="email"
            type="text"
            sx={{ backgroundColor: "inherit", border: "1px solid white", borderRadius: "8px", padding: "10px 12px", color: "white", width: "100%", fontSize: "18px", outline: "none", "&:focus": { outline: "3px solid rgba(255, 255, 255, 0.4)" } }}
            value={formSubmit.email}
            onChange={handleChangeFormSubmit}
          />
          <Box sx={{ color: "red", paddingY: "8px" }}>{errorMessage.email}</Box>
        </Box>
      </Box>
      <Box component="p" textAlign="center">
        (Kết quả sẽ được gửi về email trong vòng tối đa 12 tiếng kể từ thời điểm bạn điền xong thông tin)</Box>
      <Button
        sx={{ backgroundColor: yellow[500], color: "black", borderRadius: 8, width: "215px", height: "56px", fontWeight: 700, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)", transitionProperty: "all", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)", transitionDuration: "300ms", '&:hover': { backgroundColor: yellow[500], opacity: 0.95, transform: "translate(3px, 3px)", boxShadow: "none" } }}
        disabled={Object.values(errorMessage).some(item => !!item)}
        onClick={handleSubmit}
      >
        Xác nhận
      </Button>
    </MotionBox >
  )
}

export default SubmitQuiz