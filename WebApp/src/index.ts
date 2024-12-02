console.log(`シグナリングタイプを"websocket"に変更します。`);
this.options.type = 'websocket';
}
if (this.options.type == 'websocket') {
console.log(`シグナリングサーバーにWebSocketを使用します。 ws://${this.getIPAddress()[0]}`);
new WSSignaling(this.server, this.options.mode);
}

console.log(`起動モード: ${this.options.mode}`);
}

getIPAddress(): string[] {
const interfaces = os.networkInterfaces();
const addresses: string[] = [];
for (const k in interfaces) {
for (const k2 in interfaces[k]) {
  const address = interfaces[k][k2];
  if (address.family === 'IPv4' && !address.internal) { // 外部IPのみ取得
    addresses.push(address.address);
  }
}
}
return addresses;
}
}

RenderStreaming.run(process.argv);