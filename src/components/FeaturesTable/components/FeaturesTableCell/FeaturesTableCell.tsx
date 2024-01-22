import "./style.scss";
import type { FeatureTableCell } from "../../types";
import { useMemo, useState } from "preact/hooks";
import clsx from "clsx";
import { isUndefined } from "lodash-es";
import {
  autoUpdate,
  offset,
  useFloating,
  flip,
  shift,
  useHover,
  useRole,
  useInteractions,
} from "@floating-ui/react";

const FeaturesTableCell = ({ status, hover, link }: FeatureTableCell) => {
  const getExtraIcon = useMemo(() => {
    if (link) {
      return <ExternalIcon />;
    }
    if (hover) {
      return <InfoIcon />;
    }
    return null;
  }, [hover, link]);

  const getMainIcon = useMemo(() => {
    switch (status) {
      case "yes":
        return <YesIcon />;
      case "no":
        return <NoIcon />;
      case "in-progress":
        return <InProgressIcon />;
    }
  }, [status]);

  const hoverEnabled = !isUndefined(hover) && hover.length > 0;

  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(12),
      flip({
        fallbackAxisSideDirection: "end",
      }),
      shift(),
    ],
  });

  const hoverInteraction = useHover(context, { enabled: hoverEnabled });
  const role = useRole(context, {
    role: "tooltip",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hoverInteraction,
    role,
  ]);

  return (
    <>
      <div
        class={clsx("feature-cell", {
          pointer: !isUndefined(link),
        })}
      >
        {link && link.length ? (
          <a
            class="icon-wrapper"
            href={link}
            target="_blank"
            {...getReferenceProps()}
            ref={refs.setReference}
          >
            {getMainIcon}
            {((hover && hover.length) || (link && link.length)) && (
              <div class="extra-icon">{getExtraIcon}</div>
            )}
          </a>
        ) : (
          <div class="icon-wrapper" {...getReferenceProps()} ref={refs.setReference}>
            {getMainIcon}
            {((hover && hover.length) || (link && link.length)) && (
              <div class="extra-icon">{getExtraIcon}</div>
            )}
          </div>
        )}
      </div>
      {isOpen && (
        <div
          class="floating-cell-tooltip"
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <p>{hover}</p>
        </div>
      )}
    </>
  );
};

const YesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M6.5 10.9231L16.1 22L26.5 10"
        style={{ stroke: "var(--surface-main-primary)" }}
      />
    </svg>
  );
};

const NoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path d="M9.5 9L23.5 23" style={{ stroke: "var(--text-body-primary)" }} />
      <path d="M23.5 9L9.5 23" style={{ stroke: "var(--text-body-primary)" }} />
    </svg>
  );
};

const InProgressIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M9.5 15.1347L11.3731 16.2848C13.038 17.307 15.1722 17.1381 16.6555 15.8667V15.8667C17.9839 14.7281 19.852 14.4628 21.4449 15.1865L23.5 16.1203"
        style={{ stroke: "var(--text-body-primary)" }}
      />
    </svg>
  );
};

const ExternalIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H4V1.33333H1.33333V10.6667H10.6667V8H12V12H0V0ZM9.72386 1.33333H7.77778V0H12V4.22222H10.6667V2.27614L6.4714 6.4714L5.5286 5.5286L9.72386 1.33333Z"
        style={{ fill: "var(--text-body-tertiary)" }}
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
    >
      <path
        d="M12 6C12 9.03757 9.53757 11.5 6.5 11.5C3.46243 11.5 1 9.03757 1 6C1 2.96243 3.46243 0.5 6.5 0.5C9.53757 0.5 12 2.96243 12 6Z"
        style={{ stroke: "var(--text-body-tertiary)" }}
      />
      <path
        d="M7.16683 5.33317C7.16683 4.96498 6.86835 4.6665 6.50016 4.6665C6.13197 4.6665 5.8335 4.96498 5.8335 5.33317V8.6665C5.8335 9.03469 6.13197 9.33317 6.50016 9.33317C6.86835 9.33317 7.16683 9.03469 7.16683 8.6665V5.33317Z"
        style={{ fill: "var(--text-body-tertiary)" }}
      />
      <path
        d="M7.16683 3.33317C7.16683 2.96498 6.86835 2.6665 6.50016 2.6665C6.13197 2.6665 5.8335 2.96498 5.8335 3.33317C5.8335 3.70136 6.13197 3.99984 6.50016 3.99984C6.86835 3.99984 7.16683 3.70136 7.16683 3.33317Z"
        style={{ fill: "var(--text-body-tertiary)" }}
      />
    </svg>
  );
};

export default FeaturesTableCell;
