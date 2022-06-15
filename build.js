import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

RegExp.prototype.toJSON = function() {
  return {type: 'RegExp', source: this.source, flags: this.flags};
}

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(__dirname, 'dist');

fs.readdirSync(srcDir).forEach(async (file) => {
  if(/lang-.+\.js$/.test(file)) {
    const pathname = path.join(srcDir, file);
    const obj = (await import(pathname)).default;
    fs.writeFileSync(path.join(destDir, `${file}on`), JSON.stringify(obj));
  }
});