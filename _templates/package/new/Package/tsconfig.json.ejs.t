---
to: packages/<%= h.capitalize(name) %>/tsconfig.json
---
{
	"extends": "../../tsconfig.json",
	"compilerOptions": {
		"paths": {
			"@/*": ["./src"],
			"@Components/*": ["./src/components/*"],
			"@Hooks/*": ["./src/hooks/*"],
			"@Mocks/*": ["./src/mocks/*"],
			"@Helpers/*": ["./src/helpers/*"],
			"@Types/*": ["./src/types/*"],
			"@Icons/*": ["./src/assets/icons/*"],
			"@Constants/*": ["./src/constants/*"]
		}
	}
}
