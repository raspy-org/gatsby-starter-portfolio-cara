/** @jsx jsx */
import { jsx } from "theme-ui"

type HighlightCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const HighlightCard = ({ link, title, children, bg, imgUrl }: HighlightCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >

    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      <img
        src={imgUrl}
        width={100}
        height={100}
      />
      <h2 sx={{ marginLeft: '5px', fontSize: 40 }}>{title}</h2>
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
  </a>
)

export default HighlightCard
