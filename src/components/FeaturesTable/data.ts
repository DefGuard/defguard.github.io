import type { FeatureTableData } from "./types";
export const featuresTableData: FeatureTableData = {
  others: ["firezone", "pritunl", "netbird"],
  groups: [
    {
      rows: [
        {
          description: "Truly Open Source & self-hosted ability",
          features: [
            {
              status: "yes",
            },
            {
              status: "no",
              link: "",
            },
            {
              status: "no",
              link: "",
            },
            {
              status: "yes",
            },
          ],
        },
      ],
    },
    {
      title: "Identity, SSO & User Management",
      rows: [
        {
          description: "Built in Identity Provider / SSO",
          features: [
            {
              status: "yes",
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
          description: "Secure User remote enrollment (link do dokumentacji)",
          features: [
            { status: "yes" },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "User onboarding after enrollment  (link do dokumentacji)",
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
          description: "Groups & ACLs",
          features: [
            {
              status: "yes",
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
      ],
    },
    {
      title: "Wireguard VPN",
      rows: [
        {
          description: "Wireguard VPN failover & clustering",
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
          description: "2FA for Wireguard",
          features: [
            {
              status: "yes",
              hover: "With session PSK keys",
            },
            {
              status: "no",
              hover: "2FA during application autorisation",
            },
            {
              status: "no",
              hover: "2FA during application autorisation",
            },
            {
              status: "no",
              hover: "2FA during application autorisation",
            },
          ],
        },
        {
          description: "Wireguard Road Warrior Server",
          features: [
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Mesh VPN",
            },
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Mesh VPN",
            },
          ],
        },
        {
          description: "Site-to-Site Wireguard VPN",
          features: [
            {
              status: "no",
              hover: "In development: Feb 2024",
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
          description: "Multiple VPNs/Locations",
          features: [
            {
              status: "yes",
            },
            {
              status: "in-progress",
              hover: "Based on mesh ACLS",
            },
            {
              status: "in-progress",
              hover: "Based on mesh ACLS",
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
              status: "no",
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
          description: "VPN Failover & Redundancy",
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
          description: "VPN Access based on ACLs & Groups",
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
          description: "Desktop Client support for any Wireguard server",
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
      ],
    },
    {
      title: "Enterprise Features",
      rows: [
        {
          description: "Secure architecture based on network segments (DMZ/Intranet/...)",
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
          description: "Kubernetes & HELM Deployment",
          features: [
            {
              status: "yes",
            },
            { status: "no" },
            { status: "no" },
            { status: "no" },
          ],
        },
        {
          description: "LDAP integration",
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
          description: "Yubikey Hardware Keys provisioning",
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
          description: "Email Notifications",
          features: [
            {
              status: "yes",
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
          description: "Forward Auth for reverse proxies",
          features: [
            {
              status: "yes",
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
          description: "Admin UI modules access  based on ACLs & Groups",
          features: [
            {
              status: "yes",
              hover: "Full groups in OpenID Connect - feb 2024",
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
          description: "Easy sending debug/suport information for selfhosted",
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
      ],
    },
  ],
};
