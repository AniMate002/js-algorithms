const graph = {}

graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}


function dijkstraSearch(graph, start){
    const distances = {}
    const visited = []
    let neighbors = {}

    const nodes = Object.keys(graph)

    for(let node of nodes){
        if(node !== start){
            let value = graph[start][node]
            distances[node] = value || Infinity
        }else{
            distances[node] = 0
        }
    }

    let closestNode = findClosestNode(distances, visited)
    while(closestNode){
        const distance = distances[closestNode]
        neighbors = graph[closestNode]
        Object.keys(neighbors).forEach(neighbor => {
            const newDistance = distance + neighbors[neighbor]
            if(newDistance < distances[neighbor]){
                distances[neighbor] = newDistance
            }
        })
        visited.push(closestNode)
        closestNode = findClosestNode(distances, visited)
    }
    return distances
}


function findClosestNode(distances, visited){
    let lowestDistance = Infinity;
    let lowestNode = null;
    Object.keys(distances).forEach(node => {
        if(distances[node] < lowestDistance && !visited.includes(node)){
            lowestDistance = distances[node]
            lowestNode = node
        }
    })
    return lowestNode;
}

console.log("All distances: ", dijkstraSearch(graph, 'a'))