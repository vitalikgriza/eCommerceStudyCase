import * as SecureStore from 'expo-secure-store';

class AuthService {
  private STORAGE_KEY = 'session';

  async setSession(session: string | null) {
    if (session == null) {
      await SecureStore.deleteItemAsync(this.STORAGE_KEY);
    } else {
      await SecureStore.setItemAsync(this.STORAGE_KEY, session);
    }
  }

  async getSession() {
    return await SecureStore.getItemAsync(this.STORAGE_KEY);
  }
}

export const authService = new AuthService();
