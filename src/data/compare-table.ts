import type { FeatureTableData } from "../components/FeaturesTable/types";

export const featuresTableData: FeatureTableData = {
    others: ["firezone", "pritunl", "netbird"],
    groups: [
      {
        rows: [
          {
            description: "Truly Open Source & self-hosted and commercial use",
            features: [
              {
                status: "yes",
              },
              {
                status: "no",
                link: "https://github.com/firezone/firezone/blob/main/elixir/LICENSE",
              },
              {
                status: "no",
                link: "https://github.com/pritunl/pritunl/blob/master/LICENSE",
              },
              {
                status: "yes",
              },
            ],
          },
        ],
      },
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
            ],
          },
          {
            description: "Secure Remote User Registration/Enrollment",
            features: [
              { status: "yes",
                link: "https://defguard.gitbook.io/defguard/help/remote-user-enrollment",
              },
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
                link: "https://defguard.gitbook.io/defguard/help/remote-user-enrollment/user-onboarding-after-enrollment",
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
            description: "Groups & ACLs",
            features: [
              {
                status: "in-progress",
                hover: "Full groups in OpenID Connect - feb 2024",
              },
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
                link: "https://defguard.gitbook.io/defguard/features/ldap-synchronization-setup"
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
            description: "Forward Authentication for Reverse Proxy",
            features: [
              {
                status: "yes",
                link: "https://defguard.gitbook.io/defguard/features/forward-auth"
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
        title: "VPN Network Management",
        rows: [
          {
            description: "WireGuard VPN Configuration",
            features: [
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
            description: "MFA/2FA for WireGuard",
            features: [
              {
                status: "yes",
                hover: "With TOTP/Email + WireGuard Pre-Shared session keys (PSK)",
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
            description: "Multiple VPN Locations (networks/sites)",
            features: [
              {
                status: "yes",
              },
              {
                status: "no",
                hover: "Based on mesh ACLS",
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
            description: "Multiple Gateway Support and Failover",
            features: [
              {
                status: "yes",
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
            description: "Site-to-Site WireGuard VPN",
            features: [
              {
                status: "in-progress",
                hover: "In development - est. Feb 2024",
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
            description: "WireGuard Server Configuration Import",
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
            ],
          },
          {
            description: "Mesh VPN",
            features: [
              {
                status: "in-progress",
                hover: "In development: est. Q1 2024",
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
                hover: "In development: est. Q1 2024",
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
            description: "VPN Access based on ACLs & Groups",
            features: [
              {
                status: "in-progress",
                hover: "In development - est. Feb 2024",
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
                status: "no",
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
            ],
          },
          {
            description: "Desktop Client support for any WireGuard server",
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
                link: "https://defguard.gitbook.io/defguard/#what-is-defguard",
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
                link: "https://defguard.gitbook.io/defguard/features/setting-up-your-instance/kubernetes",
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
                link: "https://defguard.gitbook.io/defguard/features/yubikey-provisioning",
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
        ]
      },
      {
        title: "Communication and Integration",
        rows: [        
          {
            description: "Email Notifications",
            features: [
              {
                status: "yes",
                link: "https://defguard.gitbook.io/defguard/help/setting-up-smtp-for-email-notifications",
              },
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
            ],
          },
          {
            description: "Webhooks",
            features: [
              {
                status: "yes",
                link: "https://defguard.gitbook.io/defguard/features/webhooks",
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
                link: "https://defguard.gitbook.io/defguard/help/sending-support-info",
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
                link: "https://defguard.gitbook.io/defguard/features/forward-auth",
              },
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
                link: "https://defguard.gitbook.io/defguard/features/ssh-authentication",
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
            description: "LDAP integration",
            features: [
              {
                status: "yes",
                link: "https://defguard.gitbook.io/defguard/features/ldap-synchronization-setup",
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
            description: "Web3 Wallet Verification",
            features: [
              {
                status: "yes",
                hover: "Supports cryptocurrency wallet verification in user profile",
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
    ],
  };
  