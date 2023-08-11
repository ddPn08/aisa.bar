import { createTheme } from '@kuma-ui/core'

const theme = createTheme({
    colors: {
        text: '#333',
        primary: '#57B1A1',
        secondary: '#F8F4EA',
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
})

type UserTheme = typeof theme

declare module '@kuma-ui/core' {
    export interface Theme extends UserTheme {}
}

export default theme
