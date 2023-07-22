/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "/wikipedia/commons/d/df/Hermoso_Atardecer_en_Popay%C3%A1n_%284279606793%29.jpg"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "/wikipedia/commons/6/63/Cerro_de_Munchique_en_atardecer_payan%C3%A9s._HDR._%283857625351%29.jpg"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "/wikipedia/commons/d/d8/Panoramica_de_Popay%C3%A1n_%28Cerro_el_Morro%29.jpg"
            }
        ]
    }
}

module.exports = nextConfig
