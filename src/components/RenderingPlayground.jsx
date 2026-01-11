import React from 'react';

function RenderingPlayground() {
    const name = "Anjali Desai";
    const age = 24;

    const user = {
        name: "Vikram Malhotra",
        city: "Mumbai"
    };

    const skills = ["HTML", "CSS", "JS", "React"];

    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Smartphone", price: 699 },
        { id: 3, name: "Headphones", price: 199 },
        { id: 4, name: "Monitor", price: 299 }
    ];

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginTop: '20px' }}>
            <h2>Rendering Playground</h2>

            {/* 1. Primitive Rendering */}
            <section style={{ marginBottom: '20px' }}>
                <h3>Primitives</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
            </section>

            {/* 2. Object Rendering */}
            <section style={{ marginBottom: '20px' }}>
                <h3>User Object</h3>
                <p>Name: {user.name}</p>
                <p>City: {user.city}</p>
            </section>

            {/* 3. Array of Strings */}
            <section style={{ marginBottom: '20px' }}>
                <h3>Skills List</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>

            {/* 4. Array of Objects (Table) */}
            <section>
                <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>Products Table</h3>
                <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                                <th style={{ padding: '16px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem' }}>ID</th>
                                <th style={{ padding: '16px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem' }}>Name</th>
                                <th style={{ padding: '16px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.85rem' }}>Price ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product.id} style={{ borderBottom: index !== products.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                                    <td style={{ padding: '16px', color: '#334155' }}>{product.id}</td>
                                    <td style={{ padding: '16px', fontWeight: '500', color: '#0f172a' }}>{product.name}</td>
                                    <td style={{ padding: '16px', color: '#059669', fontFamily: 'monospace', fontWeight: 'bold' }}>{product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default RenderingPlayground;
