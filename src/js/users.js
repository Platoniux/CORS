import getData from './getData';

getData('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then(response => {
    response.forEach(item => {
      Object.keys(item).forEach(keys => {
        console.log(item[keys]);
      });
    });
  });