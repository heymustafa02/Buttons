~~~/README.md
# JellySqueeze Component

A high-fidelity interactive 3D jelly simulation that responds to vertical dragging and mouse movement. Uses GSAP for physics-based animation and optimized image sequencing.

## Features

- **Physics-based Interaction**: Drag the jelly vertically to see it squeeze and bounce back with realistic inertia.
- **Image Sequence Animation**: Uses a sequence of 215 high-quality images to create a 3D effect without WebGL.
- **Mouse Follow Mode**: Optional mode where the jelly squeeze follows the mouse cursor position.
- **Responsive**: Automatically adjusts to canvas size and device pixel ratio.
- **Loading State**: Built-in loader while preloading the image sequence.

## Usage

```tsx
import { JellySqueeze } from '@/sd-components/781928a0-2180-4e75-bf1c-17eac7236428';

function MyPage() {
  return (
    <div className="h-screen w-full">
      <JellySqueeze 
        title="Squeeze Me!" 
        showControls={true} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showControls` | `boolean` | `true` | Whether to show the bottom "Follow mouse" checkbox control. |
| `className` | `string` | `undefined` | Additional CSS classes for the container. |
| `title` | `string` | `"Drag vertically to squeeze"` | The text displayed above the jelly. |

## Dependencies

- `gsap`: For Draggable interaction and animation smoothing.
- `lucide-react`: For UI icons.
~~~# Buttons
