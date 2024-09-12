import { css } from "@emotion/react";
import { spectrum } from "../../theme";

const baseTableCssNoHover = css({
  border: "1px solid " + spectrum.gray[200],
  borderCollapse: "collapse",
  caption: {
    color: spectrum.btc,
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.5rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  tableLayout: "fixed",
  width: "100%",
  tbody: {
    tr: {
      ":nth-of-type(even)": {
        backgroundColor: spectrum.white,
      },
      ":nth-of-type(odd)": {
        backgroundColor: spectrum.gray[100],
      },
    },
  },
  tr: {
    td: {
      borderTop: "1px solid " + spectrum.gray[300],
      fontSize: "1rem",
      padding: "0.25rem",
      textAlign: "center",
      verticalAlign: "middle",
    },
    th: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      padding: "0.25rem",
      textAlign: "center",
      verticalAlign: "middle",
    },
  },
  thead: {
    tr: {
      borderBottom: "1px solid " + spectrum.gray[300],
      borderTop: "1px solid " + spectrum.gray[300],
    },
  },
});

const baseTableCss = css(baseTableCssNoHover, {
  tbody: {
    tr: {
      "&:hover": {
        backgroundColor: spectrum.vibrant + "20",
      },
    },
  },
});

const baseTableCssHighlightAlternateColumns = css(baseTableCss, {
  tr: {
    td: {
      ":nth-of-type(odd)": {
        backgroundColor: spectrum.btc + "20",
      },
    },
    th: {
      ":nth-of-type(odd)": {
        backgroundColor: spectrum.btc + "20",
      },
    },
  },
});

export {
  baseTableCss,
  baseTableCssNoHover,
  baseTableCssHighlightAlternateColumns,
};
