.PHONY: dev install

dev:
	denon run --allow-net server.tsx

install:
	deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts;\
	deno install --allow-read https://dev.jspm.io/react@16.13.1;\
	deno install --allow-read https://dev.jspm.io/react-dom@16.13.1/server;\
	deno install --allow-read https://deno.land/x/opine@0.4.0/mod.ts;\
	deno install --allow-read https://deno.land/x/opine@0.4.0/src/types.ts;\
	deno install --allow-read https://deno.land/x/opine@0.4.0/mod.ts;\