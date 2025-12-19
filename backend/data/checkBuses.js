// checkBuses.js
const buses = require('./busestoBhadrachalam.js'); // adjust path if needed

const required = ['fromCity', 'toCity', 'operator', 'serviceNumber', 'busType', 'departureTime', 'arrivalTime'];

function isEmpty(v) {
  return v === undefined || v === null || (typeof v === 'string' && v.trim() === '');
}

const problems = [];
buses.forEach((b, i) => {
  const missing = [];
  for (const key of required) {
    if (isEmpty(b[key])) missing.push(key);
  }

  // also detect if serviceNumber is string but numeric
  let snFix = null;
  if (!isEmpty(b.serviceNumber) && typeof b.serviceNumber === 'string') {
    const maybeNum = Number(b.serviceNumber.trim());
    if (!Number.isNaN(maybeNum)) snFix = { wasString: b.serviceNumber, asNumber: maybeNum };
  }

  if (missing.length || snFix) {
    problems.push({ index: i, missing, snFix, sample: b });
  }
});

console.log('Total entries:', buses.length);
console.log('Problem entries:', problems.length);
if (problems.length) {
  console.log('\nFirst 50 problem rows (index, missing fields, serviceNumber fix suggestion):\n');
  problems.slice(0, 50).forEach(p => {
    console.log('index:', p.index);
    if (p.missing.length) console.log('  missing:', p.missing.join(', '));
    if (p.snFix) console.log('  serviceNumber can be converted:', p.snFix);
    console.log('  item snapshot:', JSON.stringify(p.sample, Object.keys(p.sample).sort(), 2));
    console.log('---');
  });
} else {
  console.log('No problems found — every entry has required fields and serviceNumber is present.');
}
