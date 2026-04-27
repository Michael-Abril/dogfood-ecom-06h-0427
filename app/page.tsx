const PRODUCTS = [
  { id: 1, name: 'Widget Pro', price: 29.99, description: 'A professional-grade widget.' },
  { id: 2, name: 'Gadget Plus', price: 49.99, description: 'The next-gen gadget.' },
  { id: 3, name: 'Doohickey X', price: 19.99, description: 'Simple and effective.' },
]

export default function StorePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 900, margin: '40px auto', padding: '0 20px' }}>
      <h1>Dogfood Shop</h1>
      <p>Quality products at great prices.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 24 }}>
        {PRODUCTS.map(p => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
            <h3>{p.name}</h3>
            <p style={{ color: '#666' }}>{p.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: 18 }}>${p.price}</p>
            <button style={{ width: '100%', padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer', marginTop: 8 }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, padding: 16, background: '#f0f0f0', borderRadius: 8 }}>
        <p style={{ color: '#888', fontSize: 14 }}>Payments placeholder — Stripe integration coming soon.</p>
      </div>
    </main>
  )
}
