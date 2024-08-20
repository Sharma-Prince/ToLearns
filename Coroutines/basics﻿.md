# Getting Started

This project demonstrates the usage of coroutines in Kotlin.
Coroutines are a powerful feature in Kotlin that allows for efficient and lightweight concurrency,
making it easier to write asynchronous code.

## Coroutine

- Kotlin Coroutines allow you to create lightweight concurrent tasks.
- Coroutine functions can be suspended and resumed, 
making it easier to handle asynchronous operations.

## Coroutine Builders

Coroutine builders provide a structured way to write asynchronous code in Kotlin.

### `launch`

**Purpose:** For fire-and-forget operations where you don't need to wait for a result.

### `async`

**Purpose:** For computing values asynchronously and retrieving the result later.

### `runBlocking`

**Purpose:** For blocking the current thread until all child coroutines complete, typically used for testing or top-level functions.

### `withContext`

**Purpose:** For changing the context of a coroutine, such as switching the dispatcher or accessing context elements.

### `coroutineScope`

**Purpose:** For maintaining structured concurrency and ensuring child coroutines are cancelled when the parent is cancelled.


## 1  `launch`

**Purpose:** Creates a new coroutine without returning a result.

**Return Type:** `Job`

**Usage:** Ideal for fire-and-forget operations where you don't need a return value.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
}
```

## 2 `async`

**Purpose:** Creates a new coroutine that returns a `Deferred<T>` value, which can be awaited later.

**Return Type:** `Deferred<T>`

**Usage:** When you need to compute a value asynchronously and use it later.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    val deferred = async {
        delay(1000L)
        return@async "Hello"
    }
    println("I'm not blocked")
    println(deferred.await())
}
```


## 3 `runBlocking`

**Purpose:** Blocks the current thread until all child coroutines complete.

**Return Type:** `T` (the return type of the block)

**Usage:** Primarily for testing or top-level functions where blocking is acceptable.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    delay(1000L)
    println("World!")
}
```

## 4 `withContext`

**Purpose:** Changes the context of a coroutine, including dispatcher and elements.

**Return Type:** `T` (the return type of the block)

**Usage:** For switching between different dispatchers or to access context elements.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    val result = withContext(Dispatchers.Default) {
        // Perform CPU-intensive work here
        "Result from default dispatcher"
    }
    println(result)
}
```

## 5 `runBlocking`

**Purpose:** Blocks the current thread until all child coroutines complete.

**Return Type:** `T` (the return type of the block)

**Usage:** Primarily for testing or top-level functions where blocking is acceptable.

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    delay(1000L)
    println("World!")
}
```
