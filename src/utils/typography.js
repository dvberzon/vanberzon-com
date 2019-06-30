import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.baseFontSize = '21px'
fairyGatesTheme.baseLineHeight = 1.4;
fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    color: "#9c44ab",
    textShadow: 'none',
    backgroundImage: 'none',
    textDecoration: 'none'
  },
  "a:hover": {
    textDecoration: 'underline',
  }
});


const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
