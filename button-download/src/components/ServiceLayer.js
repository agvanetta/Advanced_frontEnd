/*   Service Layer   */

export const downloadService = async (file) => {
  const url = `button-download/src/assets/files/${file}`;

  const fileResponse = await fetch(url, {
    method: "GET",
  });
  return await fileResponse.blob();
};

