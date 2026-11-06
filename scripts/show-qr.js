import qrcode from 'qrcode-terminal';
import os from 'os';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const localIp = getLocalIp();
const expoUrl = `exp://${localIp}:8081`;
const webUrl = `http://${localIp}:5173`;

console.log('\n============================================================');
console.log('       SAVDOX — OʻZBEKISTON MARKETPLEYSI QR CODES');
console.log('============================================================\n');

console.log(`[1] EXPO GO (MOBILE APP) QR CODE:`);
console.log(`URL: ${expoUrl}`);
console.log('Telefoningizdagi Expo Go ilovasi bilan quyidagi QR kodni skaner qiling:\n');

qrcode.generate(expoUrl, { small: true });

console.log('\n------------------------------------------------------------\n');

console.log(`[2] MOBILE WEB (BRAUZER) QR CODE:`);
console.log(`URL: ${webUrl}`);
console.log('Telefoningiz kamerasidan ushbu QR kodni skaner qilib oching:\n');

qrcode.generate(webUrl, { small: true });

console.log('\n============================================================');
console.log('SAVDOX serverlari:');
console.log(`- Web:    ${webUrl}`);
console.log(`- Mobile: ${expoUrl}`);
console.log('============================================================\n');

