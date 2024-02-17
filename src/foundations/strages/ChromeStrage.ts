export class ChromeStrage {
  static async get(key: string | string[]): Promise<{ [key: string]: unknown }> {
    return new Promise((resolve) => chrome.storage.sync.get(key, resolve));
  }

  static async getAll(): Promise<{ [key: string]: unknown }> {
    return new Promise((resolve) => chrome.storage.sync.get(null, resolve));
  }

  static async set(items: { [key: string]: unknown }): Promise<void> {
    return new Promise((resolve) => chrome.storage.sync.set(items, resolve));
  }
}
