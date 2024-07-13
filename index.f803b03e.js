document.querySelectorAll("tr").forEach(function(t){var e=document.createElement("td"),n=document.createElement("th"),o=t.children;e.textContent=o[1].textContent,n.textContent=o[1].textContent,"TH"===o[0].tagName?t.insertBefore(n,o[o.length-1]):t.insertBefore(e,o[o.length-1])});
//# sourceMappingURL=index.f803b03e.js.map
