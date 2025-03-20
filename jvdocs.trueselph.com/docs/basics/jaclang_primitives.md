---
id: nodes-edges-walkers
title: Nodes, Edges, and Walkers in JIVAS
sidebar_label: Nodes, Edges, and Walkers
sidebar_position: 4
---

# Nodes, Edges, and Walkers in JIVAS

JIVAS leverages **Nodes**, **Edges**, and **Walkers** from JacLang to build and traverse graph-based architectures. These primitives form the foundation of the framework's modular and extensible design.

---

## Nodes

Nodes are the building blocks of the graph. They represent entities with properties and behaviors, similar to classes in object-oriented programming.

### Key Features of Nodes
- **Attributes**: Nodes can have attributes (e.g., `has name: str`).
- **Abilities**: Nodes can define callable methods (`can`) and visit-dependent methods triggered by walkers.

### Example
```jac
node ExampleNode {
    has name: str = "Default Name";

    can greet {
        print(f"Hello, my name is {self.name}!");
    }
}
```

### Connecting Nodes
Nodes can be connected to form relationships:
- **One-to-One**: A single node connects to another.
- **One-to-Many**: A single node connects to multiple nodes.
- **Many-to-One**: Multiple nodes connect to a single node.
- **Many-to-Many**: Groups of nodes connect to each other.

```jac
node NodeA {}
node NodeB {}

with entry {
    node_a = NodeA();
    node_b = NodeB();
    node_a ++> node_b;  # One-to-One connection
}
```

---

## Edges

Edges define relationships between nodes. They can be generic or custom, with properties.

### Generic Edges
```jac
with entry {
    node_1 ++> node_2;  # Unidirectional edge
    node_1 <++> node_2; # Bidirectional edge
}
```

### Custom Edges
Custom edges allow additional properties:
```jac
edge CustomEdge {
    has weight: int;
}

with entry {
    node_1 +:CustomEdge:weight=5:+> node_2;
}
```

### Deleting Edges
Edges can be removed using the `del` keyword:
```jac
node_1 del --> node_2;
```

---

## Walkers

Walkers are agents that traverse the graph, performing tasks on nodes they visit. They are essential for executing workflows in JIVAS.

### Key Features of Walkers
- **Attributes**: Walkers can have their own properties.
- **Abilities**: Walkers define callable and visit-dependent methods.
- **Graph Traversal**: Walkers navigate the graph using the `visit` keyword.

### Example
```jac
walker ExampleWalker {
    can on_node with ExampleNode entry {
        print(f"Visiting node: {here.name}");
    }
}
```

### Spawning Walkers
Walkers are spawned at specific points in the graph:
```jac
spawn ExampleWalker() on node_a;
```

### Traversal
Walkers use `visit` to navigate:
- `visit [-->]`: Visit successors.
- `visit [<--]`: Visit predecessors.
- `visit [node_name]`: Visit a specific node.

---

## Summary

- **Nodes**: Represent entities with attributes and abilities.
- **Edges**: Define relationships between nodes.
- **Walkers**: Traverse the graph, executing tasks on nodes.

By combining these primitives, JIVAS enables developers to build intelligent, graph-based AI solutions.