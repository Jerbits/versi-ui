---
to: packages/<%= h.capitalize(name) %>/tsconfig.json
---
{
	"extends": "../../tsconfig.json",
	"compilerOptions": {
		"paths": {
			"@<%= h.capitalize(name) %>/components/*": ["./src/components/*"],
			"@<%= h.capitalize(name) %>/hooks/*": ["./src/hooks/*"],
			"@<%= h.capitalize(name) %>/mocks/*": ["./src/mocks/*"],
			"@<%= h.capitalize(name) %>/helpers/*": ["./src/helpers/*"],
			"@<%= h.capitalize(name) %>/types/*": ["./src/types/*"],
			"@<%= h.capitalize(name) %>/icons/*": ["./src/assets/icons/*"],
			"@<%= h.capitalize(name) %>/constants/*": ["./src/constants/*"]
		}
	}
}
