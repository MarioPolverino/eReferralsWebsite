"use client";
import React from "react";
import styles from "./newsletter-signup.module.css";
import Link from "next/link";
import { ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

const NewsletterSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Yahan aap form data ko handle kar sakte hain
    console.log(data);
  };
  return (
    <section className={`${styles.newsletterSignup}  gradient-bg`}>
      <div className={styles.newsletterSignupContainer}>
        <div className={styles.newsletterContent}>
          <h2>Get top insights and news from our search experts</h2>
          <p>Delivered to you daily, straight to your inbox.</p>
          <div className={styles.links}>
            <Link className={styles.link} href="/">
              Terms
            </Link>
            <span>|</span>
            <Link className={styles.link} href="/">
              Privacy
            </Link>
          </div>
        </div>
        <form
          name="newsletter-signup-form"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.signupForm}
          netlify
        >
          <input
            type="hidden"
            name="newsletter-signup-form"
            value="newsletter-signup-form"
          />
          <div className={styles.inputGroup}>
            <div
              className={`${styles.inputContainer} ${
                errors.email ? "error" : ""
              }`}
            >
              <EnvelopeIcon className={`${styles.emailIcon} btn-icon`} />
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className={styles.formFooter}>
            <div className={styles.consent}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                {...register("consent", { required: true })}
              />
              <label htmlFor="consent">
                I agree with the storage & processing of my personal data
              </label>
            </div>
            <button type="submit" className={`${styles.submitButton}`}>
              Submit <ChevronRightIcon className="btn-icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
