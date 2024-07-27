"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[1243],{66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},86053:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>p});var e=a(20641);const i=[(0,e.Fv)('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>让一些线程阻塞直到另一些线程完成一系列操作才被唤醒</p><p>CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，调用线程就会被阻塞。其它线程调用CountDown方法会将计数器减1（调用CountDown方法的线程不会被阻塞），当计数器的值变成零时，因调用await方法被阻塞的线程会被唤醒，继续执行</p><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景"><span>场景</span></a></h2><p>现在有这样一个场景，假设一个自习室里有7个人，其中有一个是班长，班长的主要职责就是在其它6个同学走了后，关灯，锁教室门，然后走人，因此班长是需要最后一个走的，那么有什么方法能够控制班长这个线程是最后一个执行，而其它线程是随机执行的</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>这个时候就用到了CountDownLatch，计数器了。我们一共创建6个线程，然后计数器的值也设置成6</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 计数器</span></span>\n<span class="line"><span>CountDownLatch countDownLatch = new CountDownLatch(6);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后每次学生线程执行完，就让计数器的值减1</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>for (int i = 0; i &lt;= 6; i++) {</span></span>\n<span class="line"><span>    new Thread(() -&gt; {</span></span>\n<span class="line"><span>        System.out.println(Thread.currentThread().getName() + &quot;\\t 上完自习，离开教室&quot;);</span></span>\n<span class="line"><span>        countDownLatch.countDown();</span></span>\n<span class="line"><span>    }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后我们需要通过CountDownLatch的await方法来控制班长主线程的执行，这里 countDownLatch.await()可以想成是一道墙，只有当计数器的值为0的时候，墙才会消失，主线程才能继续往下执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>countDownLatch.await();</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>System.out.println(Thread.currentThread().getName() + &quot;\\t 班长最后关门&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不加CountDownLatch的执行结果，我们发现main线程提前已经执行完成了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1\t 上完自习，离开教室</span></span>\n<span class="line"><span>0\t 上完自习，离开教室</span></span>\n<span class="line"><span>main\t 班长最后关门</span></span>\n<span class="line"><span>2\t 上完自习，离开教室</span></span>\n<span class="line"><span>3\t 上完自习，离开教室</span></span>\n<span class="line"><span>4\t 上完自习，离开教室</span></span>\n<span class="line"><span>5\t 上完自习，离开教室</span></span>\n<span class="line"><span>6\t 上完自习，离开教室</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入CountDownLatch后的执行结果，我们能够控制住main方法的执行，这样能够保证前提任务的执行</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>0\t 上完自习，离开教室</span></span>\n<span class="line"><span>2\t 上完自习，离开教室</span></span>\n<span class="line"><span>4\t 上完自习，离开教室</span></span>\n<span class="line"><span>1\t 上完自习，离开教室</span></span>\n<span class="line"><span>5\t 上完自习，离开教室</span></span>\n<span class="line"><span>6\t 上完自习，离开教室</span></span>\n<span class="line"><span>3\t 上完自习，离开教室</span></span>\n<span class="line"><span>main\t 班长最后关门</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码"><span>完整代码</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.moxi.interview.study.thread;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>import java.util.concurrent.CountDownLatch;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * @author: 阿飞</span></span>\n<span class="line"><span> * @create: 2020-03-15-19:03</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>public class CountDownLatchDemo {</span></span>\n<span class="line"><span>    public static void main(String[] args) throws InterruptedException {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        // 计数器</span></span>\n<span class="line"><span>        CountDownLatch countDownLatch = new CountDownLatch(6);</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        for (int i = 0; i &lt;= 6; i++) {</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                System.out.println(Thread.currentThread().getName() + &quot;\\t 上完自习，离开教室&quot;);</span></span>\n<span class="line"><span>                countDownLatch.countDown();</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        countDownLatch.await();</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        System.out.println(Thread.currentThread().getName() + &quot;\\t 班长最后关门&quot;);</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',18)],t={},l=(0,a(66262).A)(t,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,i)}]]),p=JSON.parse('{"path":"/study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/countDownLatch.html","title":"CountDownLatch","lang":"zh-CN","frontmatter":{"title":"CountDownLatch","date":"2023-03-18T00:00:00.000Z","tags":["CountDownLatch"],"category":["学习笔记"],"description":"概念 让一些线程阻塞直到另一些线程完成一系列操作才被唤醒 CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，调用线程就会被阻塞。其它线程调用CountDown方法会将计数器减1（调用CountDown方法的线程不会被阻塞），当计数器的值变成零时，因调用await方法被阻塞的线程会被唤醒，继续执行 场景 现在有这样一个场景...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/countDownLatch.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"CountDownLatch"}],["meta",{"property":"og:description","content":"概念 让一些线程阻塞直到另一些线程完成一系列操作才被唤醒 CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，调用线程就会被阻塞。其它线程调用CountDown方法会将计数器减1（调用CountDown方法的线程不会被阻塞），当计数器的值变成零时，因调用await方法被阻塞的线程会被唤醒，继续执行 场景 现在有这样一个场景..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"CountDownLatch"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CountDownLatch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"场景","slug":"场景","link":"#场景","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":680},"filePathRelative":"study-notes/shangguigu-second/CountDownLatch_CyclicBarrier_Semaphore/countDownLatch.md","localizedDate":"2023年3月18日","excerpt":"<h2>概念</h2>\\n<p>让一些线程阻塞直到另一些线程完成一系列操作才被唤醒</p>\\n<p>CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，调用线程就会被阻塞。其它线程调用CountDown方法会将计数器减1（调用CountDown方法的线程不会被阻塞），当计数器的值变成零时，因调用await方法被阻塞的线程会被唤醒，继续执行</p>\\n<h2>场景</h2>\\n<p>现在有这样一个场景，假设一个自习室里有7个人，其中有一个是班长，班长的主要职责就是在其它6个同学走了后，关灯，锁教室门，然后走人，因此班长是需要最后一个走的，那么有什么方法能够控制班长这个线程是最后一个执行，而其它线程是随机执行的</p>","autoDesc":true}')}}]);