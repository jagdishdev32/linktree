let hashEnabled = true;

let basename = process.env.REACT_APP_FRONTEND_BASE_URL
  ? process.env.REACT_APP_FRONTEND_BASE_URL
  : "";

if (hashEnabled) {
  basename = basename + "/";
}

const Themes = {
  default: {
    buttonVarient: "outline-primary",
  },
  primary: {
    buttonVarient: "outline-primary",
  },
  secondary: {
    buttonVarient: "outline-secondary",
  },
  success: {
    buttonVarient: "outline-success",
  },
  warning: {
    buttonVarient: "outline-warning",
  },
  danger: {
    buttonVarient: "outline-danger",
  },
  info: {
    buttonVarient: "outline-info",
  },
  light: {
    buttonVarient: "outline-light",
  },
  dark: {
    buttonVarient: "outline-dark",
  },
};

const other = {
  siteTitle: process.env.REACT_APP_SITE_TITLE,
  hashEnabled: hashEnabled,
  basename: basename,
  defaultLinkToggle: false,
  Themes: Themes,
};

module.exports = other;
