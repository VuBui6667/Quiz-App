import React from 'react'
import { Box } from '@mui/material'
import { AddressIcon, PhoneIcon, MailIcon } from '@components/icons'

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#004C39", color: "#fff" }}
      paddingX={{ xs: "48px", sm: "80px", md: "120px" }}
      paddingY={{ xs: "48px", sm: "80px" }}
    >
      <Box component="h1" paddingBottom={3}>THÔNG TIN LIÊN HỆ</Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box
          sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" }}>
            <Box component="h3">TRỤ SỞ VĂN PHÒNG</Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <AddressIcon />
              <Box component="p">Hà Nội: 175 Chùa Láng - Đống Đa - Hà Nội</Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <AddressIcon />
              <Box component="p">TP. HCM: 366 Nguyễn Trãi - Q.5 - TP.HCM</Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <Box component="h3">KẾT NỐI VỚI CHÚNG TÔI</Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <PhoneIcon />
              <Box component="p">024 3550 0333</Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <MailIcon />
              <Box component="p">marketing@colorme.vn</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer