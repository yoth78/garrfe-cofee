import React, { useState } from 'react';

const CartPage = () => {
  // --- Mock cart data (replace with real cart state/context) ---
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Yirgacheffe Select',
      price: 850,
      quantity: 1,
      image: '/images/product-yirgacheffe.jpg',
      roast: 'Light Roast',
      origin: 'Yirgacheffe',
    },
    {
      id: 2,
      name: 'Gera Highland',
      price: 780,
      quantity: 2,
      image: '/images/product-gera.jpg',
      roast: 'Medium Roast',
      origin: 'Gera',
    },
    {
      id: 3,
      name: 'Heritage Blend',
      price: 720,
      quantity: 1,
      image: '/images/product-blend.jpg',
      roast: 'Medium Roast',
      origin: 'Blend',
    },
  ]);

  // --- Calculate totals ---
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 2000 ? 0 : 120; // free shipping over 2000 ETB
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + shipping + tax;

  // --- Handlers ---
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout (demo)');
  };

  // --- Empty cart ---
  if (cartItems.length === 0) {
    return (
      <main>
        <div className="shop-hero">
          <h1 className="shop-hero__title">Your Cart</h1>
          <p className="shop-hero__desc">Your cart is currently empty.</p>
        </div>
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: 'var(--muted-fg)', marginBottom: '24px' }}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--fg)',
                marginBottom: '16px',
              }}
            >
              Your cart is empty
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--muted-fg)',
                maxWidth: '400px',
                margin: '0 auto 32px',
              }}
            >
              Looks like you haven’t added any coffee to your cart yet.
            </p>
            <a
              href="#"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                window.showPage && window.showPage('shop');
              }}
            >
              Continue Shopping &rarr;
            </a>
          </div>
        </section>
      </main>
    );
  }

  // --- Cart with items ---
  return (
    <main>
      <div className="shop-hero">
        <h1 className="shop-hero__title">Your Cart</h1>
        <p className="shop-hero__desc">Review and adjust your order</p>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px' }}>
            {/* ---------- Cart Items List ---------- */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border)',
                  marginBottom: '24px',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted-fg)' }}>
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted-fg)' }}>
                  Price
                </span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    padding: '24px 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '100px',
                      height: '125px',
                      flexShrink: 0,
                      backgroundColor: 'var(--secondary)',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Details */}
                  <div style={{ flexGrow: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: 'var(--fg)',
                            marginBottom: '4px',
                          }}
                        >
                          {item.name}
                        </h3>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                          {item.roast && (
                            <span
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--secondary-fg)',
                                padding: '4px 8px',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                              }}
                            >
                              {item.roast}
                            </span>
                          )}
                          {item.origin && (
                            <span
                              style={{
                                background: 'var(--secondary)',
                                color: 'var(--secondary-fg)',
                                padding: '4px 8px',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                              }}
                            >
                              {item.origin}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--accent)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.price * item.quantity} ETB
                      </span>
                    </div>

                    {/* Quantity & Remove */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <label
                          htmlFor={`qty-${item.id}`}
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--muted-fg)',
                          }}
                        >
                          Qty
                        </label>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg)',
                            color: 'var(--fg)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                          }}
                        >
                          −
                        </button>
                        <span
                          style={{
                            width: '32px',
                            textAlign: 'center',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            border: '1px solid var(--border)',
                            background: 'var(--bg)',
                            color: 'var(--fg)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--muted-fg)',
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------- Order Summary ---------- */}
            <div>
              <div
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '32px',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--card-fg)',
                    marginBottom: '24px',
                  }}
                >
                  Order Summary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted-fg)' }}>Subtotal</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)' }}>
                      {subtotal} ETB
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted-fg)' }}>Shipping</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)' }}>
                      {shipping === 0 ? 'Free' : `${shipping} ETB`}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--muted-fg)' }}>Tax (15%)</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--fg)' }}>
                      {tax} ETB
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: '8px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border)',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>
                      Total
                    </span>
                    <span
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                      }}
                    >
                      {total} ETB
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn btn--primary"
                  style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}
                >
                  Proceed to Checkout
                </button>

                <p
                  style={{
                    marginTop: '24px',
                    fontSize: '0.7rem',
                    textAlign: 'center',
                    color: 'var(--muted-fg)',
                  }}
                >
                  Free shipping on orders over 2,000 ETB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;