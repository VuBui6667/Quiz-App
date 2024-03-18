import React, { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import Footer from './Footer'
import MotionBox from '@components/common/MotionBox'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode,
  title?: string
}

const MainLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Box component="main">
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} >
          <Box>{children}</Box>
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default React.memo(MainLayout)
