import fs from 'fs';
import path from 'path';

const dist = path.join(process.cwd(), 'dist');
const files = fs.readdirSync(dist);

const filename = pattern => files.find(f => pattern.test(f));

export const bundle = filename(/^bundle.*\.js$/);
export const vendorBundle = filename(/^vendor.bundle.*\.js$/);

