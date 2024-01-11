export interface loginResProps {
  data: {
    code: number;
    data: {
      accessToken: string;
      refreshToken: string;
      role: string;
    };
  };
}

export interface loginErrorProps {
  response: {
    data: {
      code: number;
      message: string;
    };
  };
}
