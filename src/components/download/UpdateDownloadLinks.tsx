import { useEffect } from "react";
import { useAppStore } from "../clientStores/appStore";

// Function to generate download URL based on type and version
function getDownloadUrl(type: string, version: string): string {
  const baseUrl = `https://github.com/DefGuard/client/releases/download/v${version}`;
  
  switch (type) {
    case "windows-msi":
      return `${baseUrl}/Defguard_${version}_x64_en-US.msi`;
    case "debian-x86":
      return `${baseUrl}/defguard-client_${version}_amd64.deb`;
    case "debian-arm":
      return `${baseUrl}/defguard-client_${version}_arm64.deb`;
    case "debian12-x86":
      return `${baseUrl}/defguard-client${version}_amd64_ubuntu-22-04-lts.deb`;
    case "debian12-arm":
      return `${baseUrl}/defguard-client${version}_arm64_ubuntu-22-04-lts.deb`;
    case "fedora-x86":
      return `${baseUrl}/defguard-client-${version}-1.x86_64.rpm`;
    case "fedora-arm":
      return `${baseUrl}/defguard-client-${version}-1.aarch64.rpm`;
    default:
      return "";
  }
}

export const UpdateDownloadLinks = () => {
  const version = useAppStore((s) => s.version);

  useEffect(() => {
    if (!version) return;

    const downloadLinks = document.querySelectorAll<HTMLAnchorElement>("[data-download-type]");
    
    downloadLinks.forEach((link) => {
      const type = link.getAttribute("data-download-type");
      if (type) {
        const newUrl = getDownloadUrl(type, version);
        if (newUrl) {
          link.href = newUrl;
        }
      }
    });
  }, [version]);

  return null;
};
