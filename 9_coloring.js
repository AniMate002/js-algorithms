// Define the graph
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

// Function to color the graph
function coloring(graph) {
    const colors = ["blue", "green", "red", "orange", "pink", "purple"];
    const coloredNodes = {};

    // Iterate through each node in descending order of degrees
    const sortedNodes = Object.keys(graph).sort((a, b) => graph[b].length - graph[a].length);
    
    sortedNodes.forEach(node => {
        const neighbors = graph[node];
        const usedColors = new Set(neighbors.map(neighbor => coloredNodes[neighbor]));

        // Find the first available color for the node
        let color;
        for (let c of colors) {
            if (!usedColors.has(c)) {
                color = c;
                break;
            }
        }

        // Assign the color to the node
        coloredNodes[node] = color;
    });

    // Output the coloring result
    console.log("Node Colors:", coloredNodes);

}

// Call the coloring function
coloring(graph);
