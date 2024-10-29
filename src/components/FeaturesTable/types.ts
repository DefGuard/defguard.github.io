export type FeatureTableData = {
  others: string[];
  groups: FeatureTableGroup[];
};

export type FeatureTableGroup = {
  title?: string;
  rows: FeatureTableRow[];
};

export type FeatureTableRow = {
  description: string;
  link?: string;
  features: FeatureTableCell[];
};

export type FeatureTableCell = {
  status: "yes" | "in-progress" | "no";
  hover?: string;
  link?: string;
};
