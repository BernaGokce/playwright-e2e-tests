const environments = {
    staging: 'https://staging.saucedemo.com/',
    production: 'https://www.saucedemo.com/',
    baseURL: 'https://jsonplaceholder.typicode.com',
  };
  
  export const getEnvUrl = (env: string): string => {
    if (environments[env]) {
      return environments[env];
    }
    throw new Error(`Environment '${env}' is not defined in environments.`);
  };