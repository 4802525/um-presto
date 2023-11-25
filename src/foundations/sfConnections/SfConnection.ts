import { Session } from './Session';

export class SfConnection {
  private instanceHostName: string;
  private sessionId: string;

  async getSession(sfHost: string) {
    const message = await new Promise<Session | null>((resolve) =>
      chrome.runtime.sendMessage({ message: 'getSession', sfHost }, resolve)
    );

    if (!message) {
      throw new Error('セッションが読み取れませんでした．');
    }

    this.instanceHostName = message.hostname;
    this.sessionId = message.sessionId;
  }
}
