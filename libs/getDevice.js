function getDevice(useragent){

	const {
		browser,
		version,
		os,
		isDesktop,
		isMobile,
		isBot
	} = useragent

	const device = {
		browser,
		version,
		os,
		type: isDesktop 
			? "Desktop" 
			: isMobile 
				? "Mobile"
				: isBot 
					? "Bot"
					: "Unknown"
	}

	return JSON.parse(JSON.stringify(device))
}

module.exports = getDevice
