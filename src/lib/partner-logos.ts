// Real brand logos via Simple Icons CDN (https://simpleicons.org).
// Rendered in monochrome on the marquee. Entries without a `slug` fall back
// to a styled text wordmark.
export type PartnerLogo = { name: string; slug?: string };

export const partnerLogos: PartnerLogo[] = [
  // Banking & Finance
  { name: "Absa", slug: "absa" },

  // Cyber Security
  { name: "Cisco", slug: "cisco" },
  { name: "Fortinet", slug: "fortinet" },
  { name: "Palo Alto Networks", slug: "paloaltonetworks" },
  { name: "CrowdStrike", slug: "crowdstrike" },
  { name: "Splunk", slug: "splunk" },
  { name: "Sophos", slug: "sophos" },
  { name: "Kaspersky", slug: "kaspersky" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "SentinelOne", slug: "sentinelone" },
  { name: "Trend Micro", slug: "trendmicro" },
  { name: "Tenable" },
  { name: "Rapid7" },

  // Cloud & Infrastructure
  { name: "Microsoft", slug: "microsoft" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Oracle", slug: "oracle" },
  { name: "IBM", slug: "ibm" },
  { name: "VMware", slug: "vmware" },
  { name: "Red Hat", slug: "redhat" },

  // Software Development
  { name: "GitHub", slug: "github" },
  { name: "GitLab", slug: "gitlab" },
  { name: "Atlassian", slug: "atlassian" },
  { name: "Docker", slug: "docker" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Node.js", slug: "nodedotjs" },

  // Data & Analytics
  { name: "Snowflake", slug: "snowflake" },
  { name: "Databricks", slug: "databricks" },
  { name: "Tableau", slug: "tableau" },
  { name: "Power BI", slug: "powerbi" },
  { name: "Elastic", slug: "elastic" },

  // Enterprise & Finance Systems
  { name: "SAP", slug: "sap" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "ServiceNow", slug: "servicenow" },
  { name: "Sage", slug: "sage" },
  { name: "QuickBooks", slug: "quickbooks" },

  // Telecom
  { name: "Safaricom" },
  { name: "Airtel", slug: "airtel" },

  // Energy & Oil
  { name: "Shell", slug: "shell" },
  { name: "TotalEnergies", slug: "totalenergies" },
  { name: "KenGen" },
  { name: "Kenya Power" },
  { name: "Vivo Energy" },
];
