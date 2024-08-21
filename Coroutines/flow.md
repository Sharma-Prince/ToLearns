## Cold Flows in Kotlin

In Kotlin, **cold flows** are flows that do not produce values until they are collected. Cold flows are useful for managing and processing asynchronous data streams. Below are the main types of cold flows, including a basic example of how to create and use them.

### 1. Basic Flow

**Definition:** The simplest form of cold flow, created using the `flow` builder. It emits values sequentially when collected.

**Example:**

```kotlin
fun simpleFlow(): Flow<Int> = flow {
    for (i in 1..3) {
        delay(100)  // Simulate some work
        emit(i)
    }
}

fun main() = runBlocking {
    val flow = simpleFlow()

    println("Collecting flow")
    flow.collect { value -> println(value) }
}
```


### 2. `flowOf  (unsafeFlow)`
**Definition** : A cold flow that emits a fixed set of values and then completes

```kotlin
fun main() = runBlocking {
    val flow = flowOf(1, 2, 3, 4, 5)

    println("Collecting flowOf")
    flow.collect { value -> println(value) }
}

```


### 3. `asFlow  (unsafeFlow)`
**Definition** Converts an iterable (like a list, range, or array) or a sequence into a flow.

```kotlin
fun main() = runBlocking {
    val list = listOf(1, 2, 3, 4, 5)
    val flow = list.asFlow()

    println("Collecting asFlow from list")
    flow.collect { value -> println(value) }
}
```

### 4. `channelFlow (multiple)`
**Definition** A more advanced type of flow that allows concurrent emission of values. It is used when you need to emit values from multiple coroutines.

```kotlin
fun main() = runBlocking {
    val flow = channelFlow {
        launch {
            send(1)
            send(2)
        }
        launch {
            send(3)
            send(4)
        }
    }

    println("Collecting channelFlow")
    flow.collect { value -> println(value) }
}
```
