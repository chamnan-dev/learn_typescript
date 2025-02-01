let names: string[] = ['Proloueng', 'Chamnan', 'Bunthai', 'roth', 'thida'];

let ids: Array<number> =  [101, 1023, 9393, 9737, 332];

for(let id in ids) {
    console.log(ids[id]);
}

for(let key in names) {
    console.log(names[key]);
}