import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Chhaswala-inspired Design System
                brand: {
                    blue: {
                        light: '#4facfe',
                        DEFAULT: '#0da7d6', // Chhaswala Primary Blue
                        dark: '#0070f3',
                    },
                    pink: '#f3d6d9',
                    green: '#7cb25d',
                    cream: '#fdfaf6',
                },
                category: {
                    green: {
                        light: '#d4fc79',
                        DEFAULT: '#7cb25d',
                    },
                    purple: {
                        light: '#a18cd1',
                        DEFAULT: '#f3d6d9',
                    },
                    teal: {
                        light: '#84fab0',
                        DEFAULT: '#0da7d6',
                    },
                    mint: '#f0f9ff',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                }
            }
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
            'float': 'float 6s ease-in-out infinite',
            'float-slow': 'float 8s ease-in-out infinite',
            'float-fast': 'float 4s ease-in-out infinite',
            'slide-up': 'slideUp 0.5s ease-out',
            'fade-in': 'fadeIn 0.6s ease-out',
            'scale-in': 'scaleIn 0.4s ease-out',
            'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        },
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
            },
            slideUp: {
                '0%': { transform: 'translateY(30px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            scaleIn: {
                '0%': { transform: 'scale(0.9)', opacity: '0' },
                '100%': { transform: 'scale(1)', opacity: '1' },
            },
            pulseSoft: {
                '0%, 100%': { transform: 'scale(1)', opacity: '1' },
                '50%': { transform: 'scale(1.05)', opacity: '0.9' },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
