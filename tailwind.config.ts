import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)", ...fontFamily.sans]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: "none",
  					color: "hsl(var(--foreground))",
  					hr: {
  						borderColor: "hsl(var(--border))",
  					},
  					"h1, h2, h3, h4, h5, h6": {
  						color: "hsl(var(--foreground))",
  						fontWeight: "600",
  					},
  					a: {
  						color: "hsl(var(--primary))",
  						textDecoration: "none",
  						fontWeight: "500",
  						"&:hover": {
  							textDecoration: "underline",
  						},
  					},
  					strong: {
  						color: "hsl(var(--foreground))",
  					},
  					code: {
  						color: "hsl(var(--foreground))",
  						backgroundColor: "hsl(var(--muted))",
  						padding: "0.25rem",
  						borderRadius: "0.25rem",
  						fontWeight: "400",
  					},
  					"code::before": {
  						content: '""',
  					},
  					"code::after": {
  						content: '""',
  					},
  					pre: {
  						backgroundColor: "hsl(var(--muted))",
  						padding: "1rem",
  						borderRadius: "0.5rem",
  						overflowX: "auto",
  					},
  					table: {
  						width: "100%",
  						borderCollapse: "collapse",
  						borderColor: "hsl(var(--border))",
  					},
  					"thead, tbody": {
  						borderColor: "inherit",
  					},
  					"th, td": {
  						padding: "0.75rem",
  						borderWidth: "1px",
  						borderColor: "inherit",
  					},
  					th: {
  						backgroundColor: "hsl(var(--muted))",
  						fontWeight: "600",
  						textAlign: "left",
  					},
  					blockquote: {
  						borderLeftColor: "hsl(var(--border))",
  					},
  				},
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
