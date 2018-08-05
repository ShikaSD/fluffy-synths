const nodes = new Map()

export function add(id, audio) {
  nodes.set(id, audio)
}

export function connect(id1, id2) {
  const first = nodes.get(id1)
  const second = nodes.get(id2)
  first.output().connect(second.input())
}

export function disconnect(id1, id2) {
  const first = nodes.get(id1)
  const second = nodes.get(id2)
  first.output().disconnect(second.input())
}

export function node(id) {
  return nodes.get(id)
}
