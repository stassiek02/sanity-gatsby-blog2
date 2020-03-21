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
                  buildHookId: '5e762ead4fee5dd3b956164c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-ky8ic3a7',
                  apiId: '53032496-8fc9-4b2d-a00c-e38bec440e45'
                },
                {
                  buildHookId: '5e762eadab731bbeb380b25e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-sdgxrhx5',
                  apiId: 'efb0818a-e3a8-41de-9b66-852bcb36d597'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stassiek02/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-sdgxrhx5.netlify.com', category: 'apps' }
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
