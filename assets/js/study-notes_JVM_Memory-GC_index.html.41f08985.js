"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[9555],{66262:(e,t)=>{t.A=(e,t)=>{const o=e.__vccOpts||e;for(const[e,a]of t)o[e]=a;return o}},43376:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>l,data:()=>i});var a=o(20641);const r=(0,a.Fv)('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><blockquote><p>来源Bilibili尚硅谷宋红康老师JVM教程：<a href="https://www.bilibili.com/video/BV1PJ411n7xZ" target="_blank" rel="noopener noreferrer">硅谷2020最新版宋红康JVM教程</a> 笔记补充：https://gitee.com/vectorx/NOTE_JVM/tree/main</p></blockquote><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><h3 id="内存与垃圾回收篇" tabindex="-1"><a class="header-anchor" href="#内存与垃圾回收篇"><span>内存与垃圾回收篇</span></a></h3>',4),n={},l=(0,o(66262).A)(n,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[r,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Java-Architecture/"},{default:(0,a.k6)((()=>[(0,a.eW)("JVM与Java体系结构")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Clas-Loading-Subsystem/"},{default:(0,a.k6)((()=>[(0,a.eW)("类加载子系统")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/JVM-RuntimeDataAreas/"},{default:(0,a.k6)((()=>[(0,a.eW)("运行时数据区概述及线程")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/PCounter-Register/"},{default:(0,a.k6)((()=>[(0,a.eW)("程序计数器")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/JVM-Stack/"},{default:(0,a.k6)((()=>[(0,a.eW)("虚拟机栈")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Native-Stack/"},{default:(0,a.k6)((()=>[(0,a.eW)("本地方法接口")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Heap/"},{default:(0,a.k6)((()=>[(0,a.eW)("堆")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Method-Area/"},{default:(0,a.k6)((()=>[(0,a.eW)("方法区")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Object-Instantiation/"},{default:(0,a.k6)((()=>[(0,a.eW)("对象实例化内存布局与访问定位")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Direct-Memory/"},{default:(0,a.k6)((()=>[(0,a.eW)("直接内存")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/Execution-Engine/"},{default:(0,a.k6)((()=>[(0,a.eW)("执行引擎")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/StringTable/"},{default:(0,a.k6)((()=>[(0,a.eW)("StringTable")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/GC-Overview/"},{default:(0,a.k6)((()=>[(0,a.eW)("垃圾回收概述")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/GC-Relevant-Algorithms/"},{default:(0,a.k6)((()=>[(0,a.eW)("垃圾回收相关算法")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/GC-Relevant-Overview/"},{default:(0,a.k6)((()=>[(0,a.eW)("垃圾回收相关概念")])),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(o,{to:"/study-notes/JVM/Memory-GC/GC-Period/"},{default:(0,a.k6)((()=>[(0,a.eW)("垃圾回收器")])),_:1})])])])}]]),i=JSON.parse('{"path":"/study-notes/JVM/Memory-GC/","title":"内存与垃圾回收篇","lang":"zh-CN","frontmatter":{"title":"内存与垃圾回收篇","date":"2023-03-18T00:00:00.000Z","tags":["JVM"],"description":"介绍 来源Bilibili尚硅谷宋红康老师JVM教程：硅谷2020最新版宋红康JVM教程 笔记补充：https://gitee.com/vectorx/NOTE_JVM/tree/main 目录 内存与垃圾回收篇","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-theme-home/study-notes/JVM/Memory-GC/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"内存与垃圾回收篇"}],["meta",{"property":"og:description","content":"介绍 来源Bilibili尚硅谷宋红康老师JVM教程：硅谷2020最新版宋红康JVM教程 笔记补充：https://gitee.com/vectorx/NOTE_JVM/tree/main 目录 内存与垃圾回收篇"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-14T03:39:57.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T03:39:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内存与垃圾回收篇\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T03:39:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[{"level":3,"title":"内存与垃圾回收篇","slug":"内存与垃圾回收篇","link":"#内存与垃圾回收篇","children":[]}]}],"git":{"createdTime":1723385410000,"updatedTime":1723606797000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":2},{"name":"jiangyunfei","email":"jiangyunfei@thunisoft.com","commits":1}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"study-notes/JVM/Memory-GC/README.md","localizedDate":"2023年3月18日","excerpt":"<h2>介绍</h2>\\n<blockquote>\\n<p>来源Bilibili尚硅谷宋红康老师JVM教程：<a href=\\"https://www.bilibili.com/video/BV1PJ411n7xZ\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">硅谷2020最新版宋红康JVM教程</a>\\n笔记补充：https://gitee.com/vectorx/NOTE_JVM/tree/main</p>\\n</blockquote>\\n<h2>目录</h2>\\n<h3>内存与垃圾回收篇</h3>\\n<ul>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Java-Architecture/\\" target=\\"_blank\\">JVM与Java体系结构</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Clas-Loading-Subsystem/\\" target=\\"_blank\\">类加载子系统</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/JVM-RuntimeDataAreas/\\" target=\\"_blank\\">运行时数据区概述及线程</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/PCounter-Register/\\" target=\\"_blank\\">程序计数器</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/JVM-Stack/\\" target=\\"_blank\\">虚拟机栈</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Native-Stack/\\" target=\\"_blank\\">本地方法接口</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Heap/\\" target=\\"_blank\\">堆</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Method-Area/\\" target=\\"_blank\\">方法区</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Object-Instantiation/\\" target=\\"_blank\\">对象实例化内存布局与访问定位</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Direct-Memory/\\" target=\\"_blank\\">直接内存</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/Execution-Engine/\\" target=\\"_blank\\">执行引擎</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/StringTable/\\" target=\\"_blank\\">StringTable</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/GC-Overview/\\" target=\\"_blank\\">垃圾回收概述</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/GC-Relevant-Algorithms/\\" target=\\"_blank\\">垃圾回收相关算法</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/GC-Relevant-Overview/\\" target=\\"_blank\\">垃圾回收相关概念</a></li>\\n<li><a href=\\"/vuepress-theme-home/study-notes/JVM/Memory-GC/GC-Period/\\" target=\\"_blank\\">垃圾回收器</a></li>\\n</ul>","autoDesc":true}')}}]);