/**
 * 凭证配置工具
 * 用法: node setup-credentials.js YOUR_SECRET_ID YOUR_SECRET_KEY
 * 写入位置: ~/.summer-adventure/credentials.json（跨重启永久保留）
 */
const path = require('path');
const fs = require('fs');

const [secretId, secretKey] = process.argv.slice(2);

if (!secretId || !secretKey) {
  console.error('用法: node setup-credentials.js SECRET_ID SECRET_KEY');
  process.exit(1);
}

const dir = path.join(
  process.env.HOME || process.env.USERPROFILE || require('os').homedir(),
  '.summer-adventure'
);

// 确保目录存在
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const file = path.join(dir, 'credentials.json');

// 读取已有凭证（如存在则保留）
let existing = {};
if (fs.existsSync(file)) {
  try {
    existing = JSON.parse(fs.readFileSync(file, 'utf-8'));
  } catch(e) {}
}

// 合并用户输入的新凭证
existing.secretId = secretId;
existing.secretKey = secretKey;

fs.writeFileSync(file, JSON.stringify(existing, null, 2));

console.log('✅ 凭证已保存到 ' + file);
console.log('   SecretId: ' + secretId.slice(0, 8) + '...');
console.log('   重启后自动生效，无需重新配置');
