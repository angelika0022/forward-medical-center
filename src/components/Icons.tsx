import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function BaseIcon(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    />
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M8 3.5v4" />
      <path d="M16 3.5v4" />
      <path d="M3.5 9.5h17" />
    </BaseIcon>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6.8 4.8c.6-.6 1.7-.7 2.5-.1l1.7 1.4c.7.6.9 1.6.4 2.4l-.8 1.4a1.7 1.7 0 0 0 .2 2c1.2 1.5 2.6 2.8 4.1 4 .7.5 1.6.6 2.4.2l1.1-.7c.8-.5 1.9-.4 2.5.3l1.4 1.7c.6.8.5 1.9-.1 2.5l-.8.8c-.9.9-2.2 1.3-3.4 1.1-2.6-.4-5.5-2.1-8.7-5.2-3.2-3.2-4.9-6.1-5.2-8.7-.2-1.2.2-2.5 1.1-3.4z" />
    </BaseIcon>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </BaseIcon>
  )
}

export function LocationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20.5s6-4.9 6-10.4a6 6 0 1 0-12 0c0 5.5 6 10.4 6 10.4Z" />
      <circle cx="12" cy="10" r="2.1" />
    </BaseIcon>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m7 10 5 5 5-5" />
    </BaseIcon>
  )
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 16 16 8" />
      <path d="M9.5 8H16v6.5" />
    </BaseIcon>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v4.7l3.1 1.8" />
    </BaseIcon>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3.5c2.5 1.8 5.2 2.4 7 2.6v5.1c0 4.7-3 8.2-7 9.8-4-1.6-7-5.1-7-9.8V6.1c1.8-.2 4.5-.8 7-2.6Z" />
      <path d="m9.3 12.1 1.9 1.9 3.7-3.9" />
    </BaseIcon>
  )
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20.5s-7.5-4.8-7.5-10.4A4.4 4.4 0 0 1 9 5.5c1.2 0 2.3.4 3 1.3.7-.9 1.8-1.3 3-1.3a4.4 4.4 0 0 1 4.5 4.6C19.5 15.7 12 20.5 12 20.5Z" />
      <path d="M7.8 12h2.3l1.3-2.3 1.7 4 1.5-2.2H16" />
    </BaseIcon>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5.5 12.4 4.2 4.1 8.8-8.9" />
    </BaseIcon>
  )
}

export function LogoClusterIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 72 52" {...props}>
      <circle cx="14" cy="26" r="12" fill="currentColor" />
      <circle cx="36" cy="14" r="10" fill="currentColor" opacity="0.9" />
      <circle cx="34" cy="38" r="8" fill="currentColor" opacity="0.82" />
      <circle cx="54" cy="24" r="9" fill="currentColor" opacity="0.88" />
      <circle cx="66" cy="34" r="5" fill="currentColor" opacity="0.78" />
    </svg>
  )
}
