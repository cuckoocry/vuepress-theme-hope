"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[6098],{6262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,n]of s)a[i]=n;return a}},7089:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>h});var n=a(641);const t=[(0,n.Fv)('<h2 id="项目中redisson分布式锁的使用" tabindex="-1"><a class="header-anchor" href="#项目中redisson分布式锁的使用"><span>项目中redisson分布式锁的使用</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Redisson 分布式锁在处理分布式系统中的并发问题时非常有用。通过确保关键代码块在任何时候只有一个实例在执行，可以有效避免数据不一致和竞争条件。常见的使用场景包括资源访问控制、任务调度、库存管理、分布式事务、分布式队列、限流和熔断以及缓存更新等。</p><p>可参考：https://doc.ruoyi.vip/ruoyi-vue/document/cjjc.html#%E9%9B%86%E6%88%90redisson%E5%AE%9E%E7%8E%B0redis%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81</p></div><h2 id="在springboot中的实践" tabindex="-1"><a class="header-anchor" href="#在springboot中的实践"><span>在springboot中的实践</span></a></h2><h3 id="_1、引入依赖" tabindex="-1"><a class="header-anchor" href="#_1、引入依赖"><span>1、引入依赖</span></a></h3><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!-- Redisson 锁功能 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;org.redisson&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;redisson-spring-boot-starter&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\t&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;3.16.2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、直接使用-前提已经引入redis" tabindex="-1"><a class="header-anchor" href="#_2、直接使用-前提已经引入redis"><span>2、直接使用(前提已经引入redis)</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Autowired</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> RedissonClient</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> redissonClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RLock</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> lock </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> redissonClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getLock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;faClSxLock&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 尝试获取锁，等待时间10秒，租赁时间60秒</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tryLock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">60</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">TimeUnit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">SECONDS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                    // TODO 需要保证并发问题的业务逻辑</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                    lock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">                }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 获取锁失败，处理逻辑</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RuntimeException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Unable to acquire lock&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InterruptedException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">            Thread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">currentThread</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">interrupt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            throw</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RuntimeException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Lock acquisition interrupted&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> e)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7)],e={},l=(0,a(6262).A)(e,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,t)}]]),h=JSON.parse('{"path":"/problem-record/redission.html","title":"redisson分布式锁的使用","lang":"zh-CN","frontmatter":{"title":"redisson分布式锁的使用","date":"2024-05-19T00:00:00.000Z","category":["redisson","分布式锁"],"tag":["redisson"],"description":"项目中redisson分布式锁的使用 提示 Redisson 分布式锁在处理分布式系统中的并发问题时非常有用。通过确保关键代码块在任何时候只有一个实例在执行，可以有效避免数据不一致和竞争条件。常见的使用场景包括资源访问控制、任务调度、库存管理、分布式事务、分布式队列、限流和熔断以及缓存更新等。 可参考：https://doc.ruoyi.vip/ruo...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/problem-record/redission.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"redisson分布式锁的使用"}],["meta",{"property":"og:description","content":"项目中redisson分布式锁的使用 提示 Redisson 分布式锁在处理分布式系统中的并发问题时非常有用。通过确保关键代码块在任何时候只有一个实例在执行，可以有效避免数据不一致和竞争条件。常见的使用场景包括资源访问控制、任务调度、库存管理、分布式事务、分布式队列、限流和熔断以及缓存更新等。 可参考：https://doc.ruoyi.vip/ruo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T10:07:31.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"redisson"}],["meta",{"property":"article:published_time","content":"2024-05-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T10:07:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redisson分布式锁的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T10:07:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"项目中redisson分布式锁的使用","slug":"项目中redisson分布式锁的使用","link":"#项目中redisson分布式锁的使用","children":[]},{"level":2,"title":"在springboot中的实践","slug":"在springboot中的实践","link":"#在springboot中的实践","children":[{"level":3,"title":"1、引入依赖","slug":"_1、引入依赖","link":"#_1、引入依赖","children":[]},{"level":3,"title":"2、直接使用(前提已经引入redis)","slug":"_2、直接使用-前提已经引入redis","link":"#_2、直接使用-前提已经引入redis","children":[]}]}],"git":{"createdTime":1722074851000,"updatedTime":1722074851000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"problem-record/redission.md","localizedDate":"2024年5月19日","excerpt":"<h2>项目中redisson分布式锁的使用</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>Redisson 分布式锁在处理分布式系统中的并发问题时非常有用。通过确保关键代码块在任何时候只有一个实例在执行，可以有效避免数据不一致和竞争条件。常见的使用场景包括资源访问控制、任务调度、库存管理、分布式事务、分布式队列、限流和熔断以及缓存更新等。</p>\\n<p>可参考：https://doc.ruoyi.vip/ruoyi-vue/document/cjjc.html#%E9%9B%86%E6%88%90redisson%E5%AE%9E%E7%8E%B0redis%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81</p>\\n</div>","autoDesc":true}')}}]);