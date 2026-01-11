import React from 'react';

function UserStatus({ user }) {
    if (!user) {
        return <div style={{ padding: '10px', color: 'gray' }}>Loading user...</div>;
    }

    return (
        <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px 0' }}>
            <h3>User Status</h3>
            <p><strong>Name:</strong> {user?.name ?? "Guest User"}</p>
            <p><strong>Email:</strong> {user?.email ?? "No email provided"}</p>

            {user?.isActive && (
                <span style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    marginTop: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    border: '1px solid #bbf7d0'
                }}>
                    ● Active User
                </span>
            )}
        </div>
    );
}

export default UserStatus;
