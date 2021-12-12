const fs = require(`fs`).promises;

export const readContent = async (path) => {
  try {
    const content = await fs.readFile(path, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    return [];
  }
};