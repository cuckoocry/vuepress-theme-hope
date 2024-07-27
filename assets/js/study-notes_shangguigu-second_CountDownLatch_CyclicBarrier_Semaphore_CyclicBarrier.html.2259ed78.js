"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[8800],{66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,i]of s)a[n]=i;return a}},78221:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>p,data:()=>r});var i=a(20641);const e=[(0,i.Fv)('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>和CountDownLatch相反，需要集齐七颗龙珠，召唤神龙。也就是做加法，开始是0，加到某个值的时候就执行。</p><p>CyclicBarrier的字面意思就是可循环（cyclic）使用的屏障（Barrier）。它要求做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活，线程进入屏障通过CyclicBarrier的await方法</p><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><p>集齐7个龙珠，召唤神龙的Demo，我们需要首先创建CyclicBarrier</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>\n<span class="line"><span>* 定义一个循环屏障，参数1：需要累加的值，参数2 需要执行的方法</span></span>\n<span class="line"><span>*/</span></span>\n<span class="line"><span>CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -&gt; {</span></span>\n<span class="line"><span>\tSystem.out.println(&quot;召唤神龙&quot;);</span></span>\n<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后同时编写七个线程，进行龙珠收集，但一个线程收集到了的时候，我们需要让他执行await方法，等待到7个线程全部执行完毕后，我们就执行原来定义好的方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        for (int i = 0; i &lt; 7; i++) {</span></span>\n<span class="line"><span>            final Integer tempInt = i;</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot;\\t 收集到 第&quot; + tempInt + &quot;颗龙珠&quot;);</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>                try {</span></span>\n<span class="line"><span>                    // 先到的被阻塞，等全部线程完成后，才能执行方法</span></span>\n<span class="line"><span>                    cyclicBarrier.await();</span></span>\n<span class="line"><span>                } catch (InterruptedException e) {</span></span>\n<span class="line"><span>                    e.printStackTrace();</span></span>\n<span class="line"><span>                } catch (BrokenBarrierException e) {</span></span>\n<span class="line"><span>                    e.printStackTrace();</span></span>\n<span class="line"><span>                }</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>\n<span class="line"><span> * CyclicBarrier循环屏障</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @author: 阿飞</span></span>\n<span class="line"><span> * @create: 2020-03-16-14:40</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>public class CyclicBarrierDemo {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public static void main(String[] args) {</span></span>\n<span class="line"><span>        /**</span></span>\n<span class="line"><span>         * 定义一个循环屏障，参数1：需要累加的值，参数2 需要执行的方法</span></span>\n<span class="line"><span>         */</span></span>\n<span class="line"><span>        CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -&gt; {</span></span>\n<span class="line"><span>            System.out.println(&quot;召唤神龙&quot;);</span></span>\n<span class="line"><span>        });</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        for (int i = 0; i &lt; 7; i++) {</span></span>\n<span class="line"><span>            final Integer tempInt = i;</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot;\\t 收集到 第&quot; + tempInt + &quot;颗龙珠&quot;);</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>                try {</span></span>\n<span class="line"><span>                    // 先到的被阻塞，等全部线程完成后，才能执行方法</span></span>\n<span class="line"><span>                    cyclicBarrier.await();</span></span>\n<span class="line"><span>                } catch (InterruptedException e) {</span></span>\n<span class="line"><span>                    e.printStackTrace();</span></span>\n<span class="line"><span>                } catch (BrokenBarrierException e) {</span></span>\n<span class="line"><span>                    e.printStackTrace();</span></span>\n<span class="line"><span>                }</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',10)],l={},p=(0,a(66262).A)(l,[["render",function(n,s){return(0,i.uX)(),(0,i.CE)("div",null,e)}]]),r=JSON.parse('{"path":"/study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/CyclicBarrier.html","title":"CyclicBarrier","lang":"zh-CN","frontmatter":{"title":"CyclicBarrier","date":"2023-03-18T00:00:00.000Z","tags":["CyclicBarrier"],"category":["学习笔记"],"description":"概念 和CountDownLatch相反，需要集齐七颗龙珠，召唤神龙。也就是做加法，开始是0，加到某个值的时候就执行。 CyclicBarrier的字面意思就是可循环（cyclic）使用的屏障（Barrier）。它要求做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/CyclicBarrier.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"CyclicBarrier"}],["meta",{"property":"og:description","content":"概念 和CountDownLatch相反，需要集齐七颗龙珠，召唤神龙。也就是做加法，开始是0，加到某个值的时候就执行。 CyclicBarrier的字面意思就是可循环（cyclic）使用的屏障（Barrier）。它要求做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"CyclicBarrier"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CyclicBarrier\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":1.54,"words":462},"filePathRelative":"study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/CyclicBarrier.md","localizedDate":"2023年3月18日","excerpt":"<h2>概念</h2>\\n<p>和CountDownLatch相反，需要集齐七颗龙珠，召唤神龙。也就是做加法，开始是0，加到某个值的时候就执行。</p>\\n<p>CyclicBarrier的字面意思就是可循环（cyclic）使用的屏障（Barrier）。它要求做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活，线程进入屏障通过CyclicBarrier的await方法</p>\\n<h2>案例</h2>\\n<p>集齐7个龙珠，召唤神龙的Demo，我们需要首先创建CyclicBarrier</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>/**</span></span>\\n<span class=\\"line\\"><span>* 定义一个循环屏障，参数1：需要累加的值，参数2 需要执行的方法</span></span>\\n<span class=\\"line\\"><span>*/</span></span>\\n<span class=\\"line\\"><span>CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -&gt; {</span></span>\\n<span class=\\"line\\"><span>\\tSystem.out.println(\\"召唤神龙\\");</span></span>\\n<span class=\\"line\\"><span>});</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);