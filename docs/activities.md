# Activities

Activities are the building blocks of an Android application's user interface. Each activity is a single, focused task that the user can interact with. Activities typically have a UI layout associated with them and can interact with other activities to form a cohesive user experience.

## Key Concepts

- **Lifecycle:** Activities have a lifecycle that includes various states such as onCreate, onStart, onResume, onPause, onStop, and onDestroy. Understanding the lifecycle is crucial for managing resources and handling state transitions.
- **Intent:** Activities are typically launched using intents. Intents can be explicit (targeting a specific activity within the same app) or implicit (targeting an activity based on its action or category).
- **UI Layout:** Activities can define their user interface using XML layout files, which define the arrangement of UI elements such as buttons, text views, and input fields.
- **Activity Stack:** Activities are managed in a stack called the activity back stack. When a new activity is started, it is pushed onto the stack, and when an activity is finished or the user navigates back, it is popped off the stack.

## Best Practices

- **Single Responsibility:** Each activity should have a single, well-defined purpose or responsibility to keep the codebase clean and maintainable.
- **Responsive UI:** Activities should respond quickly to user interactions and avoid blocking the UI thread with long-running operations.
- **State Management:** Properly manage the activity lifecycle to handle configuration changes (such as screen rotations) and save/restore instance state to maintain user session data.
