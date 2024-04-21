let rubric = [
    ["ε", "Ε", "emphasis"],
    ["β", "Β", "blue"],
    ["ω", "Ω", "white"],
    ["α", "Α", "black"],
    ["ρ", "Ρ", "break"],
  ];

export function interpret(inText) {
    let matches = [];
    let result = [];  // This will hold the matches with their text and labels

    // Collect all matches
    for (let y = 0; y < rubric.length; y++) {
        let matchA = rubric[y][0];
        let matchB = rubric[y][1];
        let regexPattern = new RegExp(
            `(?<=${matchA})[^${matchA}${matchB}]*?(?=${matchB})`,
            "g"
        );

        let match;
        while ((match = regexPattern.exec(inText)) !== null) {
            matches.push({
                start: match.index,
                end: match.index + match[0].length,
                text: match[0],
                label: rubric[y][2]
            });
        }
    }

    // Correct the sorting by start index, then by length (descending)
    matches.sort((a, b) => {
        if (a.start !== b.start) {
            return a.start - b.start;
        }
        return b.end - a.end; // Prioritize longer matches if they start at the same position
    });

    // Build result list
    for (let match of matches) {
        result.push({
            text: match.text,
            label: match.label
        });
    }

    return result;
}

