import getData from './getData';
import makeLayout from './makeLayout';

const containerForUsers = document.querySelector('.js-container');

getData('https://tanuhaua.github.io/datas-file-json/github_users.json')
  .then(response => {
    response.forEach(item => {
      let fullName = item['fullName'];
      getData(`https://api.github.com/users/${item['githubName']}`)
          .then(gitHubInfoUser => {
            makeLayout(containerForUsers, fullName, gitHubInfoUser['login'], gitHubInfoUser['avatar_url']);
          });
    });
  });