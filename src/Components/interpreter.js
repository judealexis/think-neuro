// ["λ", "Λ", "tabbed2"]

// emphasis is bold
// interpreter.js
const rubric = [
  ["ε","Ε","emphasis"],
  ["β","Β","blue"],
  ["ω","Ω","white"],
  ["α","Α","black"],
  ["ρ","Ρ","break"],
  ["ι","Ι","italic"],
  ["ν","Ν","textIt"],
  ["κ","Κ","tabbed"],
  ["φ","Φ","link"],
  ["λ","Λ","list"],
  ["π","Π","point"],
  ["τ","Τ","title"]
];

// regex to strip *any* of your Greek delimiters
const allTags = rubric.map(([o,c]) => o + c).join("");
const stripTags = new RegExp(`[${allTags}]`, "g");

export function interpret(inText) {
  // 1) Collect all tagged segments
  const matches = [];
  for (let [open, close, label] of rubric) {
    const re = new RegExp(`(?<=${open})[\\s\\S]*?(?=${close})`, "g");
    let m;
    while ((m = re.exec(inText)) !== null) {
      matches.push({
        start:   m.index,
        end:     m.index + m[0].length,
        label,
        text:    m[0],
        children:[]
      });
    }
  }

  // 2) Sort by start asc, length desc
  matches.sort((a, b) =>
    a.start - b.start ||
    (b.end - b.start) - (a.end - a.start)
  );

  // 3) Nest under the tightest enclosing tag
  const topLevel = [];
  matches.forEach((node, i) => {
    const enclosing = matches
      .slice(0, i)
      .filter(cand =>
        node.start >= cand.start &&
        node.end   <= cand.end
      );
    if (enclosing.length) {
      const parent = enclosing.reduce((best, cand) =>
        cand.start > best.start ? cand : best
      );
      parent.children.push(node);
    } else {
      topLevel.push(node);
    }
  });

  // 4) Fill gaps everywhere with "black" nodes
  function fillGaps(nodes, spanStart, spanEnd) {
    nodes.sort((a,b) => a.start - b.start);
    const filled = [];
    let cursor = spanStart;

    for (let node of nodes) {
      if (node.start > cursor) {
        const raw   = inText.slice(cursor, node.start);
        const clean = raw.replace(stripTags, "");
        if (clean) filled.push({
          start:   cursor,
          end:     node.start,
          label:   "black",
          text:    clean,
          children:[]
        });
      }
      filled.push(node);
      cursor = node.end;
    }

    if (cursor < spanEnd) {
      const raw   = inText.slice(cursor, spanEnd);
      const clean = raw.replace(stripTags, "");
      if (clean) filled.push({
        start:   cursor,
        end:     spanEnd,
        label:   "black",
        text:    clean,
        children:[]
      });
    }

    // recurse for any node that *already* has children
    for (let n of filled) {
      if (n.children.length) {
        fillGaps(n.children, n.start, n.end);
      }
    }

    nodes.splice(0, nodes.length, ...filled);
  }
  fillGaps(topLevel, 0, inText.length);

  // 5) Prune any non-point children from list nodes,
  //    so only π…Π bullets remain at that level
  function pruneLists(nodes) {
    nodes.forEach(n => {
      if (n.label === "list") {
        n.children = n.children.filter(c => c.label === "point");
      }
      if (n.children.length) pruneLists(n.children);
    });
  }
  pruneLists(topLevel);

  // 6) **Wrap** any plain‐text bullets into black‐tagged children
  //    so that <li>…</li> always uses the black styling
  function wrapPlainPoints(nodes) {
    nodes.forEach(n => {
      if (n.label === "list") {
        n.children.forEach(pt => {
          if (
            pt.label === "point" &&
            pt.children.length === 0
          ) {
            // turn its raw text into a single black child
            const clean = pt.text.replace(stripTags, "");
            pt.children = clean
              ? [{
                  start:   pt.start,
                  end:     pt.end,
                  label:   "black",
                  text:    clean,
                  children:[]
                }]
              : [];
          }
        });
      }
      if (n.children.length) wrapPlainPoints(n.children);
    });
  }
  wrapPlainPoints(topLevel);

  return topLevel;
}




/*
Each topLevel is array with elements like

{
start: 1, 
end: 275, 
label: 'black', 
text: 'The main perks of participation in ThinkNeuro’s pr…e refer to the “Programs” section of our website.', 
children: Array(0)
}

*/