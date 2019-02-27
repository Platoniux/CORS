const getData = (url) => {
  return new Promise(function (resolve, reject) {
    let ajaxReq = new XMLHttpRequest();
    ajaxReq.open('GET', url, true);
    ajaxReq.onreadystatechange = () => {
      if (ajaxReq.readyState !== 4) return;

      if (ajaxReq.status !== 200) {
        reject(new Error(`${ajaxReq.status}:${ajaxReq.statusText}`));
      } else {
        resolve(JSON.parse(ajaxReq.responseText));
      }
    }
    ajaxReq.send();
  })
};

export default getData;