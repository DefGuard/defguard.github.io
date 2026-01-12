---
title: "OPNsense WireGuard setup and configuration: the definitive guide"
seoTitle: "A practical OPNsense WireGuard guide, from road warrior setup and tuning to a Defguard-backed identity and policy upgrade for teams."
description: "A practical OPNsense WireGuard guide, from road warrior setup and tuning to a Defguard-backed identity and policy upgrade for teams."
publishDate: 2026-01-15
author: "Jacob Folbrycht"
image: "/images/blog/from-2025-to-2026/Futur_1.png"
tags: [ "opnsense wireguard setup", "opnsense wireguard configuration", "opnsense wireguard road warrior", "wireguard opnsense guide", "opnsense vpn", "opnsense vpn setup", "opnsense firewall vpn", "opnsense wireguard plugin", "os-wireguard", "wireguard road warrior setup", "wireguard remote access", "secure remote access", "split tunnel wireguard", "full tunnel wireguard", "wireguard allowedips", "allowedips explained", "wireguard peer configuration", "wireguard instance opnsense", "wireguard interface assignment", "opnsense firewall rules wireguard", "opnsense nat wireguard", "outbound nat opnsense", "wireguard listen port", "wireguard endpoint", "dynamic dns wireguard", "wireguard client config", "wireguard config file", "wireguard key generation", "wg genkey", "wg pubkey", "persistentkeepalive", "wireguard mobile stability", "wireguard troubleshooting", "opnsense wireguard troubleshooting", "no handshake wireguard", "wireguard connects but no access", "wireguard dns issues", "wireguard mtu", "wireguard mss clamping", "opnsense mss clamping", "opnsense normalization rule", "tcp mss 1380", "fragmentation issues vpn", "wireguard performance tuning", "openvpn to wireguard migration", "replace openvpn opnsense", "msp vpn deployment", "homelab wireguard", "network engineer vpn guide", "open source firewall", "vendor lock-in free vpn", "enterprise wireguard", "wireguard at scale", "wireguard vpn management", "wireguard control plane", "defguard", "defguard wireguard", "defguard gateway", "defguard core", "defguard opnsense", "wireguard mfa", "wireguard sso", "identity-aware vpn", "identity-based access control", "vpn identity integration", "oidc vpn", "ldap vpn", "active directory vpn", "entra id vpn", "okta wireguard", "keycloak wireguard", "zero trust network access", "zero trust vpn", "ztna wireguard", "pre-handshake authentication", "protocol-level enforcement", "device-based access control", "vpn lifecycle management", "vpn offboarding", "vpn access revocation", "audit logging vpn", "siem integration vpn", "self-hosted vpn", "data sovereignty vpn", "eu data residency vpn", "cloud control plane risk"]
draft: false
---
**Reading time:** 10 min
---


The definitive **OPNsense WireGuard** configuration guide for network engineers, homelabbers, and MSPs. From road warrior setup to enterprise-grade identity management with Defguard.

## The TL;DR Bits & Key Takeaways

