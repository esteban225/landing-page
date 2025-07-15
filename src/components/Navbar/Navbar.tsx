import React from "react";

const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/service" },
    { label: "Acerca de", href: "/about" },
    { label: "Contacto", href: "/contact" },
];
const Navbar: React.FC = () => (
    <nav
        style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(6px)",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
            boxShadow: "2px 4px 16px rgba(0,0,0,0.3)",
        }}
    >
        <div
            style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 2rem",
            }}
        >
            <div style={{ fontWeight: "bold", fontSize: "2rem" }}>Enseña por gusto 🧠👩‍🏫</div>
            <ul style={{ display: "flex", gap: "3rem", listStyle: "none", margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            style={{
                                textDecoration: "none",
                                color: "#222",
                                fontWeight: 500,
                                transition: "color 0.2s",
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Navbar;