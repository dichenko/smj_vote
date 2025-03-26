declare module '@twa-dev/sdk' {
  interface WebAppUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    photo_url?: string;
  }

  interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    auth_date?: number;
    hash?: string;
  }

  interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  }

  interface WebApp {
    initData: string;
    initDataUnsafe: WebAppInitData;
    colorScheme: 'light' | 'dark';
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    
    expand(): void;
    close(): void;
    ready(): void;
    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;
  }

  const WebApp: WebApp;
  export default WebApp;
} 