export const CHECKOUT_PROGRESS_KEY = "checkoutProgress";

export const CHECKOUT_PROGRESS = {
  REVIEW: 1,
  PAYMENT: 2,
  CONFIRMATION: 3,
};

export const getCheckoutProgress = () => {
  if (typeof window === "undefined") {
    return CHECKOUT_PROGRESS.REVIEW;
  }

  const raw = localStorage.getItem(CHECKOUT_PROGRESS_KEY);
  const value = Number(raw);

  if (!Number.isFinite(value)) {
    return CHECKOUT_PROGRESS.REVIEW;
  }

  if (value < CHECKOUT_PROGRESS.REVIEW) {
    return CHECKOUT_PROGRESS.REVIEW;
  }

  if (value > CHECKOUT_PROGRESS.CONFIRMATION) {
    return CHECKOUT_PROGRESS.CONFIRMATION;
  }

  return value;
};

export const setCheckoutProgress = (step) => {
  if (typeof window === "undefined") {
    return;
  }

  const normalized = Math.max(CHECKOUT_PROGRESS.REVIEW, Math.min(CHECKOUT_PROGRESS.CONFIRMATION, Number(step) || 1));
  localStorage.setItem(CHECKOUT_PROGRESS_KEY, String(normalized));
};

export const unlockCheckoutStep = (step) => {
  const current = getCheckoutProgress();
  if (step > current) {
    setCheckoutProgress(step);
  }
};
