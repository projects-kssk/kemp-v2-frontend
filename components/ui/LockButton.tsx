"use client";
import { useState, useEffect } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

interface LockButtonProps {
  isReserved: boolean;
  isReservedByCurrentUser: boolean;
  onClick: () => void;
}

export function LockButton({
  isReserved,
  isReservedByCurrentUser,
  onClick,
}: LockButtonProps) {
  const [locked, setLocked] = useState(!isReserved);

  useEffect(() => {
    setLocked(!isReserved);
  }, [isReserved]);

  const disabled = isReserved && !isReservedByCurrentUser;

  const handleToggle = () => {
    if (disabled) return;
    setLocked((prev) => !prev);
    onClick();
  };

  return (
    <div
      role="button"
      aria-label={locked ? "Unlock" : "Lock"}
      onClick={handleToggle}
      className={`group w-8 h-8 rounded-full transition-colors duration-300 flex justify-center items-center ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      {locked ? (
        <FaUnlock className="w-4 h-4 text-white" />
      ) : (
        <FaLock className="w-4 h-4 text-amber-500" />
      )}
    </div>
  );
}
