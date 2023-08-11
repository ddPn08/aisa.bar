const { withKumaUI } = require('@kuma-ui/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    webpack(config) {
        config.plugins.push(
            require('unplugin-icons/webpack')({
                compiler: 'jsx',
                jsx: 'react',
                customCollections: {
                    official:
                        require('unplugin-icons/loaders').FileSystemIconLoader(
                            './assets/icons/official',
                        ),
                },
            }),
        )
        return config
    },
}

module.exports = withKumaUI(nextConfig)
