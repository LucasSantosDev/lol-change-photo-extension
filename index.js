setInterval(() => {
  mudaImagens();
}, 3000);

var imgsURL = [
  'https://scontent.fssz6-1.fna.fbcdn.net/v/t1.0-9/91025403_2990174267710499_8225944613404278784_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=k-DRs7l9VusAX8uwnLF&_nc_ht=scontent.fssz6-1.fna&oh=2f7e9793e119f8d0f02bcbe207d33ab0&oe=5EB5B243',
  'https://media.tenor.com/images/a9adda18a785b1cb85eec04517d99178/tenor.gif',
  'https://media.tenor.com/images/ccf3069a295be08b371a9097841e4ec9/tenor.gif',
  'https://media1.tenor.com/images/60f5772c117786de417fee7de958531f/tenor.gif?itemid=15480847',
  'https://i.ytimg.com/vi/x8fXYgMdGTM/maxresdefault.jpg',
  'https://media.tenor.com/images/f788d20258873fbbd2495c14bf0abd7e/tenor.gif',
  'https://media.tenor.com/images/bd7a65980e80fb907c514a29816b7125/tenor.gif',
  'https://media1.tenor.com/images/63ca48dd85f2077ef9d251fe7a30d10f/tenor.gif?itemid=16255485',
  'https://media.tenor.com/images/f20faa418c882c7a77b66c0c9b5e1e55/tenor.gif',
  'https://pa1.narvii.com/6577/097b4eea28f3ecb01a3008f47457bf9969f40cd7_hq.gif',
  'https://i.makeagif.com/media/7-01-2017/C--5o7.gif',
  'https://www.gifsengracados.com.br/wp-content/uploads/2010/11/power-ranger-gay.gif',
  'https://s2.glbimg.com/6WV5tdUrYOjnXLZSenlu2sJGijE=/0x0:1136x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/Q/v/TmkpT9SaAEAR0If8F3BA/foto-01-10-2019-13-53-38.jpg',
  'https://images.uncyc.org/pt/8/82/Pessoa_vomitando.jpg',
  'https://media.tenor.com/images/925ce93b06a86aee1310bfacd6a7f6ce/tenor.gif',
  'https://media1.tenor.com/images/e91e0cce744b5997f809ff5435a798ab/tenor.gif?itemid=7787486',
  'https://i.ytimg.com/vi/wZfxPxFg-wI/hqdefault.jpg',
];

function mudaImagens() {
  var imgs = document.querySelectorAll('img');

  imgs.forEach((i) => {
    i.src = `${imgsURL[randomNumber(0, imgsURL.length - 1)]}`;
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
