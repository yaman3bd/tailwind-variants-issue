# Tailwind Variants Type Issue

to reproduce the issue:

in any react project install the package:
```bash
npm i tailwind-variants-issue
```
then import Button component from the package and use it in your project:
```javascript
import { Button } from 'tailwind-variants-issue'

function App() {
  return (
    <div className="App">
      <Button
        variant="link"
        color="gray"
      />
    </div>
  );
}
```
then typescript will throw an error on the variant/color props with the following message:
```bash
TS2322: Type string is not assignable to type never
```
