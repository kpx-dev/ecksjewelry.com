const maxPendants = 64;
const maxRings = 34;
const maxCufflinks = 3;

function gen(max, folder) {
  const payload = [];
  for (let i = 1; i <= max; i++) {
    payload.push(
    {
      src: `img/${folder}/${i}.jpg`,
      thumbnailWidth: '400px'
    });
  }

  return payload;
}

const pendants = gen(maxPendants, 'pendants');
const rings = gen(maxRings, 'rings');
const cufflinks = gen(maxCufflinks, 'cufflinks');

export {pendants, rings, cufflinks} ;
