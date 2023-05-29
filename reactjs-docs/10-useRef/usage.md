# Almacenar referencia como flag

En un useEffect, cuando queramos que se ejecute solo cuando sea la primera ejecucion, podemos utilizar una referencia como flag para que sirva como variable auxiliar.

```js
const App = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = true;
      return;
    }

    document.title = count;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </>
  );
};
```

# Almacenar Ids de timeouts y intervals

```js
const App = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);

  const seconds = now && start ? (now - start) / 1000 : 0;

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    if (!intervalRef.current) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <h1>{seconds.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
```

# Scroll en image carousel

Cada vez que se pasemos a la siguiente imagen, que se haga scroll horizontal. Para ello necesitamos llamar al método _scrollIntoView()_

```js
import { useState, useRef, useEffect } from "react";

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const selectedRef = useRef(null);

  useEffect(() => {
    selectedRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else {
              setIndex(0);
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          }}
        >
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                className={index === i ? "active" : ""}
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
```

# Video player

Para reproducir un video, necesitamos acceder directamente a las propiedades del elemento video y llamar a los métodos _play()_ y _pause()_.

```js
import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
```
