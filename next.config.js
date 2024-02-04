/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
     images: { unoptimized: true },
    env: { MONGODB_URL: "mongodb+srv://rajnishmig51:CKSRU2AztMpZoAbi@cluster0.ypskhez.mongodb.net/?retryWrites=true&w=majority" }
}

module.exports = nextConfig
