export interface ApplicationState {
  loading: boolean;
  success: boolean;
  error: any;
  cnt:number;
}

export function DefaultApplicationState(): ApplicationState {
  return {
    loading: false,
    success: false,
    error: null,
    cnt:0,
  };
}

export function LoadingApplicationState(): ApplicationState {
  return {
    loading: true,
    success: false,
    error: null,
    cnt:0,
  };
}

export function LoadedApplicationState(): ApplicationState {
  return {
    loading: false,
    success: true,
    error: null,
    cnt:0,
  };
}

export function ErrorApplicationState(error: Error): ApplicationState {
  return {
    loading: false,
    success: false,
    error: error,
    cnt:0,
  };
}