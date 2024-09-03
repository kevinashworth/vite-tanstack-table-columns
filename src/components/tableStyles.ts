import { css } from '@emotion/react'
import { spectrum } from '../theme'

const baseTableCssNoHover = css({
  borderCollapse: 'collapse',
  tbody: {
    tr: {
      ':nth-of-type(even)': {
        backgroundColor: spectrum.white
      },
      ':nth-of-type(odd)': {
        backgroundColor: spectrum.gray[100]
      }
    }
  },
  tr: {
    td: {
      borderTop: '1px solid ' + spectrum.gray[300],
      // fontSize: '1rem',
      padding: '0.25rem',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    th: {
      // fontSize: '1.25rem',
      // fontWeight: 500,
      // lineHeight: '1.5rem',
      padding: '0.25rem',
      textAlign: 'center',
      verticalAlign: 'middle'
    }
  }
})

const baseTableCss = css(baseTableCssNoHover, {
  tbody: {
    tr: {
      '&:hover': {
        backgroundColor: spectrum.vibrant + '20'
      }
    }
  }
})

const tableCssHighlightAlternateColumns = css(baseTableCss, {
  tr: {
    td: {
      ':nth-of-type(odd)': {
        backgroundColor: spectrum.btc + '20',
        border: '1px solid ' + spectrum.btc
      }
    },
    th: {
      ':nth-of-type(odd)': {
        backgroundColor: spectrum.btc + '20',
        border: '1px solid ' + spectrum.btc
      }
    }
  }
})

export { baseTableCss, baseTableCssNoHover, tableCssHighlightAlternateColumns }
