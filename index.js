const run = () => {
  const html = document.getElementById('html-text');
  const css  = document.getElementById('css-text');
  const doc = document.getElementById('iframe').contentWindow.document;

  document.body.onkeyup = () => {
    doc.open();
    doc.write('<style>' + css.value + '</style>' + html.value);
    doc.close();
  };
}

run();
