import "./style.scss";

import clsx from "clsx";
import { useMemo, useState } from "react";
import Markdown from "react-markdown";
import rehypeR from "rehype-raw";

import type { PricingSchema } from "../../content/config";

type PricingData = PricingSchema & { content: string; id: string | number };

type PricingProps = {
  data: PricingData[];
  subtitle?: string;
};

enum PricingPlan {
  ANNUAL,
  MONTHLY,
}

export const PricingCards = ({ data, subtitle }: PricingProps) => {
  const annualEnabled = useMemo(
    () => data.filter((p) => p.annualPrice !== undefined).length > 0,
    [data],
  );
  const [plan, setPlan] = useState(PricingPlan.ANNUAL);

  return (
    <div id="pricing-container">
      {(subtitle || annualEnabled) && (
        <div className="pricing-header-row">
          {subtitle && <h2 className="pricing-subtitle">{subtitle}</h2>}
          {annualEnabled && (
            <PricingToggle
              onChange={(v) => {
                setPlan(v);
              }}
              state={plan}
            />
          )}
        </div>
      )}
      <div className="plans">
        {data.map((pricingData) => (
          <PricingCard data={pricingData} key={pricingData.id} activePlan={plan} />
        ))}
      </div>
    </div>
  );
};

type ToggleProps = {
  state: PricingPlan;
  onChange: (v: PricingPlan) => void;
};

const PricingToggle = ({ onChange, state }: ToggleProps) => {
  return (
    <div id="pricing-toggle">
      <button
        className={clsx({
          active: state === PricingPlan.MONTHLY,
        })}
        onClick={() => {
          onChange(PricingPlan.MONTHLY);
        }}
      >
        Monthly
      </button>
      <button
        className={clsx({
          active: state === PricingPlan.ANNUAL,
        })}
        onClick={() => {
          onChange(PricingPlan.ANNUAL);
        }}
      >
        Annual
      </button>
    </div>
  );
};

type CardProps = {
  data: PricingData;
  activePlan: PricingPlan;
};

const PricingCard = ({ data, activePlan }: CardProps) => {
  const isAnnual = activePlan === PricingPlan.ANNUAL && data.annualPrice !== undefined;
  const hasDiscount = data.discount !== undefined;

  return (
    <div className="pricing-card">
      <div className="header">
        <p className="name">{data.name}</p>
      </div>
      {isAnnual && hasDiscount && (
        <div className="divider annual">
          <div className="line"></div>
          <div className="discount-badge">
            <p>{data.discount}% discount</p>
          </div>
        </div>
      )}
      {(!isAnnual || (isAnnual && !hasDiscount)) && (
        <div className="divider">
          <div className="line"></div>
        </div>
      )}
      <div className="pricing-container">
        <div
          className={clsx("price", {
            free: data.price === 0 || data.price === -1,
            spaced: data.price === 0 || data.price === -1 || !isAnnual,
          })}
        >
          {data.price > 0 && !isAnnual && (
            <p
              className={clsx("monthly", {
                discount: hasDiscount && isAnnual,
                annual: isAnnual,
              })}
            >
              &euro;{data.price}
            </p>
          )}
          {data.price === 0 && <p className="free">Free</p>}
          {data.price === -1 && <p className="free">Contact us</p>}
          {!isAnnual && data.price > 0 && <p className="suffix">per month</p>}
          {isAnnual && data.annualPrice !== -1 && <p className="annually">&euro;{data.annualPrice}</p>}
        </div>
        {isAnnual && data.annualPrice !== undefined && data.annualPrice !== -1 && (
          <p className="annual-message">
            per month, billed annually you will be charged &euro;{data.annualPrice * 12}
          </p>
        )}
        <div className="action-container">
          {data.price === 0 && (
            <a
              className="action"
              target={data.linkTarget ?? "_self"}
              href={isAnnual ? data.annualPriceLink : data.priceLink}
            >
              <span>{data.buttonText}</span>
            </a>
          )}
          {data.price === -1 && (
            <a
              className="action contact-sales"
              target={data.linkTarget ?? "_self"}
              href={isAnnual ? data.annualPriceLink : data.priceLink}
            >
              <span>{data.buttonText}</span>
            </a>
          )}
          {data.price > 0 && (
            <a
              className="action"
              target={data.linkTarget ?? "_blank"}
              href={isAnnual ? data.annualPriceLink : data.priceLink}
            >
              <span>{data.buttonText}</span>
            </a>
          )}
        </div>
      </div>
      <div className="divider">
        <div className="line" />
      </div>
      <div className="content-container">
        <Markdown rehypePlugins={[rehypeR]}>{data.content}</Markdown>
      </div>
    </div>
  );
};
