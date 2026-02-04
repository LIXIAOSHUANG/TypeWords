/**
 * 通用 EO Pages 部署脚本
 * 用法: node scripts/deploy-eo-pages.js --dir <dist目录> --name <EO项目名>
 * 示例:
 *   node scripts/deploy-eo-pages.js --dir dist --name type-words-deploy
 *   node scripts/deploy-eo-pages.js -d dist -n vscode-web-deploy
 *
 * 环境变量: EO_PAGES_TOKEN（必填）
 */


const { spawn } = require('child_process')
const path = require('path')

const argv = process.argv.slice(2)
function getArg(name, short) {
  const i = argv.indexOf(name)
  const iShort = short != null ? argv.indexOf(short) : -1
  const idx = i >= 0 ? i : iShort
  if (idx >= 0 && argv[idx + 1]) return argv[idx + 1]
  return null
}
const fs = require('fs');

// 获取 dist 目录路径（根据脚本参数调整）
const distDir = process.argv.find(arg => arg.startsWith('--dir='))?.split('=')[1] || 'dist';
const sitemapPath = path.join( distDir, 'sitemap.xml');//process.cwd(),
// console.log(`sitemapPath: ${sitemapPath}`);
// 检查文件是否存在
if (!fs.existsSync(sitemapPath)) {
  console.warn(`警告：${sitemapPath} 文件不存在，跳过该文件处理`);
  // 可选：创建空的 sitemap.xml 避免报错
  fs.writeFileSync(sitemapPath, '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
}
const dir = getArg('--dir', '-d') || 'dist'
const name = getArg('--name', '-n') || "typewords";//'01LK5ZkHbWSKFXMuXXjzGz9cbmBaEHBqcwRY/q8xTqg=';

if (!name) {
  console.error('❌ 缺少 EO Pages 项目名，请使用 --name 或 -n 指定')
  process.exit(1)
}
// const dotenv = require('dotenv').config();
// console.log(`dotenv: ${JSON.stringify(dotenv)}`);
//01LK5ZkHbWSKFXMuXXjzGz9cbmBaEHBqcwRY/q8xTqg=
const EO_PAGES_TOKEN = "01LK5ZkHbWSKFXMuXXjzGz9cbmBaEHBqcwRY/q8xTqg=";//process.env
if (!EO_PAGES_TOKEN) {
  console.error('❌ 缺少必要的环境变量 EO_PAGES_TOKEN，请检查 GitHub Secrets 配置')
  process.exit(1)
}

const distPath = path.resolve(process.cwd(), dir)
const cmd = `edgeone pages deploy "${distPath}" -n ${name} -t ${EO_PAGES_TOKEN}`

const child = spawn(cmd, [], { shell: true, stdio: 'inherit' })
child.on('close', (code) => {
  process.exit(code ?? 0)
})

