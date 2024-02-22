/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		MAP_KEY: process.env.REACT_APP_MAP_KEY,
	}
};

export default nextConfig;
