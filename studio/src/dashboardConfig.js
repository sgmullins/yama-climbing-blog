export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e460fcc966dbbdf1626a419',
                  title: 'Sanity Studio',
                  name: 'yama-climbing-blog-studio',
                  apiId: '3c7a9bca-6c58-4a69-a524-ee8a56aa5da5'
                },
                {
                  buildHookId: '5e460fcc71b65b0716e068c0',
                  title: 'Blog Website',
                  name: 'yama-climbing-blog',
                  apiId: '7be6cf8d-850b-42af-89e0-7be3fcc07dc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sgmullins/yama-climbing-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://yama-climbing-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
