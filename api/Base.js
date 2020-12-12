export const getURI = (mode = 'dev') => {
  const API_BASE = {
    ProdURI: 'https://api-staging.app-zip.com/api',
    DevURI: 'https://api-staging.app-zip.com/api',
  };
  const params = mode === 'prod' ? API_BASE.ProdURI : API_BASE.DevURI;
  return params;
};

