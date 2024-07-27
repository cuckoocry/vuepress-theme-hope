"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[5761],{6262:(e,a)=>{a.A=(e,a)=>{const s=e.__vccOpts||e;for(const[e,n]of a)s[e]=n;return s}},6570:(e,a,s)=>{s.r(a),s.d(a,{comp:()=>p,data:()=>d});var n=s(641);const i=s.p+"assets/img/image-20200310162654437.df782113.png",l=[(0,n.Fv)('<p>计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令重排，一般分为以下三种：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>源代码 -&gt; 编译器优化的重排 -&gt; 指令并行的重排 -&gt; 内存系统的重排 -&gt; 最终执行指令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>单线程环境里面确保最终执行结果和代码顺序的结果一致</p><p>处理器在进行重排序时，必须要考虑指令之间的<code>数据依赖性</code></p><p>多线程环境中线程交替执行，由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的，结果无法预测。</p><h2 id="指令重排-example-1" tabindex="-1"><a class="header-anchor" href="#指令重排-example-1"><span>指令重排 - example 1</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public void mySort() {</span></span>\n<span class="line"><span>\tint x = 11;</span></span>\n<span class="line"><span>\tint y = 12;</span></span>\n<span class="line"><span>\tx = x + 5;</span></span>\n<span class="line"><span>\ty = x * x;</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照正常单线程环境，执行顺序是 1 2 3 4</p><p>但是在多线程环境下，可能出现以下的顺序：</p><ul><li>2 1 3 4</li><li>1 3 2 4</li></ul><p>上述的过程就可以当做是指令的重排，即内部执行顺序，和我们的代码顺序不一样</p><p>但是指令重排也是有限制的，即不会出现下面的顺序</p><ul><li>4 3 2 1</li></ul><p>因为处理器在进行重排时候，必须考虑到指令之间的数据依赖性</p><p>因为步骤 4：需要依赖于 y的申明，以及x的申明，故因为存在数据依赖，无法首先执行</p><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3><p>int a,b,x,y = 0</p><table><thead><tr><th>线程1</th><th>线程2</th></tr></thead><tbody><tr><td>x = a;</td><td>y = b;</td></tr><tr><td>b = 1;</td><td>a = 2;</td></tr><tr><td></td><td></td></tr><tr><td>x = 0; y = 0</td><td></td></tr></tbody></table><p>因为上面的代码，不存在数据的依赖性，因此编译器可能对数据进行重排</p><table><thead><tr><th>线程1</th><th>线程2</th></tr></thead><tbody><tr><td>b = 1;</td><td>a = 2;</td></tr><tr><td>x = a;</td><td>y = b;</td></tr><tr><td></td><td></td></tr><tr><td>x = 2; y = 1</td><td></td></tr></tbody></table><p>这样造成的结果，和最开始的就不一致了，这就是导致重排后，结果和最开始的不一样，因此为了防止这种结果出现，volatile就规定禁止指令重排，为了保证数据的一致性</p><h2 id="指令重排-example-2" tabindex="-1"><a class="header-anchor" href="#指令重排-example-2"><span>指令重排 - example 2</span></a></h2><p>比如下面这段代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>\n<span class="line"><span> * ResortSeqDemo</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @author: 阿飞</span></span>\n<span class="line"><span> * @create: 2020-03-10-16:08</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>public class ResortSeqDemo {</span></span>\n<span class="line"><span>    int a= 0;</span></span>\n<span class="line"><span>    boolean flag = false;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public void method01() {</span></span>\n<span class="line"><span>        a = 1;</span></span>\n<span class="line"><span>        flag = true;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public void method02() {</span></span>\n<span class="line"><span>        if(flag) {</span></span>\n<span class="line"><span>            a = a + 5;</span></span>\n<span class="line"><span>            System.out.println(&quot;reValue:&quot; + a);</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们按照正常的顺序，分别调用method01() 和 method02() 那么，最终输出就是 a = 6</p><p>但是如果在多线程环境下，因为方法1 和 方法2，他们之间不能存在数据依赖的问题，因此原先的顺序可能是</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>a = 1;</span></span>\n<span class="line"><span>flag = true;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>a = a + 5;</span></span>\n<span class="line"><span>System.out.println(&quot;reValue:&quot; + a);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在经过编译器，指令，或者内存的重排后，可能会出现这样的情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>flag = true;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>a = a + 5;</span></span>\n<span class="line"><span>System.out.println(&quot;reValue:&quot; + a);</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>a = 1;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是先执行 flag = true后，另外一个线程马上调用方法2，满足 flag的判断，最终让a + 5，结果为5，这样同样出现了数据不一致的问题</p><p>为什么会出现这个结果：多线程环境中线程交替执行，由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的，结果无法预测。</p><p>这样就需要通过volatile来修饰，来保证线程安全性</p><h2 id="volatile针对指令重排做了啥" tabindex="-1"><a class="header-anchor" href="#volatile针对指令重排做了啥"><span>Volatile针对指令重排做了啥</span></a></h2><p>Volatile实现禁止指令重排优化，从而避免了多线程环境下程序出现乱序执行的现象</p><p>首先了解一个概念，内存屏障（Memory Barrier）又称内存栅栏，是一个CPU指令，它的作用有两个：</p><ul><li>保证特定操作的顺序</li><li>保证某些变量的内存可见性（利用该特性实现volatile的内存可见性）</li></ul><p>由于编译器和处理器都能执行指令重排的优化，如果在指令间插入一条Memory Barrier则会告诉编译器和CPU，不管什么指令都不能和这条Memory Barrier指令重排序，也就是说 <code>通过插入内存屏障禁止在内存屏障前后的指令执行重排序优化</code>。 内存屏障另外一个作用是刷新出各种CPU的缓存数，因此任何CPU上的线程都能读取到这些数据的最新版本。</p><figure><img src="'+i+'" alt="image-20200310162654437" tabindex="0" loading="lazy"><figcaption>image-20200310162654437</figcaption></figure><p>也就是过在Volatile的写 和 读的时候，加入屏障，防止出现指令重排的</p><h2 id="线程安全获得保证" tabindex="-1"><a class="header-anchor" href="#线程安全获得保证"><span>线程安全获得保证</span></a></h2><p>工作内存与主内存同步延迟现象导致的可见性问题</p><ul><li>可通过synchronized或volatile关键字解决，他们都可以使一个线程修改后的变量立即对其它线程可见</li></ul><p>对于指令重排导致的可见性问题和有序性问题</p><ul><li>可以使用volatile关键字解决，因为volatile关键字的另一个作用就是禁止重排序优化</li></ul><h2 id="总线嗅探" tabindex="-1"><a class="header-anchor" href="#总线嗅探"><span>总线嗅探</span></a></h2>',45)],t={},p=(0,s(6262).A)(t,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,l)}]]),d=JSON.parse('{"path":"/study-notes/shangguigu-second/volatile/three.html","title":"Volatile禁止指令重排","lang":"zh-CN","frontmatter":{"title":"Volatile禁止指令重排","date":"2023-03-11T00:00:00.000Z","tags":["JUC","Volatile"],"category":["JUC"],"order":3,"description":"计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令重排，一般分为以下三种： 单线程环境里面确保最终执行结果和代码顺序的结果一致 处理器在进行重排序时，必须要考虑指令之间的数据依赖性 多线程环境中线程交替执行，由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的，结果无法预测。 指令重排 - example 1 按照正常单线...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/volatile/three.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Volatile禁止指令重排"}],["meta",{"property":"og:description","content":"计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令重排，一般分为以下三种： 单线程环境里面确保最终执行结果和代码顺序的结果一致 处理器在进行重排序时，必须要考虑指令之间的数据依赖性 多线程环境中线程交替执行，由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的，结果无法预测。 指令重排 - example 1 按照正常单线..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"JUC"}],["meta",{"property":"article:tag","content":"Volatile"}],["meta",{"property":"article:published_time","content":"2023-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Volatile禁止指令重排\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"指令重排 - example 1","slug":"指令重排-example-1","link":"#指令重排-example-1","children":[{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"指令重排 - example 2","slug":"指令重排-example-2","link":"#指令重排-example-2","children":[]},{"level":2,"title":"Volatile针对指令重排做了啥","slug":"volatile针对指令重排做了啥","link":"#volatile针对指令重排做了啥","children":[]},{"level":2,"title":"线程安全获得保证","slug":"线程安全获得保证","link":"#线程安全获得保证","children":[]},{"level":2,"title":"总线嗅探","slug":"总线嗅探","link":"#总线嗅探","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":4.07,"words":1222},"filePathRelative":"study-notes/shangguigu-second/volatile/three.md","localizedDate":"2023年3月11日","excerpt":"<p>计算机在执行程序时，为了提高性能，编译器和处理器常常会对指令重排，一般分为以下三种：</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>源代码 -&gt; 编译器优化的重排 -&gt; 指令并行的重排 -&gt; 内存系统的重排 -&gt; 最终执行指令</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);