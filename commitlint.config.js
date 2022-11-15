module.exports = {
    plugins: ['commitlint-plugin-conventional-jira'],
    extends: ['@commitlint/config-conventional', 'yarn-scopes'],
    rules: {
        'jira-issue': [2, 'always', {jiraPrefixes: ['TP']}]
    }
}