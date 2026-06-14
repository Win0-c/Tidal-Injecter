# Tidal Injecter

A mod injector for **Animal Company** that enables TypeScript mod support and unlocks crossplay between Steam and Quest servers — a feature not available in the base game.

---

## Features

- **TypeScript Injection** - Write and inject mods in TypeScript; no need to wrestle with raw game files
- **Steam × Quest Crossplay** - Play with friends across platforms that the game officially keeps separate
- **Easy Setup** - Minimal configuration required to get up and running

---

## Requirements

- Animal Company (Steam or Quest)
- Python 3+
- Windows PC

---

## Getting Started

### 1. Download ZIP

Click on download zip when clicking the green button that says download zip

### 2. Install dependencies

```Command Line:
pip install frida-tools
```

### 4. Inject

Methods:

1. Inject file once after 30 seconds of being in a code
2. Inject the file when in the loading screen it says "Connecting..."

---

## Writing Mods

Mods are written in TypeScript and placed in the root directory. A basic mod looks like:

```typescript
import { Injector } from "../src/injector";

export default function myMod(injector: Injector) {
  injector.on("gameReady", () => {
    console.log("Mod loaded!");
    // Your mod logic here
  });
}
```

---

## Disclaimer

This project is an **unofficial, community-made tool** and is not affiliated with or endorsed by the developers of Animal Company. Use at your own risk. Crossplay is achieved by bridging network layers not intended for cross-platform use, stability may vary.

---

## Credits
Made By Tidal
.gg/

## Contributing

Pull requests are welcome! If you find a bug or want to suggest a feature, open an issue.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/cool-thing`)
3. Commit your changes
4. Open a pull request

---

## License

[MIT](LICENSE)
