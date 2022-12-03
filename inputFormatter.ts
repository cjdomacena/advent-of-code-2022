export const formatInput = async (path: string) => {
  const inputs = await Deno.readTextFile(path);
  return inputs.split(/\r\n|\n/);
};
