# Clipboard Service

The `clipboard-service` package is a lightweight, easy-to-use library that simplifies interaction with the browser’s [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). With `ClipboardService`, you can easily read from and write to the clipboard with just a few lines of code. It provides a straightforward, promise-based API for copying and pasting text or other content, allowing you to focus on building your application without worrying about clipboard intricacies.


</br>

## Getting Started

Install the package:
```bash
npm install -S clipboard-service
```

### Usage

Register the Service Worker:

```typescript
import { ClipboardService } from 'clipboard-service';

...
```

<br/>

...:

```typescript
import { ClipboardService } from 'clipboard-service';

...
```





<br/>

## Types

<details>
  <summary><code>IAppInstallerService</code></summary>
  
  The service in charge of managing the PWA's Installation process.
  ```typescript
  interface IAppInstallerService {
    // properties
    installationPromptOutcome: IInstallationPromptOutcome | undefined;
    appInstalled: boolean | undefined;
    runningInstalledApp: boolean;

    // actions
    canAppBeInstalled: () => boolean;
    installApp: () => Promise<void>;
  }
  ```
</details>





<br/>

## Built With

- TypeScript




<br/>

## Running the Tests

```bash
# integration tests
npm run test:integration

# unit tests
npm run test:unit
```





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Deployment

Install dependencies:
```bash
npm install
```


Build the library:
```bash
npm start
```


Publish to `npm`:
```bash
npm publish
```
