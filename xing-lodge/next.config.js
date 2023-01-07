/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["seeklogo.com","images.pexels.com","links.papareact.com"],
  },
  env:{
    mapbox_key:"pk.eyJ1IjoiMHhudW5hbmEiLCJhIjoiY2xjbHd4ZjBsMDNnOTNxbXE1ajdnMG83NyJ9.8rPbxCdMVyk6tMS52CNKfw"
  },
 reactStrictMode: true,
}

module.exports = nextConfig
