import { APP_HOST } from "@/config/constants";

export const postData = async function (url = "", data = {}, needToken) {
  try {
    url = APP_HOST + url;
    let aHeaders = new Headers();
    aHeaders.append("Content-Type", "application/json");
    // if (needToken) {
    //   let token = localStorage.getItem("token");
    //   if (token != null) {
    //     aHeaders.append("Authorization", `${"Bearer " + token}`);
    //   } else {
    //     throw "No se pudo obtener el token";
    //   }
    // }
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: aHeaders,
      body: JSON.stringify(data),
    });

    if(!response.ok) throw new Error('Error en la petición');
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getData = async function (url = "") {
  try {
    url = APP_HOST + url;
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    
    if(!response.ok) throw new Error('Error en la petición');
    return response.json();
  } catch (error) {
    throw error;
  }
};


export const deleteRequest = async function (url = "", needToken) {
  url = APP_HOST + url;
  let aHeaders = new Headers();
  aHeaders.append("Content-Type", "application/json");
  // if (needToken) {
  //   let token = localStorage.getItem("token");
  //   if (token != null) {
  //     aHeaders.append("Authorization", `${"Bearer " + token}`);
  //   } else {
  //     throw "No se pudo obtener el token";
  //   }
  // }
  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
    headers: aHeaders,
  });
  return response.json();
};

