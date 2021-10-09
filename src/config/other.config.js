let hashEnabled = true;

let basename = process.env.REACT_APP_FRONTEND_BASE_URL
  ? process.env.REACT_APP_FRONTEND_BASE_URL
  : "";

if (hashEnabled) {
  basename = basename + "/";
}

const other = {
  siteTitle: process.env.REACT_APP_SITE_TITLE,
  hashEnabled: hashEnabled,
  basename: basename,
  defaultLinkToggle: false,
};

module.exports = other;
