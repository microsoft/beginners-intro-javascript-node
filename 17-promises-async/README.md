# Asynchronous code

Modern app development involves communicating with other systems. These communications can take time, and can cause your application to pause unable to perform other operations.

JavaScript is able to manage long running operations through the use of **promises**. A **promise** is similar to an [IOU](https://wikipedia.org/wiki/IOU); the code is promising it will let you know when it completes and execute the function you provide. You can use promises directly to specify how you want your code to respond when a call to a remote system returns.

Recently, a new pattern has emerged. Building upon promises, `async`/`await` allows you to create code which looks synchronous yet is asynchronous. This helps make code more readable while still taking allowing for better performance.

## Further reading

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
