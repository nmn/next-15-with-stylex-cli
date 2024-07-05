import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "./tokens.stylex";

export default function Home() {
  return (
    <div {...stylex.props(styles.page)}>
      <main {...stylex.props(styles.main)}>
        <Image
          {...stylex.props(styles.logo)}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol {...stylex.props(styles.ol)}>
          <li {...stylex.props(styles.li)}>
            Get started by editing{" "}
            <code {...stylex.props(styles.code)}>src/app/page.tsx</code>
          </li>
          <li {...stylex.props(styles.li)}>
            Save and see your changes instantly.
          </li>
        </ol>
        <div {...stylex.props(styles.ctas)}>
          <a
            {...stylex.props(styles.ctaLink, styles.linkPrimary)}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              {...stylex.props(styles.logo)}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            {...stylex.props(styles.ctaLink, styles.linkSecondary)}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer {...stylex.props(styles.footer)}>
        <a
          {...stylex.props(styles.footerA)}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            {...stylex.props(styles.footerImg)}
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          {...stylex.props(styles.footerA)}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            {...stylex.props(styles.footerImg)}
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          {...stylex.props(styles.footerA)}
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            {...stylex.props(styles.footerImg)}
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

const MOBILE = "@media (max-width: 600px)";

const styles = stylex.create({
  page: {
    display: "grid",
    gridTemplateRows: "20px 1fr 20px",
    alignItems: "center",
    justifyContent: "center",
    minHeight: stylex.firstThatWorks("100svh", "100vh"),
    padding: {
      default: 80,
      [MOBILE]: 32,
    },
    paddingBottom: 80,
    gap: 64,
    fontSynthesis: "none",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    gridRowStart: "2",
    alignItems: {
      default: null,
      [MOBILE]: "center",
    },
  },
  ol: {
    fontFamily: fonts["--geist-mono"],
    paddingLeft: 0,
    margin: 0,
    fontSize: 14,
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    listStylePosition: "inside",
    textAlign: {
      default: null,
      [MOBILE]: "center",
    },
  },
  li: {
    marginBottom: {
      default: 8,
      ":last-of-type": 0,
    },
  },
  code: {
    fontFamily: "inherit",
    background: colors.grayAlpha100,
    paddingBlock: 2,
    paddingInline: 4,
    borderRadius: 4,
    fontWeight: 600,
  },
  ctas: {
    display: "flex",
    gap: 16,
    flexDirection: {
      default: null,
      [MOBILE]: "column",
    },
  },
  ctaLink: {
    appearance: "none",
    borderRadius: 128,
    height: {
      default: 48,
      [MOBILE]: 40,
    },
    paddingInline: {
      default: 20,
      [MOBILE]: 16,
    },
    fontFamily: fonts["--geist-sans"],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    transitionProperty: "background, color, borderColor",
    transitionDuration: "0.2s",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: {
      default: 16,
      [MOBILE]: 14,
    },
    lineHeight: "20px",
    fontWeight: 500,
  },
  linkPrimary: {
    background: {
      default: colors.fg,
      ":hover": colors.btnPrimaryHover,
    },
    color: colors.bg,
    gap: 8,
  },
  linkSecondary: {
    borderColor: {
      default: "transparent",
      ":hover": colors.grayAlpha200,
    },
    minWidth: {
      default: 180,
      [MOBILE]: "auto",
    },
  },
  footer: {
    fontFamily: fonts["--geist-sans"],
    gridRowStart: "3",
    display: "flex",
    gap: 24,
    flexWrap: {
      default: null,
      [MOBILE]: "wrap",
    },
    alignItems: {
      default: null,
      [MOBILE]: "center",
    },
    justifyContent: {
      default: null,
      [MOBILE]: "center",
    },
  },
  footerA: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: {
      default: "none",
      ":hover": "underline",
    },
    textUnderlineOffset: 4,
  },
  footerImg: {
    flexShrink: 0,
  },
  logo: {
    filter: {
      default: null,
      "@media (prefers-color-scheme: dark)": "invert()",
    },
  },
});
