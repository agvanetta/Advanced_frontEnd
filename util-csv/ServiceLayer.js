/*   Service Layer   */

export const downloadService = async (fileName) => {

  const url = `/src/assets/files/${fileName}`;
  
  console.log(url);


  const fileResponse = await fetch(url, {
    method: "GET",
  });
  return await fileResponse.blob();
};
