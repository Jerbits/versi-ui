# Versi UI - Typography

Typography is a simple React component that handles common HTML headings and its associated configurations when rendering them
to your page. Additionally, it exposes some options to allow effects like gradient texts and animations.

## Getting Started

### Installation

    npm install @jerbits/typography

### Add to your page

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1>H1 Heading</Typography.H1>;
```

### Configuration
| Props | type | Description |
| --- | --- | --- |
| classes | string | Append your custom classes to the Typography element |
| id | string | Add a unique ID |
| size | string | Predefined sizes for each Typography element. Allows elements to be displayed in a different size while retaining its heading tag|
| gradient.gradientCss | string | gradient css function e.g. linear-gradient(#e66465, #9198e5) |
| gradient.animate | string | allows basic left to right animation on the gradient |

### All available tags

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1>H1 Heading</Typography.H1>;
<Typography.H2>H2 Heading</Typography.H2>;
<Typography.H3>H3 Heading</Typography.H3>;
<Typography.H4>H4 Heading</Typography.H4>;
<Typography.H5>H5 Heading</Typography.H5>;
<Typography.P>Paragraph</Typography.P>;
```

### Keep as H1 tag but with H4 size

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1 size='H4'>H1 Heading</Typography.H1>;
```

### H1 tag but with H4 size

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1 size='H4'>H1 Heading</Typography.H1>;
```

### Static gradient

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1 gradient={gradient: {gradientCss: linear-gradient(#e66465, #9198e5)}}>H1 Heading</Typography.H1>;
```


### Animated gradient

```jsx
import { Typography } from '@jerbits/typography';

<Typography.H1 gradient={gradient: {gradientCss: linear-gradient(#e66465, #9198e5), isAnimate: true}}>H1 Heading</Typography.H1>;
```