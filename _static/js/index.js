$(document).ready(function () {
   $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
});

hljs.configure({
    languageDetectRe: /\bhighlight-([\w-]+)\b/i
});

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('[class*=highlight-]').forEach((block) => {
    hljs.highlightElement(block);
  });
});