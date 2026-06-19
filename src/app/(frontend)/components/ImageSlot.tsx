interface ImageSlotProps {
  placeholder?: string
  className?: string
  style?: React.CSSProperties
}

export function ImageSlot({ placeholder = 'Image', className = '', style }: ImageSlotProps) {
  return (
    <div className={`img-placeholder ${className}`} style={style} aria-label={placeholder} role="img">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 11, opacity: 0.8 }}>{placeholder}</span>
    </div>
  )
}