- OPNsense WireGuard road warrior setup requires: instance, peers, interface assignment, firewall rules, and (optionally) NAT
- MSS clamping fixes "some sites don't load" issues caused by MTU overhead
- AllowedIPs means different things on server (source validation) vs client (routing decisions)
- Defguard adds identity, MFA, and lifecycle management while keeping OPNsense as the edge firewall

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Part A: Road Warrior Setup](#part-a-opnsense-wireguard-road-warrior-setup)
4. [Part B: MSS Clamping](#part-b-mss-clamping-and-normalization)
5. [Part C: Client Configuration](#part-c-client-configuration)
6. [Part D: Troubleshooting](#part-d-troubleshooting-matrix)
7. [Part E: Defguard Integration](#part-e-enterprise-upgrade-with-defguard)
8. [Part F: Comparison Table](#part-f-plain-opnsense-wireguard-vs-defguard-managed)
9. [FAQ](#frequently-asked-questions)

---

## Introduction

WireGuard has become the modern standard for VPN connectivity: minimal attack surface, cryptographically sound defaults, and kernel-level performance. OPNsense, the open-source firewall platform, includes WireGuard as an installable plugin, making it a popular choice for network engineers who want modern VPN capabilities without vendor lock-in. The combination of **OPNsense WireGuard** provides a solid foundation for secure remote access.

However, native WireGuard—on any platform—lacks enterprise features: there is no concept of user identity (only cryptographic keys), no multi-factor authentication at the protocol level, and no centralized lifecycle management. This is where Defguard enters. Defguard treats WireGuard as the data plane while adding identity verification, MFA enforcement during the handshake, and policy-based access control. You keep OPNsense as your edge firewall; Defguard provides the control plane.

This guide covers the complete workflow: from baseline OPNsense WireGuard road warrior configuration, through the reliability settings that prevent common "it connects but doesn't work" issues, to upgrading the same deployment with enterprise-grade identity management. Whether you're a homelab enthusiast, an MSP deploying for clients, or a security team evaluating VPN modernization, you'll find actionable configuration steps here.

**External Resources:**
- [OPNsense WireGuard Documentation](https://docs.opnsense.org/manual/how-tos/wireguard-client.html)
- [Defguard Gateway Documentation](https://docs.defguard.net/features/gateway)

---

## Prerequisites

### OPNsense Requirements

- OPNsense 23.x or newer (WireGuard plugin support)
- WireGuard plugin installed: System → Firmware → Plugins → os-wireguard
- Public IP or port forward to OPNsense WAN for the WireGuard listen port
- DNS resolution for your endpoint (static IP or dynamic DNS)

### IP Planning

- **Tunnel subnet:** Choose a unique /24 that doesn't overlap with any client local networks (e.g., 10.10.10.0/24)
- **Internal subnets:** Document which networks clients should access (e.g., 192.168.1.0/24, 172.16.0.0/16)
- **Listen port:** Default 51820/UDP, or choose another unused port

### Tunnel Type Decision

| Type | Description | Best For |
|------|-------------|----------|
| **Split Tunnel** | Only routes to internal networks go through VPN. Internet traffic uses client's local connection. | Performance, accessing internal resources only |
| **Full Tunnel** | All traffic routes through VPN. Requires outbound NAT on OPNsense. | Security policy enforcement, untrusted networks |

---

## Part A: OPNsense WireGuard Road Warrior Setup

This section follows the official [OPNsense WireGuard Road Warrior guide](https://docs.opnsense.org/manual/how-tos/wireguard-client.html) with additional context on why each step matters.

### Step 1: Create WireGuard Instance (Server)

**Navigate to:** VPN → WireGuard → Instances → Add

| Setting | Value |
|---------|-------|
| Name | wg0 (or descriptive name) |
| Listen Port | 51820 (or custom) |
| Tunnel Address | 10.10.10.1/24 |
| Keys | Generate (click the gear icon) |

**Why it matters:** The tunnel address subnet (e.g., /24) determines how many peers you can have. OPNsense becomes 10.10.10.1; each peer gets a unique IP from this range.

### Step 2: Add Peers (One Per Device)

**Navigate to:** VPN → WireGuard → Peers → Add

| Setting | Value |
|---------|-------|
| Name | laptop-john, phone-jane, etc. |
| Public Key | From client (generate on client device) |
| Allowed IPs | 10.10.10.2/32 (unique per peer) |
| Instance | wg0 (select the instance created above) |

**AllowedIPs on server peer:** This defines which source IPs are valid from this peer. Use /32 for the peer's tunnel IP only. If the peer should route other networks (e.g., site-to-site), include those subnets.

### Step 3: Assign Interface

**Navigate to:** Interfaces → Assignments

Select the WireGuard device (wg0) from the dropdown and add it. Name it descriptively (e.g., "WIREGUARD" or "VPN_WG").

**Why assign an interface?** Interface assignment enables: firewall rules specific to WireGuard traffic, outbound NAT configuration, traffic shaping, and visibility in the dashboard. It also automatically creates routes.

### Step 4: Firewall Rules

**Navigate to:** Firewall → Rules

#### WAN Rule (allow inbound):

| Setting | Value |
|---------|-------|
| Interface | WAN |
| Protocol | UDP |
| Destination Port | 51820 |
| Action | Pass |

#### WireGuard Interface Rule (allow tunnel traffic):

| Setting | Value |
|---------|-------|
| Interface | WIREGUARD |
| Source | WIREGUARD net (or 10.10.10.0/24) |
| Destination | Your internal networks |
| Action | Pass |

### Step 5: NAT Configuration (Full Tunnel Only)

**Navigate to:** Firewall → NAT → Outbound

Only required if clients need internet access through the tunnel (full tunnel mode). Skip for split tunnel with internal access only.

#### Outbound NAT Rule:

| Setting | Value |
|---------|-------|
| Mode | Hybrid or Manual |
| Interface | WAN |
| Source | 10.10.10.0/24 (tunnel subnet) |
| Translation | Interface Address |

---

## Part B: MSS Clamping and Normalization

### The Problem

You connect, handshake completes, you can ping internal hosts, but: some websites don't fully load, SSH sessions hang after authentication, large file transfers stall, or HTTPS connections time out on certain sites.

### Why This Happens

WireGuard adds overhead (typically 60-80 bytes) to each packet. Standard Ethernet MTU is 1500 bytes. With overhead, effective MTU drops to ~1420. TCP connections negotiate MSS (Maximum Segment Size) during handshake. If MSS is too large, packets get fragmented. Some networks drop fragmented packets or ICMP "fragmentation needed" messages, causing silent failures.

### The Fix: MSS Clamping via Normalization

**Navigate to:** Firewall → Settings → Normalization

#### Create Normalization Rule:

| Setting | Value |
|---------|-------|
| Interface | WIREGUARD (your WireGuard interface) |
| Direction | Any |
| Protocol | TCP |
| Max MSS | 1380 |

**MSS Value Selection:** Start with 1380. If issues persist, try 1360 or 1340. If stable at 1380, you can try increasing to 1400 for slightly better throughput. The goal is the highest value that works reliably.

---

## Part C: Client Configuration

### Generating Client Keys

```bash
# Generate private key
wg genkey > privatekey

# Derive public key
cat privatekey | wg pubkey > publickey
```

Keep the private key on the client only. Copy the public key to OPNsense peer configuration.

### Client Configuration File

```ini
[Interface]
PrivateKey = <client-private-key>
Address = 10.10.10.2/32
DNS = 10.10.10.1  # or your internal DNS

[Peer]
PublicKey = <opnsense-public-key>
AllowedIPs = 192.168.1.0/24, 172.16.0.0/16  # split tunnel
# AllowedIPs = 0.0.0.0/0  # full tunnel
Endpoint = vpn.example.com:51820
PersistentKeepalive = 25
```

### AllowedIPs Explained

| Location | Meaning |
|----------|---------|
| **On server (OPNsense peer)** | Source validation: which IPs can this peer send FROM |
| **On client config** | Routing decision: which destinations should route THROUGH the tunnel |

**Split tunnel example:**
- Client AllowedIPs: `192.168.1.0/24, 172.16.0.0/16` — only these go through VPN
- Server peer AllowedIPs: `10.10.10.2/32` — client can only source from its tunnel IP

**Full tunnel example:**
- Client AllowedIPs: `0.0.0.0/0, ::/0` — everything goes through VPN
- Server peer AllowedIPs: `10.10.10.2/32` — still just the tunnel IP

### DNS Configuration

- **Split tunnel:** Point to internal DNS server if you need internal name resolution
- **Full tunnel:** Point to OPNsense (10.10.10.1 if running Unbound) or internal DNS
- **Client-side:** Verify DNS= line matches a reachable resolver from inside the tunnel

---

## Part D: Troubleshooting Matrix

Common OPNsense WireGuard issues mapped to causes and fixes. Reference this when "it connects but doesn't work."

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| No handshake / "Peer has no recent handshake" | Firewall blocking UDP port, wrong endpoint, or key mismatch | Verify WAN rule allows UDP on listen port. Check peer public key matches. Confirm endpoint is correct public IP/FQDN. |
| Handshake completes but cannot reach internal hosts | Missing firewall rule on WireGuard interface or no route back | Add allow rule on WireGuard interface: source = tunnel subnet, destination = internal subnets. Ensure OPNsense knows route to tunnel subnet. |
| Can ping IPs but DNS resolution fails | DNS server not reachable or not specified in client config | Verify DNS= line in client config points to reachable resolver. If using internal DNS, ensure firewall allows UDP 53 from tunnel subnet. |
| Some websites do not load / TCP stalls | MTU/MSS mismatch causing fragmentation issues | Apply MSS clamping normalization rule on WireGuard interface. Start with MSS 1380 and adjust upward. |
| Full tunnel: no internet access | Missing outbound NAT rule for tunnel subnet | Add outbound NAT rule: Interface = WAN, Source = tunnel subnet (e.g., 10.10.10.0/24), Translation = Interface Address. |
| Client shows connected but wrong routes | AllowedIPs mismatch between server peer config and client config | On OPNsense peer: AllowedIPs = client tunnel IP only. On client config: AllowedIPs = what the client should route through tunnel. |
| Overlapping subnets cause routing conflicts | Client local network overlaps with remote network or tunnel subnet | Use a unique, uncommon tunnel subnet (avoid 10.0.0.0/24, 192.168.1.0/24). Consider /30 or /31 for point-to-point. |
| Mobile client disconnects when phone sleeps | Missing PersistentKeepalive setting | Add PersistentKeepalive = 25 to peer config on OPNsense and/or client. Required for NAT traversal. |
| Key mismatch errors in logs | Public/private key pair copied incorrectly | Regenerate keys on client. Copy public key exactly (no extra whitespace) to OPNsense peer config. |
| Firewall rule order blocks traffic | Deny rule processed before allow rule | Move WireGuard allow rules above any block rules. OPNsense processes rules top-down, first match wins. |

---

## Part E: Enterprise Upgrade with Defguard

The baseline OPNsense WireGuard setup works well for small deployments. As you scale to more users, locations, or compliance requirements, manual key management and lack of identity become operational problems. Defguard solves this while keeping OPNsense as your edge firewall.

### Architecture: Keep OPNsense as Edge, Add Defguard for Control

| Component | Description |
|-----------|-------------|
| **Defguard Core** | Private deployment. Manages users, devices, policies, MFA, and audit logs. Never exposed to internet. |
| **Defguard Gateway** | Runs on or alongside OPNsense. Handles WireGuard with identity verification. Replaces native WireGuard instance. |
| **OPNsense** | Continues handling firewall, routing, NAT. Gateway integrates as a network endpoint. |

### Step 1: Deploy Defguard Core

**Private server, Docker or native**

Core manages the control plane: user accounts, device enrollments, MFA settings, access policies, and audit logging. Deploy on a private server that doesn't need internet exposure.

- Configure LDAP/AD sync for existing user directories
- Set MFA policies (TOTP, WebAuthn)
- Define access groups and policies

### Step 2: Create VPN Location in Defguard

[Documentation](https://docs.defguard.net/deployment-strategies/gateway)

A "location" in Defguard represents a WireGuard endpoint (gateway). Configure:

- Gateway public endpoint (your OPNsense WAN IP/FQDN)
- WireGuard listen port
- Allowed IP ranges for clients
- DNS settings

After saving, Defguard provides a **Gateway token** and **gRPC URL**. These connect the Gateway to Core.

### Step 3: Run Defguard Gateway on OPNsense

[OPNsense Gateway Documentation](https://docs.defguard.net/deployment-strategies/running-gateway-on-opnsense-firewall)

The Defguard Gateway can run directly on OPNsense or on a separate host behind OPNsense.

**Configuration requires:**
- **Token:** From step 2 (Gateway token)
- **gRPC URL:** Core's internal address
- **Interface:** WireGuard interface name
- **Listen port:** Same as configured in location

Firewall and NAT rules from Part A still apply. The Gateway replaces the native WireGuard instance but uses the same network path.

### Step 4: Client Onboarding with MFA

Users enroll devices through the Defguard client or web portal:

- User authenticates with credentials + MFA
- Device key pair generated locally
- Configuration delivered via QR code or file
- Each connection requires MFA re-verification (policy-dependent)

**Offboarding:** When a user leaves: disable in Defguard Core → their devices immediately lose access across all gateways. No manual key revocation per location required.

### Step 5: Identity-Based Access Policies

Beyond "user can connect," Defguard enables granular policies:

```
# Example policy set
Engineering group → Access: dev-servers, staging-env
Finance group → Access: erp-system, reporting-db
Contractors → Access: specific-project-subnet, time-limited
All users → Require MFA: every 24 hours or on network change
```

Policies are enforced at the Gateway level—before the tunnel fully establishes. This is protocol-level Zero Trust, not application-layer controls.

---

## Part F: Plain OPNsense WireGuard vs Defguard-Managed

| Capability | Plain OPNsense WireGuard | Defguard + OPNsense |
|------------|--------------------------|---------------------|
| User lifecycle management | Manual key distribution and revocation | Automated enrollment, instant revocation via Core |
| Multi-factor authentication | Not available natively | TOTP/WebAuthn enforced at tunnel establishment |
| Key distribution | Manual secure transfer required | Self-service enrollment with QR codes |
| Key rotation | Manual process, error-prone | Policy-driven automatic rotation |
| Policy granularity | IP-based firewall rules only | Identity + group + time-based policies |
| Audit logging | Basic connection logs in OPNsense | Full audit trail: who, when, what device, MFA method |
| Multi-gateway support | Manual configuration per location | Centralized management, single control plane |
| Directory integration | Not available | LDAP/Active Directory sync |
| Offboarding | Must manually remove keys from all locations | Disable user → access revoked everywhere |
| Operational overhead | Scales linearly with users and locations | Constant overhead, centralized operations |

---

## Frequently Asked Questions

### How do I set up OPNsense WireGuard for road warrior users?

Create a WireGuard instance under VPN → WireGuard → Instances with a tunnel address subnet (e.g., 10.10.10.1/24). Add each user as a peer with a unique tunnel IP. Assign the interface, create WAN and WireGuard interface firewall rules, and configure NAT if needed. See Part A of this guide for step-by-step instructions.

### Why does OPNsense WireGuard connect but I cannot access anything?

This is typically a firewall or routing issue. Verify you have an allow rule on the WireGuard interface permitting traffic from the tunnel subnet to your internal networks. Check that OPNsense has a route to the tunnel subnet (automatic if interface is assigned). Review AllowedIPs on both server and client.

### Why do only some websites load over OPNsense WireGuard?

This symptom indicates MTU/MSS issues. WireGuard has overhead that reduces effective MTU. Apply MSS clamping via Firewall → Normalization: create a rule for the WireGuard interface with Max MSS around 1380. Adjust upward if stable. See Part B of this guide.

### Do I need NAT for OPNsense WireGuard?

It depends on your use case. Split tunnel accessing only internal resources: usually no NAT needed, just proper routing. Full tunnel with internet egress: yes, add an outbound NAT rule on WAN with source = tunnel subnet, translation = interface address.

### What is MSS clamping in OPNsense and do I need it for WireGuard?

MSS (Maximum Segment Size) clamping reduces the TCP segment size to prevent fragmentation issues caused by WireGuard overhead. Apply it via Firewall → Settings → Normalization if you experience TCP stalls, partial page loads, or SSH connections hanging. Start with MSS 1380.

### What does AllowedIPs mean in WireGuard on OPNsense?

AllowedIPs has two roles: on the server peer config, it defines which source IPs are valid from that peer (usually the peer tunnel IP). On the client config, it defines which destination IPs should be routed through the tunnel. 0.0.0.0/0 = full tunnel; specific subnets = split tunnel.

### Can I use Defguard with OPNsense as the gateway?

Yes. Deploy Defguard Core privately, create a VPN location, then run the Defguard Gateway on or alongside OPNsense. The Gateway handles WireGuard with identity and MFA while OPNsense provides firewall and routing. See Part E of this guide.

### How do I enforce MFA for WireGuard?

Native OPNsense WireGuard does not support MFA. Defguard adds this capability by requiring TOTP or WebAuthn verification before the WireGuard session can establish. The MFA challenge occurs during the handshake, not at a separate portal.

### How do I troubleshoot "no handshake" in OPNsense WireGuard?

Check: 1) WAN firewall rule allows UDP on the listen port. 2) Peer public key on OPNsense matches client private key pair. 3) Client endpoint points to correct public IP/FQDN and port. 4) NAT/port forwarding is configured if OPNsense is behind another device.

### What WireGuard MTU should I use on OPNsense?

WireGuard default is 1420. If you experience issues, try 1400 or 1380. The MTU is set on the WireGuard instance in OPNsense. Alternatively, keep default MTU and use MSS clamping to handle TCP properly.

### How do I migrate from OpenVPN to WireGuard on OPNsense?

Plan your IP scheme (tunnel subnet must differ from OpenVPN). Install the WireGuard plugin. Configure instances and peers. Generate new keys for all clients. Run both in parallel during migration. Test thoroughly before decommissioning OpenVPN.

### Why is my WireGuard connection unstable on mobile?

Mobile devices entering sleep mode or switching networks can break the connection. Add PersistentKeepalive = 25 (seconds) to the peer configuration. This sends a keepalive packet every 25 seconds to maintain NAT mappings and detect disconnections.

---

## Conclusion

### Baseline Success Criteria

- Handshake completes within seconds of client connecting
- All internal resources accessible (ping, SSH, HTTP/S)
- DNS resolution works for internal and external names
- No TCP stalls or partial page loads (MSS clamping verified)
- Mobile clients remain connected through sleep/wake cycles

### Enterprise Upgrade Path

When manual key management, lack of MFA, or compliance requirements become blockers:

1. Deploy Defguard Core on private infrastructure
2. Create VPN location matching your OPNsense configuration
3. Run Defguard Gateway on or alongside OPNsense
4. Migrate users to Defguard client with self-service enrollment
5. Enable MFA policies and directory sync

---

## Ready to Add Enterprise Features to OPNsense WireGuard?

Deploy Defguard to add identity, MFA, and lifecycle management while keeping OPNsense as your edge firewall.

- [Assess Your Environment](/replacement-wizard)
- [View Gateway Docs](https://docs.defguard.net/deployment-strategies/running-gateway-on-opnsense-firewall)
