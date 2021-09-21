const requireField = fieldName => {
    return value => {
        if (String(value).length === 0 ) {
            return fieldName + ' is required'
        }
        return true
    }
}

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                // Raw text input
                type: 'input',
                // Variable name for this input
                name: 'name',
                // Prompt to display on command line
                message: 'What is your component name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                // Add a new file
                type: 'add',
                // Path for the new file
                path: 'src/components/{{kebabCase name}}/{{pascalCase name}}.jsx',
                // Handlebars template used to generate content of new file
                templateFile: 'plop-templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{pascalCase name}}.test.jsx',
                templateFile:
                    'plop-templates/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/components/{{kebabCase name}}/{{pascalCase name}}.module.scss',
                templateFile:
                    'plop-templates/Component.module.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/index.jsx',
                templateFile: 'plop-templates/Component.index.tsx.hbs',
            },
            {
                // Adds an index.tsx file if it does not already exist
                type: 'add',
                path: 'src/components/index.jsx',
                templateFile: 'plop-templates/injectable-index.tsx.hbs',
                // If index.tsx already exists in this location, skip this action
                skipIfExists: true,
            },
            {
                // Action type 'append' injects a template into an existing file
                type: 'append',
                path: 'src/components/index.jsx',
                // Pattern tells plop where in the file to inject the template
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{kebabCase name}}/{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/components/index.jsx',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    });

    plop.setGenerator('page', {
        description: 'Create a page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
                validate: requireField('name')
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{kebabCase name}}/{{pascalCase name}}.jsx',
                templateFile:
                    'plop-templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{kebabCase name}}/{{pascalCase name}}.test.jsx',
                templateFile:
                    'plop-templates/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'src/pages/{{kebabCase name}}/{{pascalCase name}}.module.scss',
                templateFile:
                    'plop-templates/Component.module.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/{{kebabCase name}}/index.jsx',
                templateFile: 'plop-templates/Component.index.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/pages/index.jsx',
                templateFile: 'plop-templates/injectable-index.tsx.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'src/pages/index.jsx',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import {{pascalCase name}} from './{{kebabCase name}}/{{pascalCase name}}';`,
            },
            {
                type: 'append',
                path: 'src/pages/index.jsx',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `\t{{pascalCase name}},`,
            },
        ],
    })

    // plop.setGenerator('service', {
    //     description: 'Create service',
    //     prompts: [
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: 'What is your service name?',
    //             validate: requireField('name')
    //         },
    //     ],
    //     actions: [
    //         {
    //             type: 'add',
    //             path: 'src/services/{{camelCase name}}.tsx',
    //             templateFile: 'plop-templates/Service.tsx.hbs',
    //         },
    //         {
    //             type: 'add',
    //             path: 'src/services/index.tsx',
    //             templateFile: 'plop-templates/injectable-index.tsx.hbs',
    //             skipIfExists: true,
    //         },
    //         {
    //             type: 'append',
    //             path: 'src/services/index.tsx',
    //             pattern: `/* PLOP_INJECT_IMPORT */`,
    //             template: `import {{camelCase name}} from './{{camelCase name}}';`,
    //         },
    //         {
    //             type: 'append',
    //             path: 'src/services/index.tsx',
    //             pattern: `/* PLOP_INJECT_EXPORT */`,
    //             template: `\t{{camelCase name}},`,
    //         }
    //     ],
    // })
    //
    // plop.setGenerator('hook', {
    //     description: 'Create a custom react hook',
    //     prompts: [
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: 'What is your hook name?',
    //             validate: requireField('name')
    //         },
    //     ],
    //     actions: [
    //         {
    //             type: 'add',
    //             path: 'src/hooks/{{camelCase name}}.tsx',
    //             templateFile: 'plop-templates/Hook.tsx.hbs',
    //         },
    //         {
    //             type: 'add',
    //             path: 'src/hooks/index.tsx',
    //             templateFile: 'plop-templates/injectable-index.tsx.hbs',
    //             skipIfExists: true,
    //         },
    //         {
    //             type: 'append',
    //             path: 'src/hooks/index.tsx',
    //             pattern: `/* PLOP_INJECT_IMPORT */`,
    //             template: `import {{camelCase name}} from './{{camelCase name}}';`,
    //         },
    //         {
    //             type: 'append',
    //             path: 'src/hooks/index.tsx',
    //             pattern: `/* PLOP_INJECT_EXPORT */`,
    //             template: `\t{{camelCase name}},`,
    //         }
    //     ],
    // })
};