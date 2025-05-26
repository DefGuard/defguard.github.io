/* eslint-disable @typescript-eslint/no-misused-promises */
import "./style.scss";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { waitForTheElement } from "wait-for-the-element";
import { z } from "zod";

import { useAppStore } from "../../clientStores/appStore";

const bottomPadding = 20;

const cookieId = "#cookie-bar";

const NewsletterCardPopup = () => {
  const cookiesAccepted = useAppStore((s) => s.cookiesAccepted);
  const [padding, setPadding] = useState<number | undefined>();
  const schema = useMemo(
    () =>
      z.object({
        email: z.string().min(1, "Email is required").email("Enter valid email address."),
      }),
    [],
  );

  type FormFields = z.infer<typeof schema>;

  const { handleSubmit, register } = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleValidSubmit: SubmitHandler<FormFields> = (values) => {
    console.table(values);
  };

  const handleCookiesCheck = useCallback(async () => {
    const element = await waitForTheElement(cookieId, {
      timeout: 10 * 1000,
    });
    if (element) {
      const height = element.getBoundingClientRect().height;
      setPadding(bottomPadding + height);
    } else {
      setPadding(bottomPadding);
    }
  }, [setPadding]);

  useEffect(() => {
    if (!cookiesAccepted) {
      void handleCookiesCheck();
    } else {
      setPadding(bottomPadding);
    }
  }, [cookiesAccepted, handleCookiesCheck]);

  if (padding === undefined) return null;

  return (
    <motion.div
      id="newsletter-popup"
      initial={{
        opacity: 0,
        x: 50,
        bottom: padding,
      }}
      animate={{
        x: 0,
        opacity: 1,
        bottom: padding,
      }}
    >
      <p>Subscribe to or newsletter</p>
      <form onSubmit={handleSubmit(handleValidSubmit)}>
        <input type="email" placeholder="Email" {...register("email")} />
        <button type="submit">
          <span>Subscribe</span>
        </button>
      </form>
    </motion.div>
  );
};

export default NewsletterCardPopup;
