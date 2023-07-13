module.exports={
    title:'兰为鹏的博客',
    description:'hh',
    base:'/blog/',
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
                {title:'前端基础',sidebarDepth:2,children:[
                    {title:'html',path:'/interview/html'},
                    {title:'js',path:'/interview/js'},
                ]}
            ],
            '/note/': [
                {title:'收藏',path:'/note/setup',sidebarDepth:2,children:[{title:'从0搭建类',path:'/note/setup'}]}
            ],
            // '/note/':[
            //     // {title:'前端',},
            //     {title:'收藏',sidebarDepth:2,children:[{title:'从0搭建类',path:'/note/setup'}]}
            // ]
        }
      }
}