export async function detectOperatingSystem(): Promise<string> {
  const userAgent = window.navigator.userAgent;

  if (/Windows NT/.test(userAgent)) {
    return "Windows";
  } else if (/Mac OS X/.test(userAgent)) {
    return await getArchitecture()
      .then((val) => val)
      .catch((error) => "Unknown OS");
  } else if (/CrOS/.test(userAgent)) {
    return "Chrome OS";
  } else if (/Linux/.test(userAgent)) {
    return "Linux";
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    return "iOS";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else {
    return "Unknown OS";
  }
}

async function getArchitecture(): Promise<"Intel" | "ARM" | "Unknown OS"> {
  if (navigator.userAgentData) {
    const uaData = await navigator.userAgentData.getHighEntropyValues([
      "platform",
      "architecture",
    ]);
    if (uaData.platform === "macOS" && uaData.architecture === "arm") {
      return "ARM";
    } else if (uaData.platform === "macOS") {
      return "Intel";
    }
  } else {
    // Fallback using userAgent string analysis
    const isARM = /mac os x.*(arm64|aarch64)/i.test(navigator.userAgent);
    if (isARM) return "ARM";
    const isIntel = /mac os x.*(x86_64|intel)/i.test(navigator.userAgent);
    if (isIntel) return "Intel";
  }
  return "ARM";
}
