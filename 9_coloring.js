const graph = {
    a: ['b', 'c'],
    b: ['a', 'd', 'e'],
    c: ['a', 'd', 'g'],
    d: ['b', 'e', 'g', 'c'],
    e: ['b', 'd', 'f', 'h'],
    f: ['e', 'h'],
    g: ['c', 'd', 'i'],
    h: ['e', 'f', 'i'],
    i: ['g', 'h', 'j'],
    j: ['i']
};

function coloring(graph) {
    const colors = ["blue", "green", "red", "orange", "pink", "purple"];
    const coloredNodes = {};

    const sortedNodes = Object.keys(graph).sort((a, b) => graph[b].length - graph[a].length);
    
    sortedNodes.forEach(node => {
        const neighbors = graph[node];
        const usedColors = new Set(neighbors.map(neighbor => coloredNodes[neighbor]));

        let color;
        for (let c of colors) {
            if (!usedColors.has(c)) {
                color = c;
                break;
            }
        }

        coloredNodes[node] = color;
    });

    console.log("Node Colors:", coloredNodes);

}

coloring(graph);
