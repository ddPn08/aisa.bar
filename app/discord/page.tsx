'use client'

import { k, Box, Heading } from '@kuma-ui/core'

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
      <Box
        bg={'#5d6af2'}
        padding={'0.5rem 1rem'}
        borderRadius={'0.5rem'}
        cursor={'pointer'}
        transition={'0.25s'}
        _hover={{ background: '#788ddd' }}
      >
        <Heading>
          <k.a
            href={'https://discord.gg/S6NYhQhkgK'}
            target={'_blank'}
            textDecoration={'none'}
            color={'white'}
          >
            Discordサーバーに参加する
          </k.a>
        </Heading>
      </Box>
    </Box>
  )
}

export default Home
