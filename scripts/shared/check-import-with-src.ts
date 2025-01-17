import {grepByPattern} from './grep-by-pattern';

export async function checkImportWithSrc(path: string): Promise<void> | never {
    const includePattern = 'import(.*/src/.*)';
    const result = await grepByPattern({includePattern, path, excludePattern: 'demo'});

    if (result.length > 0) {
        throw new Error(`There are problems with ${includePattern} in:\n\n${result}`);
    }
}
