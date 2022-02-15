export const addToLocalStorage = (data) => {
  localStorage.clear();
  const { access_token, expires_in, token_type } = data;
  localStorage.setItem("accessToken", access_token);
  localStorage.setItem("tokenType", token_type);
  localStorage.setItem("expiresIn", expires_in);
};

export const getToLocalStorage = () => {
  const access_token = localStorage.getItem("accessToken");
  const token_type  = localStorage.getItem("tokenType");
  const expires_in  = localStorage.getItem("expiresIn");
  return { access_token, token_type, expires_in };
};
export const onSession = () => {
  const LocalStore = getToLocalStorage();
  return LocalStore.access_token !== null?true:false;
};

export const deleteToLocalStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("expiresIn");
};
