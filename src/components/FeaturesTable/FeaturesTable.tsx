import "./style.scss";

import { isUndefined } from "lodash-es";
import { type CSSProperties, Fragment } from "react";

import FeaturesTableCell from "./components/FeaturesTableCell/FeaturesTableCell";
import { FeaturesTableDefguardLogo } from "./components/FeaturesTableDefguardLogo/FeaturesTableDefguardLogo";
import type { FeatureTableData } from "./types";

type TableProps = {
  data: FeatureTableData;
};

const FeaturesTable = ({ data }: TableProps) => {
  const featuresColCount = data.others.length + 1;

  const gridConfig = {
    "--table-cols": `repeat(${data.others.length + 1}, 140px)`,
  } as CSSProperties;

  return (
    <div className="features-table-scroll-wrapper">
      <section className="features-table" style={gridConfig}>
        <header>
          <div className="col-header left">
            <p>Feature</p>
          </div>
          <div className="col-header">
            <FeaturesTableDefguardLogo />
          </div>
          {data.others.map((o) => (
            <div className="col-header">
              <p>{o}</p>
            </div>
          ))}
        </header>
        <div className="table-rows">
          {data.groups.map((g, groupIndex) => (
            <Fragment key={groupIndex}>
              {!isUndefined(g.title) && g.title.length > 0 && (
                <div className="group-title-container">
                  <p className="group-title">{g.title}</p>
                </div>
              )}
              {g.rows.map((row) => (
                <div
                  className="row"
                  key={row.description.toLowerCase().trim().replace(" ", "")}
                >
                  <div className="row-description">
                    <p>{row.description}</p>
                  </div>
                  <div
                    className="status-container"
                    style={{
                      gridRow: 1,
                      gridColumn: `2 / ${featuresColCount + 2}`,
                    }}
                  >
                    {row.features.map((f, index) => (
                      <FeaturesTableCell
                        hover={f.hover}
                        link={f.link}
                        status={f.status}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesTable;
