<style>h2 {text-decoration: underline;}</style>

<!-- Header -->
[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind)

# Design Patterns

Some problems come up time and time again in programming. Design patterns are abstract solutions for those problems. to do: categories, gang of four ...

- [Creational Patterns](#creational-patterns)
    - [Builder](#builder)
    - [Dependency Injection](#dependency-injection)
    - [Factory](#factory)
    - [Prototype](#prototype)
    - [Resource Allocation Is Initialization](#raii)
    - [Singleton](#singleton)
- [Structural Patterns](#structural-patterns)
- [Behavioral Patterns](#behavioral-patterns)

## Creational Patterns

Deal with how objects are created

### Builder
### Dependency Injection
### Factory
### Prototype
### RAII

Resource Allocation Is Initialization (RAII)

### Singleton

A singleton is a type of object that can only ever have one instance. Singletons are useful to access global variables, for example settings in your application. The key idea is to hide the constructor and only access the class through a `getInstance` method.

<details>
<summary>📋 Example Code</summary>

```c#:Singleton.cs```

</details>

[⬆️ Back to top](#design-patterns)

## Structural Patterns

Relationships between objects

### Facade
### Proxy

## Behavioral Patterns

How objects communicate to each other

### Iterator
### Mediator
### Observer
### State