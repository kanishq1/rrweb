
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_exports___node_polyfills_types: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const TERM_PROGRAM: string;
	export const npm_package_exports___vite_import: string;
	export const npm_package_exports___hooks_import: string;
	export const NODE: string;
	export const GITHUB_ACCESS_TOKEN: string;
	export const npm_package_dependencies_sade: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_homepage: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_dependencies_devalue: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const CONDA_SHLVL: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const NODE_OPTIONS: string;
	export const npm_package_dependencies_cookie: string;
	export const CURSOR_TRACE_ID: string;
	export const FIG_NEW_SESSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const DD_API_KEY: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_config_registry: string;
	export const GOPRIVATE: string;
	export const ZSH: string;
	export const npm_package_dependencies_import_meta_resolve: string;
	export const npm_package_repository_url: string;
	export const npm_package_readmeFilename: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_exports___node_import: string;
	export const npm_package_description: string;
	export const LS_COLORS: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_dependencies_esm_env: string;
	export const npm_package_license: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const CONDA_EXE: string;
	export const npm_package_exports___import: string;
	export const npm_package_repository_directory: string;
	export const Q_SET_PARENT_CHECK: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_package_bin_svelte_kit: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__types_sade: string;
	export const PAGER: string;
	export const npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const LSCOLORS: string;
	export const _CE_CONDA: string;
	export const YARN_IGNORE_PATH: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const npm_package_scripts_postinstall: string;
	export const npm_package_devDependencies_rollup: string;
	export const npm_package_dependencies_magic_string: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const CONDA_PREFIX: string;
	export const DD_APP_KEY: string;
	export const SHELL_PID: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const TTY: string;
	export const VSCODE_NONCE: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_types: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_repository_type: string;
	export const npm_package_name: string;
	export const npm_package_scripts_generate_types: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const npm_package_exports___types: string;
	export const npm_config_version_commit_hooks: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const npm_config_bin_links: string;
	export const npm_package_engines_node: string;
	export const npm_package_dependencies_sirv: string;
	export const XPC_SERVICE_NAME: string;
	export const _CE_M: string;
	export const npm_package_version: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_scripts_generate_version: string;
	export const npm_package_scripts_test: string;
	export const npm_package_scripts_check_all: string;
	export const npm_package_exports___vite_types: string;
	export const npm_package_exports___hooks_types: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_version_git_message: string;
	export const CONDA_PYTHON_EXE: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_package_peerDependencies_vite: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_config_ignore_path: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const CONDA_DEFAULT_ENV: string;
	export const NVM_BIN: string;
	export const npm_package_files_3: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const GIT_ASKPASS: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_files_2: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const QTERM_SESSION_ID: string;
	export const Q_TERM: string;
	export const npm_package_files_1: string;
	export const npm_package_devDependencies_dts_buddy: string;
	export const NPM_PACKAGE_READ_TOKEN: string;
	export const npm_package_files_0: string;
	export const npm_package_dependencies_mrmime: string;
	export const npm_package_dependencies_kleur: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const USE_BAZEL_VERSION: string;
	export const npm_package_exports___node_types: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_check: string;
	export const npm_package_files_5: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_package_scripts_test_unit: string;
	export const npm_package_files_4: string;
	export const npm_config_version_tag_prefix: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_exports___node_polyfills_types: string;
		npm_package_scripts_test_cross_platform_build: string;
		TERM_PROGRAM: string;
		npm_package_exports___vite_import: string;
		npm_package_exports___hooks_import: string;
		NODE: string;
		GITHUB_ACCESS_TOKEN: string;
		npm_package_dependencies_sade: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		npm_package_homepage: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		npm_package_dependencies_devalue: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		CONDA_SHLVL: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		CONDA_PROMPT_MODIFIER: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_dependencies_set_cookie_parser: string;
		NODE_OPTIONS: string;
		npm_package_dependencies_cookie: string;
		CURSOR_TRACE_ID: string;
		FIG_NEW_SESSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		DD_API_KEY: string;
		TERM_SESSION_ID: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_config_registry: string;
		GOPRIVATE: string;
		ZSH: string;
		npm_package_dependencies_import_meta_resolve: string;
		npm_package_repository_url: string;
		npm_package_readmeFilename: string;
		NVM_DIR: string;
		USER: string;
		npm_package_exports___node_import: string;
		npm_package_description: string;
		LS_COLORS: string;
		npm_package_exports___package_json: string;
		npm_package_dependencies_esm_env: string;
		npm_package_license: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		CONDA_EXE: string;
		npm_package_exports___import: string;
		npm_package_repository_directory: string;
		Q_SET_PARENT_CHECK: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_package_bin_svelte_kit: string;
		npm_execpath: string;
		npm_package_devDependencies__types_sade: string;
		PAGER: string;
		npm_package_peerDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		LSCOLORS: string;
		_CE_CONDA: string;
		YARN_IGNORE_PATH: string;
		PATH: string;
		npm_config_argv: string;
		npm_package_scripts_postinstall: string;
		npm_package_devDependencies_rollup: string;
		npm_package_dependencies_magic_string: string;
		LaunchInstanceID: string;
		_: string;
		CONDA_PREFIX: string;
		DD_APP_KEY: string;
		SHELL_PID: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		PWD: string;
		TTY: string;
		VSCODE_NONCE: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_types: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_repository_type: string;
		npm_package_name: string;
		npm_package_scripts_generate_types: string;
		npm_package_scripts_test_integration: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_exports___node_polyfills_import: string;
		npm_package_exports___types: string;
		npm_config_version_commit_hooks: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		npm_package_scripts_test_cross_platform_dev: string;
		npm_package_devDependencies_vitest: string;
		npm_package_dependencies_tiny_glob: string;
		npm_config_bin_links: string;
		npm_package_engines_node: string;
		npm_package_dependencies_sirv: string;
		XPC_SERVICE_NAME: string;
		_CE_M: string;
		npm_package_version: string;
		VSCODE_INJECTION: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_scripts_generate_version: string;
		npm_package_scripts_test: string;
		npm_package_scripts_check_all: string;
		npm_package_exports___vite_types: string;
		npm_package_exports___hooks_types: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		npm_config_version_git_message: string;
		CONDA_PYTHON_EXE: string;
		LESS: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_package_peerDependencies_vite: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_config_ignore_path: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		CONDA_DEFAULT_ENV: string;
		NVM_BIN: string;
		npm_package_files_3: string;
		npm_package_dependencies__types_cookie: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		GIT_ASKPASS: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_files_2: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__playwright_test: string;
		QTERM_SESSION_ID: string;
		Q_TERM: string;
		npm_package_files_1: string;
		npm_package_devDependencies_dts_buddy: string;
		NPM_PACKAGE_READ_TOKEN: string;
		npm_package_files_0: string;
		npm_package_dependencies_mrmime: string;
		npm_package_dependencies_kleur: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		USE_BAZEL_VERSION: string;
		npm_package_exports___node_types: string;
		npm_package_files_6: string;
		npm_package_scripts_check: string;
		npm_package_files_5: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_package_scripts_test_unit: string;
		npm_package_files_4: string;
		npm_config_version_tag_prefix: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
