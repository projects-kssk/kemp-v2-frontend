"use client";

import { CSSProperties, ReactNode, useMemo, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";

type PromptButtonProps = {
  onClose?: () => void;
  onSubmit: () => void | Promise<void>;
  buttonType?: "text" | "icon";
  buttonText?: string;
  buttonConfirmIcon?: ReactNode;
  buttonCancelIcon?: ReactNode;
  buttonClassName?: string;
  size?: "sm" | "md";
  disabled?: boolean;
};

export function PromptButton({
  onClose = () => {},
  onSubmit,
  buttonType = "text",
  buttonText = "Delete",
  buttonConfirmIcon = <FiTrash2 size={18} />,
  buttonCancelIcon = <MdClose size={18} />,
  buttonClassName = "border border-border-primary bg-bg-secondary text-text-primary hover:border-red-500/40 hover:text-red-500",
  size = "md",
  disabled = false,
}: PromptButtonProps) {
  const [state, setState] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isOpen = state === 1;

  const isIconButton = buttonType === "icon";
  const isDisabled = disabled || isSubmitting;

  const triggerSizeClass = (() => {
    if (isIconButton) {
      return size === "sm"
        ? "h-9 w-9 rounded-full"
        : "h-10 w-10 rounded-full";
    }

    return size === "sm"
      ? "min-h-9 rounded-lg px-3 py-1.5"
      : "min-h-10 rounded-lg px-4 py-2";
  })();

  const cancelOpenClass = (() => {
    if (isIconButton) {
      return size === "sm"
        ? "rounded-full"
        : "rounded-full";
    }

    return size === "sm"
      ? "rounded"
      : "rounded";
  })();

  const triggerClasses = [
    "transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    isIconButton ? "inline-flex items-center justify-center" : "",
    triggerSizeClass,
    isIconButton ? "" : "rounded",
    buttonClassName,
  ].join(" ");

  const cancelClasses = [
    "overflow-hidden border border-border-primary bg-bg-secondary text-text-primary transition-all duration-300 hover:bg-interactive-bg disabled:cursor-not-allowed disabled:opacity-60",
    isIconButton ? "inline-flex items-center justify-center" : "",
    cancelOpenClass,
  ].join(" ");

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      gap: isOpen ? 4 : 0,
      transition: "gap 300ms ease",
    }),
    [isOpen],
  );

  const cancelStyle = useMemo<CSSProperties>(() => {
    if (isIconButton) {
      const sizeValue = size === "sm" ? 32 : 38;
      return {
        width: isOpen ? sizeValue : 0,
        height: isOpen ? sizeValue : 0,
        opacity: isOpen ? 1 : 0,
        padding: 0,
        borderWidth: isOpen ? 1 : 0,
        transition:
          "width 300ms ease, height 300ms ease, opacity 220ms ease, border-width 300ms ease",
      };
    }

    return {
      width: isOpen ? 70 : 0,
      opacity: isOpen ? 1 : 0,
      paddingTop: isOpen ? (size === "sm" ? 6 : 8) : 0,
      paddingBottom: isOpen ? (size === "sm" ? 6 : 8) : 0,
      paddingLeft: isOpen ? (size === "sm" ? 12 : 16) : 0,
      paddingRight: isOpen ? (size === "sm" ? 12 : 16) : 0,
      borderWidth: isOpen ? 1 : 0,
      transition:
        "width 300ms ease, padding 300ms ease, opacity 220ms ease, border-width 300ms ease",
    };
  }, [isIconButton, isOpen, size]);

  const handleTriggerClick = async () => {
    if (isDisabled) {
      return;
    }

    if (state === 0) {
      setState(1);
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit();
      setState(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    if (isDisabled) {
      return;
    }

    setState(0);
    onClose();
  };

  return (
    <div
      className="h-full flex flex-row items-center justify-center"
      style={containerStyle}
    >
      <button
        type="button"
        className={triggerClasses}
        onClick={() => void handleTriggerClick()}
        disabled={isDisabled}
        aria-pressed={isOpen}
      >
        {buttonType === "text" ? (
          <span>{isSubmitting ? "Working..." : buttonText}</span>
        ) : (
          <span className="flex items-center">{buttonConfirmIcon}</span>
        )}
      </button>

      <button
        type="button"
        className={cancelClasses}
        style={cancelStyle}
        onClick={handleCancelClick}
        disabled={isDisabled}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
      >
        {buttonType === "text" ? (
          <span className="whitespace-nowrap">Cancel</span>
        ) : (
          <span className="flex items-center justify-center">
            {buttonCancelIcon}
          </span>
        )}
      </button>
    </div>
  );
}
