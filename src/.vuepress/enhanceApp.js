import pageComponents from '@internal/page-components'

export default ({ Vue, router }) => {
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
  router.addRoutes([
    { path: '/blog/2021_New_Year\'s_Resolution.md', redirect: '/blog/2021/1/1/2021_New_Year\'s_Resolution.html' },
    { path: '/blog/A_Remarkable_Coincidence_of_Inspiration.md', redirect: '/blog/2020/12/29/A_Remarkable_Coincidence_of_Inspiration.html' },
    { path: '/blog/Chronicle (2012).md', redirect: '/blog/2021/1/12/Chronicle (2012).html' },
    { path: '/blog/How_To_Create_Your_Own_Blog.md', redirect: '/blog/2020/12/31/How_To_Create_Your_Own_Blog.html' },
    { path: '/blog/My_Love_of_comics.md', redirect: '/blog/2020/12/31/My_Love_of_comics.html' },
    { path: '/blog/Queries_into_the_4th_state_of_matter.md', redirect: '/blog/2021/1/1/Queries_into_the_4th_state_of_matter.html' },
    { path: '/blog/Reflections_at_interfaces.md', redirect: '/blog/2020/12/30/Reflections_at_interfaces.html' },
    { path: '/blog/TESSELATE - BAYNK, Tei Shi.md', redirect: '/blog/2021/1/9/TESSELATE - BAYNK, Tei Shi.html' },
    { path: '/blog/The_Eternal_War_Machine.md', redirect: '/blog/2021/1/8/The_Eternal_War_Machine.html' },
    { path: '/blog/The_King.md', redirect: '/blog/2021/1/16/The_King.html' },
    { path: '/blog/The_Origins_of_Space_Pirates.md', redirect: '/blog/2021/1/3/The_Origins_of_Space_Pirates.html' },
    { path: '/blog/The_Source.md', redirect: '/blog/2021/1/2/The_Source.html' },
    { path: '/blog/TubeTV.md', redirect: '/blog/2021/1/9/TubeTV.html' },
    { path: '/blog/Vietnamese_Spring_Rolls.md', redirect: '/blog/2021/1/19/Vietnamese_Spring_Rolls.html' },
    { path: '/blog/slow_down_my_thoughts.md', redirect: '/blog/2021/1/1/slow_down_my_thoughts.html' },

    { path: '/blog/2021_New_Year\'s_Resolution.html', redirect: '/blog/2021/1/1/2021_New_Year\'s_Resolution.html' },
    { path: '/blog/A_Remarkable_Coincidence_of_Inspiration.html', redirect: '/blog/2020/12/29/A_Remarkable_Coincidence_of_Inspiration.html' },
    { path: '/blog/Chronicle (2012).html', redirect: '/blog/2021/1/12/Chronicle (2012).html' },
    { path: '/blog/How_To_Create_Your_Own_Blog.html', redirect: '/blog/2020/12/31/How_To_Create_Your_Own_Blog.html' },
    { path: '/blog/My_Love_of_comics.html', redirect: '/blog/2020/12/31/My_Love_of_comics.html' },
    { path: '/blog/Queries_into_the_4th_state_of_matter.html', redirect: '/blog/2021/1/1/Queries_into_the_4th_state_of_matter.html' },
    { path: '/blog/Reflections_at_interfaces.html', redirect: '/blog/2020/12/30/Reflections_at_interfaces.html' },
    { path: '/blog/TESSELATE - BAYNK, Tei Shi.html', redirect: '/blog/2021/1/9/TESSELATE - BAYNK, Tei Shi.html' },
    { path: '/blog/The_Eternal_War_Machine.html', redirect: '/blog/2021/1/8/The_Eternal_War_Machine.html' },
    { path: '/blog/The_King.html', redirect: '/blog/2021/1/16/The_King.html' },
    { path: '/blog/The_Origins_of_Space_Pirates.html', redirect: '/blog/2021/1/3/The_Origins_of_Space_Pirates.html' },
    { path: '/blog/The_Source.html', redirect: '/blog/2021/1/2/The_Source.html' },
    { path: '/blog/TubeTV.html', redirect: '/blog/2021/1/9/TubeTV.html' },
    { path: '/blog/Vietnamese_Spring_Rolls.html', redirect: '/blog/2021/1/19/Vietnamese_Spring_Rolls.html' },
    { path: '/blog/slow_down_my_thoughts.html', redirect: '/blog/2021/1/1/slow_down_my_thoughts.html' },
  ])
}
