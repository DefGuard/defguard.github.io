import { useEffect, useMemo, useState } from "preact/hooks";
import type { PricingSchema } from "../../content/config";
import clsx from "clsx";
import Markdown from "react-markdown";
import rehypeR from "rehype-raw";
import "./style.scss";

type PricingData = PricingSchema & { content: string; id: string | number };

type PricingProps = {
  data: PricingData[];
};

enum PricingPlan {
  ANNUAL,
  MONTHLY,
}

export const PricingCards = ({ data }: PricingProps) => {
  const annualEnabled = useMemo(
    () => data.filter((p) => p.annualPrice !== undefined).length > 0,
    [data],
  );
  const [plan, setPlan] = useState(PricingPlan.ANNUAL);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id="pricing-container">
      {annualEnabled && <PricingToggle onChange={(v) => setPlan(v)} state={plan} />}
      <div class="plans">
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
        class={clsx({
          active: state === PricingPlan.MONTHLY,
        })}
        onClick={() => onChange(PricingPlan.MONTHLY)}
      >
        Monthly
      </button>
      <button
        class={clsx({
          active: state === PricingPlan.ANNUAL,
        })}
        onClick={() => onChange(PricingPlan.ANNUAL)}
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
    <div class="pricing-card">
      <div class="header">
        <p class="name">{data.name}</p>
      </div>
      {isAnnual && hasDiscount && (
        <div class="divider annual">
          <div class="line"></div>
          <div class="discount-badge">
            <p>{data.discount}% discount</p>
          </div>
        </div>
      )}
      {(!isAnnual || (isAnnual && !hasDiscount)) && (
        <div class="divider">
          <div class="line"></div>
        </div>
      )}
      <div class="pricing-container">
        <div
          class={clsx("price", {
            free: data.price === 0,
            spaced: data.price === 0 || !isAnnual,
          })}
        >
          {data.price > 0 && (
            <p
              class={clsx("monthly", {
                discount: hasDiscount && isAnnual,
                annual: isAnnual,
              })}
            >
              €{data.price}
            </p>
          )}
          {!isAnnual && data.price > 0 && <p class="suffix">per month</p>}
          {data.price === 0 && <p class="free">Free</p>}
          {isAnnual && <p class="annually">€{data.annualPrice}</p>}
        </div>
        {isAnnual && data.annualPrice !== undefined && (
          <p class="annual-message">
            per month, billed annually you will be charged €{data.annualPrice * 12}
          </p>
        )}
        <div class="action-container">
          <a class="action" target={data.linkTarget ?? "_blank"} href={data.link}>
            <span>{data.buttonText}</span>
          </a>
        </div>
      </div>
      <div class="divider">
        <div class="line" />
      </div>
      <div class="content-container">
        <Markdown rehypePlugins={[rehypeR]}>{data.content}</Markdown>
      </div>
    </div>
  );
};
