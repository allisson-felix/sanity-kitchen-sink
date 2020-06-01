export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed53b701c84483f33327a7f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r1phpcwn',
                  apiId: '8b7c7f16-f965-4cb8-a91b-8fea4960066a'
                },
                {
                  buildHookId: '5ed53b71987c7a458c356821',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hn8c19vg',
                  apiId: '1c4551e8-ba74-4f2a-a306-9cd3045542ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allisson-felix/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hn8c19vg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
