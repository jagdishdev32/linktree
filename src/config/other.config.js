const other = {
  siteTitle: process.env.REACT_APP_SITE_TITLE,
  hashEnabled: true,
  basename: process.env.REACT_APP_FRONTEND_BASE_URL
    ? process.env.REACT_APP_FRONTEND_BASE_URL
    : "",
};

module.exports = other;
