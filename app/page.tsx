'use client'

import { Box, Heading } from '@kuma-ui/core'

const Home = () => {
  return (
    <Box
      height={'calc(100vh - 68px)'}
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'1rem'}
    >
      <Box as={'main'} margin={'4rem 0'} textAlign={'center'}>
        <Heading
          color={'colors.primary'}
          bg={'white'}
          padding={'0.5rem 1rem'}
          borderRadius={'0.5rem'}
        >
          play.aisa.bar
        </Heading>
      </Box>
    </Box>
  )
}

export default Home
