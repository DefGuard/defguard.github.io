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
          description: "",
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
      ],
    },
  ],
};
