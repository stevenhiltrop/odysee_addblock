console.log('Background service started')

const filter = {
  url: [
    {
      urlEquals: 'https://odysee.com/',
    },
  ],
};

chrome.webNavigation.onCompleted.addListener(() => {
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.ads__claim-item').remove();
  });
}, filter);
