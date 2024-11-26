import { useRuntimeConfig } from 'nuxt/app';

class WsService {
  private connection: WebSocket;
  private url: any = '';

  private listeners: any[] = [];

  constructor() {
    const runtimeConfig = useRuntimeConfig();
    const { wsUrl } = runtimeConfig.public;

    const host = window.location.host;
    this.url = `ws://${host}/${wsUrl}`;
    if (window.location.origin.includes('https://')) {
      this.url = `wss://${host}/${wsUrl}`;
    }

    if (wsUrl.includes('ws://')) {
      this.url = wsUrl;
    }

    this.connection = this.connect();

    setInterval(() => {
      console.info('PING');
      this.connection.send('ping');
    }, 10000);
  }

  public connect() {
    this.connection = new WebSocket(this.url);

    this.connection.onopen = (e) => {
      console.info('ws onopen', e);
    };
    this.connection.onerror = (e) => {
      console.error('ws onerror', e);
    };
    this.connection.onclose = (e) => {
      console.error('ws onclose', e);
      setTimeout(() => {
        this.connect();
      }, 1000);
    };
    this.connection.onmessage = (e) => {

      const item: any = JSON.parse(e.data);
      this.listeners.forEach((listener) => {
        listener.fn(item.data);
      });

    };

    return this.connection;
  }

  onListener(id: any, fn: (item: any) => void) {
    this.listeners.push({ id, fn });
  }

  deleteListener(id: any) {
    this.listeners.splice(this.listeners.findIndex((v) => v.id === id), 1);
  }

}

const wsConn: WsService = new WsService();

export default wsConn;
