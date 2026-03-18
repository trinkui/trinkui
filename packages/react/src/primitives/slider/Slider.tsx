"use client";

import React, { forwardRef, useState, useRef, useCallback, useEffect } from "react";
import type { SliderProps } from "./slider.types";
import { sliderTrackStyles, sliderFillStyles, sliderThumbStyles } from "./slider.styles";
import { cn } from "../../utils/cn";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function snapToStep(value: number, min: number, step: number): number {
  return Math.round((value - min) / step) * step + min;
}

/**
 * Slider primitive component.
 * Provides a draggable track-and-thumb control for selecting a numeric value within a range.
 * Supports keyboard navigation, click-to-jump, and drag interaction.
 *
 * @example
 * <Slider defaultValue={50} min={0} max={100} step={5} showValue />
 * <Slider value={volume} onChange={setVolume} color="success" size="lg" />
 */
export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: controlledValue,
      defaultValue = 0,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      label,
      showValue = false,
      size = "md",
      color = "primary",
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = isControlled ? controlledValue : internalValue;
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const setValue = useCallback(
      (next: number) => {
        const clamped = clamp(snapToStep(next, min, step), min, max);
        if (!isControlled) {
          setInternalValue(clamped);
        }
        onChange?.(clamped);
      },
      [isControlled, min, max, step, onChange]
    );

    const getValueFromPosition = useCallback(
      (clientX: number) => {
        const track = trackRef.current;
        if (!track) return currentValue;
        const rect = track.getBoundingClientRect();
        const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
        return min + ratio * (max - min);
      },
      [currentValue, min, max]
    );

    const handlePointerDown = useCallback(
      (e: React.PointerEvent) => {
        if (disabled) return;
        e.preventDefault();
        isDragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        setValue(getValueFromPosition(e.clientX));
      },
      [disabled, getValueFromPosition, setValue]
    );

    const handlePointerMove = useCallback(
      (e: React.PointerEvent) => {
        if (!isDragging.current || disabled) return;
        setValue(getValueFromPosition(e.clientX));
      },
      [disabled, getValueFromPosition, setValue]
    );

    const handlePointerUp = useCallback(() => {
      isDragging.current = false;
    }, []);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;
        let next = currentValue;
        switch (e.key) {
          case "ArrowRight":
          case "ArrowUp":
            next = currentValue + step;
            break;
          case "ArrowLeft":
          case "ArrowDown":
            next = currentValue - step;
            break;
          case "Home":
            next = min;
            break;
          case "End":
            next = max;
            break;
          default:
            return;
        }
        e.preventDefault();
        setValue(next);
      },
      [disabled, currentValue, step, min, max, setValue]
    );

    const percentage = ((clamp(currentValue, min, max) - min) / (max - min)) * 100;

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        {(label || showValue) && (
          <div className="flex items-center justify-between text-sm">
            {label && (
              <span className="font-medium text-[rgb(var(--trinkui-fg))]">
                {label}
              </span>
            )}
            {showValue && (
              <span className="text-[rgb(var(--trinkui-muted))]">
                {currentValue}
              </span>
            )}
          </div>
        )}
        <div
          ref={trackRef}
          className={cn(
            sliderTrackStyles({ size, color, disabled: disabled ? "true" : "false" })
          )}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* Filled portion */}
          <div
            className={sliderFillStyles({ color })}
            style={{ width: `${percentage}%` }}
          />
          {/* Thumb */}
          <span
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuenow={currentValue}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-label={label ?? "Slider"}
            aria-disabled={disabled}
            className={sliderThumbStyles({
              size,
              color,
              disabled: disabled ? "true" : "false",
            })}
            style={{ left: `${percentage}%` }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
