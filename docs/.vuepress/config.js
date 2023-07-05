module.exports={
    title:'兰为鹏的博客',
    description:'hh',
    base:'/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
      ],
      themeConfig:{
        nav:[
            { text:'文章', link:'/article/'},
            { text:'面试', link:'/interview/' },
            { text:'笔记', link:'/note/' }
        ],
        sidebar:{
            '/interview/': [
                {title:'前端基础',sidebarDepth:2,children:[{title:'html',path:'/interview/html'}]}
            ],
        }
      }
}