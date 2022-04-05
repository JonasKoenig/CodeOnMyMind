<!-- Header -->
[⬅️ Back to main page](https://github.com/JonasKoenig/CodeOnMyMind) &nbsp;
[💾 Download](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FJonasKoenig%2FCodeOnMyMind%2Ftree%2Fmaster%2Fprojects%2Fpatterns)

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

description

- 👍 pro
- 👎 con

```c#
private int demo;
```

[⬆️ Back to top](#design-patterns) &nbsp;
[📋 See full example](https://github.com/JonasKoenig/CodeOnMyMind/blob/master/projects/patterns/Builder.cs)



### Dependency Injection
### Factory
### Prototype
### RAII

Resource Allocation Is Initialization (RAII)

### Singleton

A singleton is a type of object that can only ever have one instance. Singletons are useful to manage a state or access global variables, for example settings in your application. The key idea is to hide the constructor and only access the class through a `getInstance` method.

- 👍 easy to access globally unique properties
- 👎 might introduce hidden dependencies
- 👎 difficult to test

```c#
private Settings () {
    // this constructor is only called once
}

static Settings getInstance () {
    if (Settings._instance is null) {
        Settings._instance = new Settings();
    }

    return Settings._instance;
}
```

[⬆️ Back to top](#design-patterns) &nbsp;
[📋 See full example](https://github.com/JonasKoenig/CodeOnMyMind/blob/master/projects/patterns/Singleton.cs)

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