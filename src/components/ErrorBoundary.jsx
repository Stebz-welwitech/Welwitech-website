import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#09090b', color: '#fafafa', fontFamily: 'Sora, sans-serif',
          padding: '20px', textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>
            Une erreur est survenue
          </h1>
          <p style={{ color: '#71717a', fontSize: '15px', maxWidth: '400px', marginBottom: '24px' }}>
            Nous sommes désolés. Veuillez rafraîchir la page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 32px', background: '#3b82f6', color: '#fff',
              border: 'none', borderRadius: '100px', fontSize: '14px',
              fontWeight: 600, cursor: 'pointer',
            }}
          >
            Rafraîchir la page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
