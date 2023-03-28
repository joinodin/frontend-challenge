import { ChildrenProps } from "@/types/react"
import { Box } from "@chakra-ui/react"
import React from "react"

export function Layout({ children }: ChildrenProps) {
  return (
    <Box as="main" bgColor="gray.700" minH="100vh">
      {children}
    </Box>
  )
}
