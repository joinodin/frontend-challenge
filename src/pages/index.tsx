import { Heading, HStack } from "@chakra-ui/react"

export default function Home() {
  return (
    <HStack justifyContent="center" height="100vh">
      <Heading as="h1" fontSize="3xl">
        Hello world
      </Heading>
    </HStack>
  )
}
