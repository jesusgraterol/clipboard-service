# Clipboard Service

The `clipboard-service` package is a lightweight, easy-to-use library that simplifies interaction with the browser’s [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). With `ClipboardService`, you can easily read from and write to the clipboard with just a few lines of code. It provides a straightforward, promise-based API for copying and pasting text or other content, allowing you to focus on building your application without worrying about clipboard intricacies.


</br>

## Getting Started

Install the package:
```bash
npm install -S clipboard-service
```

### Usage

```tsx
...
import { ClipboardService } from 'clipboard-service';

const CodeSnippet = ({ code }) => (
  <div className="relative">
    {
      ClipboardService.isCompatible && (
        <Button
          className='absolute top-2 right-2'
          aria-label='Click to copy the content to Clipboard'
          onClick={async () => {
            try {
              await ClipboardService.writeText(code);
            } catch (e) {
              console.error(e);
            }
          }}
        >
          <Copy className='w-4 h-4' />
        </Button>
      )
    }
    <pre>{code}</pre>
  </div>
);
```





<br/>

## Types

<details>
  <summary><code>IClipboardItem</code></summary>
  
  Represents an item that can be copied to or read from the clipboard. For more information, visit: [ClipboardItem](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem).

  ```typescript
  type IClipboardItem = ClipboardItem;
  ```
</details>

<details>
  <summary><code>IClipboardService</code></summary>
    

  Object in charge of interacting with the Clipboard API.

  ```typescript
  type IClipboardService = {
    // properties
    isSupported: boolean;

    // actions
    write: (data: IClipboardItem[]) => Promise<void>;
    writeText: (data: string) => Promise<void>;
    read: () => Promise<IClipboardItem[]>;
    readText: () => Promise<string>;
  };
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
