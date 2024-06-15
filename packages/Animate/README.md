# Versi UI - Animate

Animate is an animation component running on react-spring. Animate is written in component format to make it easy to use. It contains a number of very common animation effect for wrapper elements as well as texts.

## Getting Started

### Installation

    npm install @jerbits/animate

### Import and use
```jsx
import { AnimateDirection } from '@jerbits/animate';

<AnimateDirection.Up>This animates up when it renders</AnimateDirection.Up>;

```

### Configuration
| Props | type | Description |
| --- | --- | --- |
| classes | string | Append your custom classes to the Animate element |
| animationFlag | boolean | controls animation start via flag instead on render |
| delay | number | animation start delay in milliseconds |


### Animate Direction Tags

```jsx
import { AnimateDirection } from '@jerbits/animate';

<AnimateDirection.Up>This animates up when it renders</AnimateDirection.Up>;

<AnimateDirection.Down>This animates down when it renders</AnimateDirection.Down>;

<AnimateDirection.Left>This animates left when it renders</AnimateDirection.Left>;

<AnimateDirection.Right>This animates right when it renders</AnimateDirection.Right>;

```

### Animate Text Tags

```jsx
import { Animate } from '@jerbits/animate';

<AnimateText.Interlock>Interlock text effect</AnimateText.Interlock>;
<AnimateText.ChainUp>Chain up text effect</AnimateText.ChainUp>;
<AnimateText.ChainDown>Chain down text effect</AnimateText.ChainDown>;
```
