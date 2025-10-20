import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => { fetch('/api/tickets').then((r) => r.json()).then(setItems); }, []);
  return (<main><h1>Tickets</h1><ul>{items.map((i) => <li key={i.id}>{i.name}</li>)}</ul></main>);
}
