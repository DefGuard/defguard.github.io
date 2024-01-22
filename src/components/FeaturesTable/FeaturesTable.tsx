import type { FeatureTableData } from "./types";
import "./style.scss";
import { isUndefined } from "lodash-es";
import FeaturesTableCell from "./components/FeaturesTableCell/FeaturesTableCell";
import { Fragment } from "preact/jsx-runtime";
import type { CSSProperties } from "preact/compat";
import { FeaturesTableDefguardLogo } from "./components/FeaturesTableDefguardLogo/FeaturesTableDefguardLogo";

type TableProps = {
  data: FeatureTableData;
};

const FeaturesTable = ({ data }: TableProps) => {
  const featuresColCount = data.others.length + 1;

  const gridConfig = {
    "--table-cols": `repeat(${data.others.length + 1}, 140px)`,
  } as CSSProperties;

  return (
    <div class="features-table-scroll-wrapper">
      <section class="features-table" style={gridConfig}>
        <header>
          <div class="col-header left">
            <p>Feature</p>
          </div>
          <div class="col-header">
            <FeaturesTableDefguardLogo />
          </div>
          {data.others.map((o) => (
            <div class="col-header">
              <p>{o}</p>
            </div>
          ))}
        </header>
        <div class="table-rows">
          {data.groups.map((g, groupIndex) => (
            <Fragment key={groupIndex}>
              {!isUndefined(g.title) && g.title.length > 0 && (
                <div class="group-title-container">
                  <p class="group-title">{g.title}</p>
                </div>
              )}
              {g.rows.map((row) => (
                <div
                  class="row"
                  key={row.description.toLowerCase().trim().replace(" ", "")}
                >
                  <div class="row-description">
                    <p>{row.description}</p>
                  </div>
                  <div
                    class="status-container"
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
