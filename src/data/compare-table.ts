import type { FeatureTableData } from "../components/FeaturesTable/types";

export const featuresTableData: FeatureTableData = {
  others: ["openvpn", "firezone", "pritunl", "netbird"],
  groups: [
    {
      title: "Authentication and User Management",
      rows: [
        {
          description: "OpenID Connect Provider",
          features: [
            {
              status: "yes",
              hover: "Fully integrated, simplifying operations",
            },
            {
              status: "no",
              hover: "Requires 3rd party integration",
            },
            {
              status: "no",
              hover: "Requires 3rd party integration",
            },
            {
              status: "no",
              hover: "Requires 3rd party integration",
            },
            {
              status: "no",
              hover: "Requires 3rd party integration",
            },
          ],
        },
        {
          description: "Secure Remote User Registration/Enrollment",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/help/remote-user-enrollment",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "User onboarding process",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/help/remote-user-enrollment/user-onboarding-after-enrollment",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "Groups & ACLs",
          features: [
            {
              status: "in-progress",
              hover: "Groups released 0.10.0, ACLs comming to v1.1.0",
            },
            { status: "no" },
            {
              status: "no",
              hover: "Only VPN ACLs",
            },
            {
              status: "no",
              hover: "Only VPN ACLs",
            },
            {
              status: "no",
              hover: "Only VPN ACLs",
            },
          ],
        },
        {
          description: "LDAP Synchronization",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/ldap-synchronization-setup",
            },
            { status: "no" },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Forward Authentication for Reverse Proxy",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/forward-auth",
            },
            { status: "no" },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
      ],
    },
    {
      title: "VPN Network Management",
      rows: [
        {
          description: "WireGuard® VPN Configuration",
          features: [
            { status: "no" },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
          ],
        },
        {
          description: "MFA/2FA for WireGuard®",
          features: [
            {
              status: "yes",
              hover: "With TOTP/Email + WireGuard® Pre-Shared session keys (PSK)",
            },
            {
              status: "yes",
              hover: "For OpenVPN",
            },
            {
              status: "no",
              hover: "Only 2FA during application authorization",
            },
            {
              status: "no",
              hover: "Only MFA during application authorization",
            },
            {
              status: "no",
              hover: "Only 2FA during application authorization",
            },
          ],
        },
        {
          description: "VPN access based on groups",
          features: [
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Requires OpenVPN AS",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
          ],
        },
        {
          description: "ACL (firewall) network control for VPN",
          features: [
            {
              status: "in-progress",
              hover: "Planned for release 1.1",
            },
            {
              status: "in-progress",
              hover: "Requires OpenVPN AS",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
          ],
        },
        {
          description: "Dashboard with statistics for each user & device",
          features: [
            {
              status: "yes",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Desktop Clients",
          features: [
            {
              status: "yes",
              link: "/client/",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
            {
              status: "yes",
            },
          ],
        },
        {
          description: "Desktop Client support for multiple selfhosted instances",
          features: [
            {
              status: "yes",
              link: "/client/",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Desktop Client support for any WireGuard® server",
          features: [
            {
              status: "yes",
              link: "/client/",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Multiple VPN Locations (networks/sites)",
          features: [
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Requires multiple VPN instance deployments",
            },
            {
              status: "in-progress",
              hover: "Based on mesh ACLS",
            },
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Based on mesh ACLS",
            },
          ],
        },
        {
          description: "Multiple Gateway Support and Failover",
          features: [
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Requires OpenVPN AS",
            },
            {
              status: "no",
            },
            {
              status: "yes",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Site-to-Site WireGuard® VPN",
          features: [
            {
              status: "in-progress",
              hover: "Manual or requires OpenVPN AS",
            },
            {
              status: "in-progress",
              hover: "Planned for release 1.1",
            },
            {
              status: "in-progress",
              hover: "Mesh can be treated like specific s2s",
            },
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Mesh can be treated like specific s2s",
            },
          ],
        },
        {
          description: "WireGuard® Server Configuration Import",
          features: [
            {
              status: "yes",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Mesh VPN",
          features: [
            {
              status: "in-progress",
              hover: "Planned for release 1.2",
            },
            {
              status: "no",
            },
            {
              status: "yes",
            },
            {
              status: "no",
            },
            {
              status: "yes",
            },
          ],
        },
        {
          description: "NAT Traversal",
          features: [
            {
              status: "in-progress",
              hover: "Planned for release 1.2",
            },
            {
              status: "no",
            },
            {
              status: "yes",
            },
            {
              status: "no",
            },
            {
              status: "yes",
            },
          ],
        },
      ],
    },
    {
      title: "Security Architecture and Deployment",
      rows: [
        {
          description: "Secure rchitecture based on network segments (DMZ/Intranet/...)",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/#what-is-defguard",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Kubernetes & HELM Deployment",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/setting-up-your-instance/kubernetes",
            },
            {
              status: "no",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "Yubikey Hardware Keys provisioning",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/yubikey-provisioning",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
      ],
    },
    {
      title: "Communication and Integration",
      rows: [
        {
          description: "Email Notifications",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/help/setting-up-smtp-for-email-notifications",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "Gateway live monitoring & notification",
          features: [
            {
              status: "yes",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Webhooks",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/webhooks",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Easy sending support information for selfhosted",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/help/sending-support-info",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
        {
          description: "Forward Auth for reverse proxies",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/forward-auth",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "SSH keys management & integration for server login",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/ssh-authentication",
            },
            { status: "no" },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "in-progress",
              hover: "ssh management for peers",
            },
          ],
        },
        {
          description: "LDAP integration",
          features: [
            {
              status: "yes",
              link: "https://docs.defguard.net/features/ldap-synchronization-setup",
            },
            { status: "yes" },
            {
              status: "no",
            },
            {
              status: "no",
            },
            {
              status: "no",
            },
          ],
        },
      ],
    },
  ],
};
