import { Box, Text, css, k } from '@kuma-ui/core'
import Link from 'next/link'

import OfficialTitle from '~icons/official/title'

const HeaderLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Box
      padding={'0.25rem 0.5rem'}
      borderRadius={'0.5rem'}
      transition={'0.5s'}
      _hover={{
        bg: 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Text
        as={Link}
        href={href}
        textDecoration={'none'}
        color={'colors.primary'}
        fontWeight={'bold'}
        fontSize={'1.2rem'}
      >
        {children}
      </Text>
    </Box>
  )
}

export const Header: React.FC = () => {
  return (
    <k.header
      height={'68px'}
      width={'100%'}
      bg={'white'}
      display={'flex'}
      alignItems={'center'}
      boxShadow={'0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.25)'}
    >
      <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
        <Link
          href={'/'}
          className={css`
            height: 48px;
            padding: 0.25rem 0;
          `}
        >
          <OfficialTitle
            className={css`
              height: 100%;
            `}
          />
        </Link>
        <HeaderLink href="/discord">Discord</HeaderLink>
      </Box>
    </k.header>
  )
}
