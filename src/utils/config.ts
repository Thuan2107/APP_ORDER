let authToken: string | null = null;
let projectId: string | null = null;

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const setProjectId = (id: string) => {
  projectId = id;
};

export const getAuthToken = () => authToken;
export const getProjectId = () => projectId;