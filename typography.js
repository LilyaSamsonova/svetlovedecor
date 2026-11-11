/* Keep short Russian prepositions and conjunctions with the next word. */
(() => {
  const prepositions = /(^|[^\p{L}\p{N}])(перед|через|между|после|около|ради|для|при|под|над|без|про|обо|на|по|за|из|от|до|об|со|во|ко|не|но|в|к|с|у|о|а|и|я)[ \t]+(?=[\p{L}\p{N}«„“])/giu;
  const excluded = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE']);
  function fix(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.parentElement && !excluded.has(node.parentElement.tagName)) {
        const changed = node.nodeValue.replace(prepositions, (_, prefix, word) => prefix + word + '\u00a0');
        if (changed !== node.nodeValue) node.nodeValue = changed;
      }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || excluded.has(node.tagName)) return;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) texts.push(walker.currentNode);
    texts.forEach(fix);
  }
  fix(document.body);
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') fix(record.target);
      for (const node of record.addedNodes) fix(node);
    }
  });
  observer.observe(document.body, {subtree:true, childList:true, characterData:true});
})();
