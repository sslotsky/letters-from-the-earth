export default function dictionary() {
  const data = {};

  const d = {};

  d.set = (...keys) => (insertion) => {
    keys.forEach((k) => {
      data[k] = insertion;
    });

    return d;
  };

  d.get = (key, defaultVal) => data[key] || defaultVal;

  return d;
}

