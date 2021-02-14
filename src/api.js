const BASE_URL = 'http://localhost:8010/proxy/api/v0';


async function callApi(endpoint,options={}){
  options.headers = {
    crossDomain:false,
    'X-Cisco-Meraki-API-Key':'6bec40cf957de430a6f1f2baa056b99a4fac9ea0',
    Accept: 'application/json',
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url,options);
  const data = await response.json();
  return data;
}

const api = {
  organizations: {
    list() {
      return callApi('/organizations/549236');
    },
  },
  networks : {
    list(){
      return callApi('/organizations/549236/networks')
    }
  }
};

export default api;