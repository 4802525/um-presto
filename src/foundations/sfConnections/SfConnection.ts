import { setDefaultConfig } from 'ts-force';
import { Session } from './Session';

export class SfConnection {
  instanceUrl: string | undefined;
  async getSession(sfHost: string) {
    const message = await new Promise<Session | null>((resolve) =>
      chrome.runtime.sendMessage({ message: 'getSession', sfHost }, resolve)
    );

    if (!message) {
      throw new Error('セッションが読み取れませんでした．');
    }

    const instanceHostName = message.hostname;
    const sessionId = message.sessionId;

    if (!instanceHostName || !sessionId) {
      return;
    }

    this.instanceUrl = `https://${instanceHostName}`;
    setDefaultConfig({
      instanceUrl: this.instanceUrl,
      accessToken: sessionId,
    });
  }
}
