"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[7840],{66262:(e,i)=>{i.A=(e,i)=>{const t=e.__vccOpts||e;for(const[e,a]of i)t[e]=a;return t}},77593:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>m,data:()=>f});var a=t(20641);const c=t.p+"assets/img/image-20200318182540332.883a69af.png",o=t.p+"assets/img/image-20200318184401133.25b3cbae.png",l=t.p+"assets/img/image-20200318184508982.7da2d950.png",r=t.p+"assets/img/image-20200318184759295.8c6cf156.png",d=t.p+"assets/img/image-20200318184820787.3b03ee95.png",p=t.p+"assets/img/image-20200318184944878.659fd5d6.png",n=t.p+"assets/img/image-20200318185100936.ea2d8bba.png",s=[(0,a.Fv)('<p>JVM前提学习视频： https://www.bilibili.com/video/BV1TJ411R75F/?spm_id_from=333.337.search-card.all.click&amp;vd_source=7138dfc78c49f602f8d3ed8cfbf0513d（没了）<br> https://www.bilibili.com/video/BV1jJ411t71s/?spm_id_from=333.788.recommend_more_video.4&amp;vd_source=7138dfc78c49f602f8d3ed8cfbf0513d<br> 相应笔记： https://blog.csdn.net/q961250375/article/details/107499173</p><blockquote><p>相关友链（pdai）：https://www.pdai.tech/md/java/jvm/java-jvm-x-overview.html</p></blockquote><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h2><figure><img src="'+c+'" alt="image-20200318182540332" tabindex="0" loading="lazy"><figcaption>image-20200318182540332</figcaption></figure><p>java gc 主要回收的是 方法区 和 堆中的内容</p><figure><img src="'+o+'" alt="image-20200318184401133" tabindex="0" loading="lazy"><figcaption>image-20200318184401133</figcaption></figure><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h2><ul><li>类加载器是什么</li><li>双亲委派机制</li><li>Java类加载的沙箱安全机制</li></ul><h2 id="常见的垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#常见的垃圾回收算法"><span>常见的垃圾回收算法</span></a></h2><ul><li>引用计数</li></ul><figure><img src="'+l+'" alt="image-20200318184508982" tabindex="0" loading="lazy"><figcaption>image-20200318184508982</figcaption></figure><p>在双端循环，互相引用的时候，容易报错，目前很少使用这种方式了</p><ul><li>复制</li></ul><p>复制算法在年轻代的时候，进行使用，复制时候有交换</p><figure><img src="'+r+'" alt="image-20200318184759295" tabindex="0" loading="lazy"><figcaption>image-20200318184759295</figcaption></figure><figure><img src="'+d+'" alt="image-20200318184820787" tabindex="0" loading="lazy"><figcaption>image-20200318184820787</figcaption></figure><p>优点：没有产生内存碎片</p><ul><li>标记清除</li></ul><p>先标记，后清除，缺点是会产生内存碎片，用于老年代多一些</p><figure><img src="'+p+'" alt="image-20200318184944878" tabindex="0" loading="lazy"><figcaption>image-20200318184944878</figcaption></figure><ul><li>标记整理</li></ul><p>标记清除整理</p><figure><img src="'+n+'" alt="image-20200318185100936" tabindex="0" loading="lazy"><figcaption>image-20200318185100936</figcaption></figure><p>但是需要付出代价，因为移动对象需要成本</p>',24)],g={},m=(0,t(66262).A)(g,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,s)}]]),f=JSON.parse('{"path":"/study-notes/shangguigu-second/JVM/one.html","title":"JVM体系结构","lang":"zh-CN","frontmatter":{"title":"JVM体系结构","date":"2023-03-11T00:00:00.000Z","tags":["死锁"],"category":["JUC"],"description":"JVM前提学习视频： https://www.bilibili.com/video/BV1TJ411R75F/?spm_id_from=333.337.search-card.all.click&vd_source=7138dfc78c49f602f8d3ed8cfbf0513d（没了） https://www.bilibili.com/video/B...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/JVM/one.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"JVM体系结构"}],["meta",{"property":"og:description","content":"JVM前提学习视频： https://www.bilibili.com/video/BV1TJ411R75F/?spm_id_from=333.337.search-card.all.click&vd_source=7138dfc78c49f602f8d3ed8cfbf0513d（没了） https://www.bilibili.com/video/B..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"死锁"}],["meta",{"property":"article:published_time","content":"2023-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM体系结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[]},{"level":2,"title":"常见的垃圾回收算法","slug":"常见的垃圾回收算法","link":"#常见的垃圾回收算法","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"study-notes/shangguigu-second/JVM/one.md","localizedDate":"2023年3月11日","excerpt":"<p>JVM前提学习视频：\\nhttps://www.bilibili.com/video/BV1TJ411R75F/?spm_id_from=333.337.search-card.all.click&amp;vd_source=7138dfc78c49f602f8d3ed8cfbf0513d（没了）<br>\\nhttps://www.bilibili.com/video/BV1jJ411t71s/?spm_id_from=333.788.recommend_more_video.4&amp;vd_source=7138dfc78c49f602f8d3ed8cfbf0513d<br>\\n相应笔记： https://blog.csdn.net/q961250375/article/details/107499173</p>","autoDesc":true}')}}]);