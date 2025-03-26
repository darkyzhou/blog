export interface AppleMusicProps {
  path: string
}

export function AppleMusic({ path }: AppleMusicProps) {
  return (
    <iframe
      allow="autoplay *; encrypted-media *;"
      frameBorder="0"
      height="450"
      style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent', marginBlock: '32px' }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={`https://embed.music.apple.com/cn/album/${path}?theme=dark`}
      loading="lazy"
    >
    </iframe>
  )
}
