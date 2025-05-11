import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const [, , funcName, targetDir] = process.argv;

if (!funcName) {
    console.error("Usage: ts-node scripts/create.ts <funcName> <targetDir>");
    process.exit(1);
}

const fileName = funcName

const dir = 'src' + '/' + targetDir;
const fullPath = join(dir, `${fileName}.ts`);

if (!existsSync(dir)) {
    mkdirSync(dir);
}

if (existsSync(fullPath)) {
    console.error(`${fileName}.ts already exists!`);
    process.exit(1);
}

const template = `// ${fileName}.ts

function ${fileName}() {

}

${fileName}();
`;

writeFileSync(fullPath, template);
console.log(`Created: ${fullPath}`);
