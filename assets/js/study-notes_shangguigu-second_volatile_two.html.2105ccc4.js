"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[4559],{6262:(t,d)=>{d.A=(t,d)=>{const n=t.__vccOpts||t;for(const[t,s]of d)n[t]=s;return n}},1344:(t,d,n)=>{n.r(d),n.d(d,{comp:()=>b,data:()=>m});var s=n(641);const a=n.p+"assets/img/image-20200309172900462.c4b122cd.png",i=n.p+"assets/img/image-20200309172919295.449c87b2.png",e=n.p+"assets/img/image-20200309172929820.78a077a3.png",l=n.p+"assets/img/image-20200309174220675.3a7989cd.png",r=n.p+"assets/img/image-20200309183026329.50646bbd.png",p=n.p+"assets/img/image-20200309183115613.fb4ecec3.png",c=n.p+"assets/img/image-20200309173315294.5133b3e2.png",o=n.p+"assets/img/image-20200309205242622.4059efb0.png",u=[(0,s.Fv)('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>通过前面对JMM的介绍，我们知道，各个线程对主内存中共享变量的操作都是各个线程各自拷贝到自己的工作内存进行操作后在写回到主内存中的。</p><p>这就可能存在一个线程AAA修改了共享变量X的值，但是还未写入主内存时，另外一个线程BBB又对主内存中同一共享变量X进行操作，但此时A线程工作内存中共享变量X对线程B来说是不可见，这种工作内存与主内存同步延迟现象就造成了可见性问题。</p><h2 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性"><span>原子性</span></a></h2><p>不可分割，完整性，也就是说某个线程正在做某个具体业务时，中间不可以被加塞或者被分割，需要具体完成，要么同时成功，要么同时失败。</p><p>数据库也经常提到事务具备原子性</p><h2 id="代码测试" tabindex="-1"><a class="header-anchor" href="#代码测试"><span>代码测试</span></a></h2><p>为了测试volatile是否保证原子性，我们创建了20个线程，然后每个线程分别循环1000次，来调用number++的方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        MyData myData = new MyData();</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        // 创建10个线程，线程里面进行1000次循环</span></span>\n<span class="line"><span>        for (int i = 0; i &lt; 20; i++) {</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                // 里面</span></span>\n<span class="line"><span>                for (int j = 0; j &lt; 1000; j++) {</span></span>\n<span class="line"><span>                    myData.addPlusPlus();</span></span>\n<span class="line"><span>                }</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后通过 Thread.activeCount()，来感知20个线程是否执行完毕，这里判断线程数是否大于2，为什么是2？因为默认是有两个线程的，一个main线程，一个gc线程</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 需要等待上面20个线程都计算完成后，在用main线程取得最终的结果值</span></span>\n<span class="line"><span>while(Thread.activeCount() &gt; 2) {</span></span>\n<span class="line"><span>    // yield表示不执行</span></span>\n<span class="line"><span>    Thread.yield();</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在线程执行完毕后，我们在查看number的值，假设volatile保证原子性的话，那么最后输出的值应该是</p><p>20 * 1000 = 20000,</p><p>完整代码如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * Volatile Java虚拟机提供的轻量级同步机制</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * 可见性（及时通知）</span></span>\n<span class="line"><span> * 不保证原子性</span></span>\n<span class="line"><span> * 禁止指令重排</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * @author: 阿飞</span></span>\n<span class="line"><span> * @create: 2020-03-09-15:58</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>import java.util.concurrent.TimeUnit;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * 假设是主物理内存</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>class MyData {</span></span>\n<span class="line"><span>    /**</span></span>\n<span class="line"><span>     * volatile 修饰的关键字，是为了增加 主线程和线程之间的可见性，只要有一个线程修改了内存中的值，其它线程也能马上感知</span></span>\n<span class="line"><span>     */</span></span>\n<span class="line"><span>    volatile int number = 0;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public void addTo60() {</span></span>\n<span class="line"><span>        this.number = 60;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    /**</span></span>\n<span class="line"><span>     * 注意，此时number 前面是加了volatile修饰</span></span>\n<span class="line"><span>     */</span></span>\n<span class="line"><span>    public void addPlusPlus() {</span></span>\n<span class="line"><span>        number ++;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>/**</span></span>\n<span class="line"><span> * 验证volatile的可见性</span></span>\n<span class="line"><span> * 1、 假设int number = 0， number变量之前没有添加volatile关键字修饰</span></span>\n<span class="line"><span> * 2、添加了volatile，可以解决可见性问题</span></span>\n<span class="line"><span> *</span></span>\n<span class="line"><span> * 验证volatile不保证原子性</span></span>\n<span class="line"><span> * 1、原子性指的是什么意思？</span></span>\n<span class="line"><span> */</span></span>\n<span class="line"><span>public class VolatileDemo {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public static void main(String args []) {</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        MyData myData = new MyData();</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        // 创建10个线程，线程里面进行1000次循环</span></span>\n<span class="line"><span>        for (int i = 0; i &lt; 20; i++) {</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                // 里面</span></span>\n<span class="line"><span>                for (int j = 0; j &lt; 1000; j++) {</span></span>\n<span class="line"><span>                    myData.addPlusPlus();</span></span>\n<span class="line"><span>                }</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        // 需要等待上面20个线程都计算完成后，在用main线程取得最终的结果值</span></span>\n<span class="line"><span>        // 这里判断线程数是否大于2，为什么是2？因为默认是有两个线程的，一个main线程，一个gc线程</span></span>\n<span class="line"><span>        while(Thread.activeCount() &gt; 2) {</span></span>\n<span class="line"><span>            // yield表示不执行</span></span>\n<span class="line"><span>            Thread.yield();</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>        // 查看最终的值</span></span>\n<span class="line"><span>        // 假设volatile保证原子性，那么输出的值应该为：  20 * 1000 = 20000</span></span>\n<span class="line"><span>        System.out.println(Thread.currentThread().getName() + &quot;\\t finally number value: &quot; + myData.number);</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终结果我们会发现，number输出的值并没有20000，而且是每次运行的结果都不一致的，这说明了volatile修饰的变量不保证原子性</p><p>第一次：</p><figure><img src="'+a+'" alt="image-20200309172900462" tabindex="0" loading="lazy"><figcaption>image-20200309172900462</figcaption></figure><p>第二次：</p><figure><img src="'+i+'" alt="image-20200309172919295" tabindex="0" loading="lazy"><figcaption>image-20200309172919295</figcaption></figure><p>第三次：</p><figure><img src="'+e+'" alt="image-20200309172929820" tabindex="0" loading="lazy"><figcaption>image-20200309172929820</figcaption></figure><h2 id="为什么出现数值丢失" tabindex="-1"><a class="header-anchor" href="#为什么出现数值丢失"><span>为什么出现数值丢失</span></a></h2><figure><img src="'+l+'" alt="image-20200309174220675" tabindex="0" loading="lazy"><figcaption>image-20200309174220675</figcaption></figure><p>各自线程在写入主内存的时候，出现了数据的丢失，而引起的数值缺失的问题</p><p>下面我们将一个简单的number++操作，转换为字节码文件一探究竟</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class T1 {</span></span>\n<span class="line"><span>    volatile int n = 0;</span></span>\n<span class="line"><span>    public void add() {</span></span>\n<span class="line"><span>        n++;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换后的字节码文件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class com.moxi.interview.study.thread.T1 {</span></span>\n<span class="line"><span>  volatile int n;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>  public com.moxi.interview.study.thread.T1();</span></span>\n<span class="line"><span>    Code:</span></span>\n<span class="line"><span>       0: aload_0</span></span>\n<span class="line"><span>       1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span></span>\n<span class="line"><span>       4: aload_0</span></span>\n<span class="line"><span>       5: iconst_0</span></span>\n<span class="line"><span>       6: putfield      #2                  // Field n:I</span></span>\n<span class="line"><span>       9: return</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>  public void add();</span></span>\n<span class="line"><span>    Code:</span></span>\n<span class="line"><span>       0: aload_0</span></span>\n<span class="line"><span>       1: dup</span></span>\n<span class="line"><span>       2: getfield      #2                  // Field n:I</span></span>\n<span class="line"><span>       5: iconst_1</span></span>\n<span class="line"><span>       6: iadd</span></span>\n<span class="line"><span>       7: putfield      #2                  // Field n:I</span></span>\n<span class="line"><span>      10: return</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里查看字节码的操作，是用到了IDEA的javap命令</p><p>我们首先，使用IDEA提供的External Tools，来扩展javap命令</p><figure><img src="'+r+'" alt="image-20200309183026329" tabindex="0" loading="lazy"><figcaption>image-20200309183026329</figcaption></figure><p>完成上述操作后，我们在需要查看字节码的文件下，右键选择 External Tools即可</p><figure><img src="'+p+'" alt="image-20200309183115613" tabindex="0" loading="lazy"><figcaption>image-20200309183115613</figcaption></figure><p>如果出现了找不到指定类，那是因为我们创建的是spring boot的maven项目，我们之前需要执行mvn package命令，进行打包操作，将其编译成class文件</p><p>移动到底部，有一份字节码指令对照表，方便我们进行阅读</p><p>下面我们就针对 add() 这个方法的字节码文件进行分析</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  public void add();</span></span>\n<span class="line"><span>    Code:</span></span>\n<span class="line"><span>       0: aload_0</span></span>\n<span class="line"><span>       1: dup</span></span>\n<span class="line"><span>       2: getfield      #2    // Field n:I</span></span>\n<span class="line"><span>       5: iconst_1</span></span>\n<span class="line"><span>       6: iadd</span></span>\n<span class="line"><span>       7: putfield      #2    // Field n:I</span></span>\n<span class="line"><span>      10: return</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们能够发现 n++这条命令，被拆分成了3个指令</p><ul><li>执行<code>getfield</code> 从主内存拿到原始n</li><li>执行<code>iadd</code> 进行加1操作</li><li>执行<code>putfileld</code> 把累加后的值写回主内存</li></ul><p>假设我们没有加 <code>synchronized</code>那么第一步就可能存在着，三个线程同时通过getfield命令，拿到主存中的 n值，然后三个线程，各自在自己的工作内存中进行加1操作，但他们并发进行 <code>iadd</code> 命令的时候，因为只能一个进行写，所以其它操作会被挂起，假设1线程，先进行了写操作，在写完后，volatile的可见性，应该需要告诉其它两个线程，主内存的值已经被修改了，但是因为太快了，其它两个线程，陆续执行 <code>iadd</code>命令，进行写入操作，这就造成了其他线程没有接受到主内存n的改变，从而覆盖了原来的值，出现写丢失，这样也就让最终的结果少于20000</p><h2 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决"><span>如何解决</span></a></h2><p>因此这也说明，在多线程环境下 number ++ 在多线程环境下是非线程安全的，解决的方法有哪些呢？</p><ul><li>在方法上加入 synchronized</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    public synchronized void addPlusPlus() {</span></span>\n<span class="line"><span>        number ++;</span></span>\n<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><figure><img src="'+c+'" alt="image-20200309173315294" tabindex="0" loading="lazy"><figcaption>image-20200309173315294</figcaption></figure><p>我们能够发现引入synchronized关键字后，保证了该方法每次只能够一个线程进行访问和操作，最终输出的结果也就为20000</p><h2 id="其它解决方法" tabindex="-1"><a class="header-anchor" href="#其它解决方法"><span>其它解决方法</span></a></h2><p>上面的方法引入synchronized，虽然能够保证原子性，但是为了解决number++，而引入重量级的同步机制，有种 杀鸡焉用牛刀</p><p>除了引用synchronized关键字外，还可以使用JUC下面的原子包装类，即刚刚的int类型的number，可以使用AtomicInteger来代替</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>    /**</span></span>\n<span class="line"><span>     *  创建一个原子Integer包装类，默认为0</span></span>\n<span class="line"><span>      */</span></span>\n<span class="line"><span>    AtomicInteger atomicInteger = new AtomicInteger();</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>    public void addAtomic() {</span></span>\n<span class="line"><span>        // 相当于 atomicInter ++</span></span>\n<span class="line"><span>        atomicInteger.getAndIncrement();</span></span>\n<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后同理，继续刚刚的操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        // 创建10个线程，线程里面进行1000次循环</span></span>\n<span class="line"><span>        for (int i = 0; i &lt; 20; i++) {</span></span>\n<span class="line"><span>            new Thread(() -&gt; {</span></span>\n<span class="line"><span>                // 里面</span></span>\n<span class="line"><span>                for (int j = 0; j &lt; 1000; j++) {</span></span>\n<span class="line"><span>                    myData.addPlusPlus();</span></span>\n<span class="line"><span>                    myData.addAtomic();</span></span>\n<span class="line"><span>                }</span></span>\n<span class="line"><span>            }, String.valueOf(i)).start();</span></span>\n<span class="line"><span>        }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后输出</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        // 假设volatile保证原子性，那么输出的值应该为：  20 * 1000 = 20000</span></span>\n<span class="line"><span>        System.out.println(Thread.currentThread().getName() + &quot;\\t finally number value: &quot; + myData.number);</span></span>\n<span class="line"><span>        System.out.println(Thread.currentThread().getName() + &quot;\\t finally atomicNumber value: &quot; + myData.atomicInteger);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的结果，一个是引入synchronized，一个是使用了原子包装类AtomicInteger</p><figure><img src="'+o+'" alt="image-20200309205242622" tabindex="0" loading="lazy"><figcaption>image-20200309205242622</figcaption></figure><h2 id="字节码指令表" tabindex="-1"><a class="header-anchor" href="#字节码指令表"><span>字节码指令表</span></a></h2><p>为了方便阅读JVM字节码文件，我从网上找了一份字节码指令表</p><p>引用：https://segmentfault.com/a/1190000008722128</p><table><thead><tr><th>字节码</th><th>助记符</th><th>指令含义</th></tr></thead><tbody><tr><td>0x00</td><td>nop</td><td>None</td></tr><tr><td>0x01</td><td>aconst_null</td><td>将null推送至栈顶</td></tr><tr><td>0x02</td><td>iconst_m1</td><td>将int型-1推送至栈顶</td></tr><tr><td>0x03</td><td>iconst_0</td><td>将int型0推送至栈顶</td></tr><tr><td>0x04</td><td>iconst_1</td><td>将int型1推送至栈顶</td></tr><tr><td>0x05</td><td>iconst_2</td><td>将int型2推送至栈顶</td></tr><tr><td>0x06</td><td>iconst_3</td><td>将int型3推送至栈顶</td></tr><tr><td>0x07</td><td>iconst_4</td><td>将int型4推送至栈顶</td></tr><tr><td>0x08</td><td>iconst_5</td><td>将int型5推送至栈顶</td></tr><tr><td>0x09</td><td>lconst_0</td><td>将long型0推送至栈顶</td></tr><tr><td>0x0a</td><td>lconst_1</td><td>将long型1推送至栈顶</td></tr><tr><td>0x0b</td><td>fconst_0</td><td>将float型0推送至栈顶</td></tr><tr><td>0x0c</td><td>fconst_1</td><td>将float型1推送至栈顶</td></tr><tr><td>0x0d</td><td>fconst_2</td><td>将float型2推送至栈顶</td></tr><tr><td>0x0e</td><td>dconst_0</td><td>将double型0推送至栈顶</td></tr><tr><td>0x0f</td><td>dconst_1</td><td>将double型1推送至栈顶</td></tr><tr><td>0x10</td><td>bipush</td><td>将单字节的常量值(-128~127)推送至栈顶</td></tr><tr><td>0x11</td><td>sipush</td><td>将一个短整型常量(-32768~32767)推送至栈顶</td></tr><tr><td>0x12</td><td>ldc</td><td>将int,float或String型常量值从常量池中推送至栈顶</td></tr><tr><td>0x13</td><td>ldc_w</td><td>将int,float或String型常量值从常量池中推送至栈顶(宽索引)</td></tr><tr><td>0x14</td><td>ldc2_w</td><td>将long或double型常量值从常量池中推送至栈顶(宽索引)</td></tr><tr><td>0x15</td><td>iload</td><td>将指定的int型本地变量推送至栈顶</td></tr><tr><td>0x16</td><td>lload</td><td>将指定的long型本地变量推送至栈顶</td></tr><tr><td>0x17</td><td>fload</td><td>将指定的float型本地变量推送至栈顶</td></tr><tr><td>0x18</td><td>dload</td><td>将指定的double型本地变量推送至栈顶</td></tr><tr><td>0x19</td><td>aload</td><td>将指定的引用类型本地变量推送至栈顶</td></tr><tr><td>0x1a</td><td>iload_0</td><td>将第一个int型本地变量推送至栈顶</td></tr><tr><td>0x1b</td><td>iload_1</td><td>将第二个int型本地变量推送至栈顶</td></tr><tr><td>0x1c</td><td>iload_2</td><td>将第三个int型本地变量推送至栈顶</td></tr><tr><td>0x1d</td><td>iload_3</td><td>将第四个int型本地变量推送至栈顶</td></tr><tr><td>0x1e</td><td>lload_0</td><td>将第一个long型本地变量推送至栈顶</td></tr><tr><td>0x1f</td><td>lload_1</td><td>将第二个long型本地变量推送至栈顶</td></tr><tr><td>0x20</td><td>lload_2</td><td>将第三个long型本地变量推送至栈顶</td></tr><tr><td>0x21</td><td>lload_3</td><td>将第四个long型本地变量推送至栈顶</td></tr><tr><td>0x22</td><td>fload_0</td><td>将第一个float型本地变量推送至栈顶</td></tr><tr><td>0x23</td><td>fload_1</td><td>将第二个float型本地变量推送至栈顶</td></tr><tr><td>0x24</td><td>fload_2</td><td>将第三个float型本地变量推送至栈顶</td></tr><tr><td>0x25</td><td>fload_3</td><td>将第四个float型本地变量推送至栈顶</td></tr><tr><td>0x26</td><td>dload_0</td><td>将第一个double型本地变量推送至栈顶</td></tr><tr><td>0x27</td><td>dload_1</td><td>将第二个double型本地变量推送至栈顶</td></tr><tr><td>0x28</td><td>dload_2</td><td>将第三个double型本地变量推送至栈顶</td></tr><tr><td>0x29</td><td>dload_3</td><td>将第四个double型本地变量推送至栈顶</td></tr><tr><td>0x2a</td><td>aload_0</td><td>将第一个引用类型本地变量推送至栈顶</td></tr><tr><td>0x2b</td><td>aload_1</td><td>将第二个引用类型本地变量推送至栈顶</td></tr><tr><td>0x2c</td><td>aload_2</td><td>将第三个引用类型本地变量推送至栈顶</td></tr><tr><td>0x2d</td><td>aload_3</td><td>将第四个引用类型本地变量推送至栈顶</td></tr><tr><td>0x2e</td><td>iaload</td><td>将int型数组指定索引的值推送至栈顶</td></tr><tr><td>0x2f</td><td>laload</td><td>将long型数组指定索引的值推送至栈顶</td></tr><tr><td>0x30</td><td>faload</td><td>将float型数组指定索引的值推送至栈顶</td></tr><tr><td>0x31</td><td>daload</td><td>将double型数组指定索引的值推送至栈顶</td></tr><tr><td>0x32</td><td>aaload</td><td>将引用类型数组指定索引的值推送至栈顶</td></tr><tr><td>0x33</td><td>baload</td><td>将boolean或byte型数组指定索引的值推送至栈顶</td></tr><tr><td>0x34</td><td>caload</td><td>将char型数组指定索引的值推送至栈顶</td></tr><tr><td>0x35</td><td>saload</td><td>将short型数组指定索引的值推送至栈顶</td></tr><tr><td>0x36</td><td>istore</td><td>将栈顶int型数值存入指定本地变量</td></tr><tr><td>0x37</td><td>lstore</td><td>将栈顶long型数值存入指定本地变量</td></tr><tr><td>0x38</td><td>fstore</td><td>将栈顶float型数值存入指定本地变量</td></tr><tr><td>0x39</td><td>dstore</td><td>将栈顶double型数值存入指定本地变量</td></tr><tr><td>0x3a</td><td>astore</td><td>将栈顶引用类型数值存入指定本地变量</td></tr><tr><td>0x3b</td><td>istore_0</td><td>将栈顶int型数值存入第一个本地变量</td></tr><tr><td>0x3c</td><td>istore_1</td><td>将栈顶int型数值存入第二个本地变量</td></tr><tr><td>0x3d</td><td>istore_2</td><td>将栈顶int型数值存入第三个本地变量</td></tr><tr><td>0x3e</td><td>istore_3</td><td>将栈顶int型数值存入第四个本地变量</td></tr><tr><td>0x3f</td><td>lstore_0</td><td>将栈顶long型数值存入第一个本地变量</td></tr><tr><td>0x40</td><td>lstore_1</td><td>将栈顶long型数值存入第二个本地变量</td></tr><tr><td>0x41</td><td>lstore_2</td><td>将栈顶long型数值存入第三个本地变量</td></tr><tr><td>0x42</td><td>lstore_3</td><td>将栈顶long型数值存入第四个本地变量</td></tr><tr><td>0x43</td><td>fstore_0</td><td>将栈顶float型数值存入第一个本地变量</td></tr><tr><td>0x44</td><td>fstore_1</td><td>将栈顶float型数值存入第二个本地变量</td></tr><tr><td>0x45</td><td>fstore_2</td><td>将栈顶float型数值存入第三个本地变量</td></tr><tr><td>0x46</td><td>fstore_3</td><td>将栈顶float型数值存入第四个本地变量</td></tr><tr><td>0x47</td><td>dstore_0</td><td>将栈顶double型数值存入第一个本地变量</td></tr><tr><td>0x48</td><td>dstore_1</td><td>将栈顶double型数值存入第二个本地变量</td></tr><tr><td>0x49</td><td>dstore_2</td><td>将栈顶double型数值存入第三个本地变量</td></tr><tr><td>0x4a</td><td>dstore_3</td><td>将栈顶double型数值存入第四个本地变量</td></tr><tr><td>0x4b</td><td>astore_0</td><td>将栈顶引用型数值存入第一个本地变量</td></tr><tr><td>0x4c</td><td>astore_1</td><td>将栈顶引用型数值存入第二个本地变量</td></tr><tr><td>0x4d</td><td>astore_2</td><td>将栈顶引用型数值存入第三个本地变量</td></tr><tr><td>0x4e</td><td>astore_3</td><td>将栈顶引用型数值存入第四个本地变量</td></tr><tr><td>0x4f</td><td>iastore</td><td>将栈顶int型数值存入指定数组的指定索引位置</td></tr><tr><td>0x50</td><td>lastore</td><td>将栈顶long型数值存入指定数组的指定索引位置</td></tr><tr><td>0x51</td><td>fastore</td><td>将栈顶float型数值存入指定数组的指定索引位置</td></tr><tr><td>0x52</td><td>dastore</td><td>将栈顶double型数值存入指定数组的指定索引位置</td></tr><tr><td>0x53</td><td>aastore</td><td>将栈顶引用型数值存入指定数组的指定索引位置</td></tr><tr><td>0x54</td><td>bastore</td><td>将栈顶boolean或byte型数值存入指定数组的指定索引位置</td></tr><tr><td>0x55</td><td>castore</td><td>将栈顶char型数值存入指定数组的指定索引位置</td></tr><tr><td>0x56</td><td>sastore</td><td>将栈顶short型数值存入指定数组的指定索引位置</td></tr><tr><td>0x57</td><td>pop</td><td>将栈顶数值弹出(数值不能是long或double类型的)</td></tr><tr><td>0x58</td><td>pop2</td><td>将栈顶的一个(对于非long或double类型)或两个数值(对于非long或double的其他类型)弹出</td></tr><tr><td>0x59</td><td>dup</td><td>复制栈顶数值并将复制值压入栈顶</td></tr><tr><td>0x5a</td><td>dup_x1</td><td>复制栈顶数值并将两个复制值压入栈顶</td></tr><tr><td>0x5b</td><td>dup_x2</td><td>复制栈顶数值并将三个(或两个)复制值压入栈顶</td></tr><tr><td>0x5c</td><td>dup2</td><td>复制栈顶一个(对于long或double类型)或两个(对于非long或double的其他类型)数值并将复制值压入栈顶</td></tr><tr><td>0x5d</td><td>dup2_x1</td><td>dup_x1指令的双倍版本</td></tr><tr><td>0x5e</td><td>dup2_x2</td><td>dup_x2指令的双倍版本</td></tr><tr><td>0x5f</td><td>swap</td><td>将栈顶最顶端的两个数值互换(数值不能是long或double类型)</td></tr><tr><td>0x60</td><td>iadd</td><td>将栈顶两int型数值相加并将结果压入栈顶</td></tr><tr><td>0x61</td><td>ladd</td><td>将栈顶两long型数值相加并将结果压入栈顶</td></tr><tr><td>0x62</td><td>fadd</td><td>将栈顶两float型数值相加并将结果压入栈顶</td></tr><tr><td>0x63</td><td>dadd</td><td>将栈顶两double型数值相加并将结果压入栈顶</td></tr><tr><td>0x64</td><td>isub</td><td>将栈顶两int型数值相减并将结果压入栈顶</td></tr><tr><td>0x65</td><td>lsub</td><td>将栈顶两long型数值相减并将结果压入栈顶</td></tr><tr><td>0x66</td><td>fsub</td><td>将栈顶两float型数值相减并将结果压入栈顶</td></tr><tr><td>0x67</td><td>dsub</td><td>将栈顶两double型数值相减并将结果压入栈顶</td></tr><tr><td>0x68</td><td>imul</td><td>将栈顶两int型数值相乘并将结果压入栈顶</td></tr><tr><td>0x69</td><td>lmul</td><td>将栈顶两long型数值相乘并将结果压入栈顶</td></tr><tr><td>0x6a</td><td>fmul</td><td>将栈顶两float型数值相乘并将结果压入栈顶</td></tr><tr><td>0x6b</td><td>dmul</td><td>将栈顶两double型数值相乘并将结果压入栈顶</td></tr><tr><td>0x6c</td><td>idiv</td><td>将栈顶两int型数值相除并将结果压入栈顶</td></tr><tr><td>0x6d</td><td>ldiv</td><td>将栈顶两long型数值相除并将结果压入栈顶</td></tr><tr><td>0x6e</td><td>fdiv</td><td>将栈顶两float型数值相除并将结果压入栈顶</td></tr><tr><td>0x6f</td><td>ddiv</td><td>将栈顶两double型数值相除并将结果压入栈顶</td></tr><tr><td>0x70</td><td>irem</td><td>将栈顶两int型数值作取模运算并将结果压入栈顶</td></tr><tr><td>0x71</td><td>lrem</td><td>将栈顶两long型数值作取模运算并将结果压入栈顶</td></tr><tr><td>0x72</td><td>frem</td><td>将栈顶两float型数值作取模运算并将结果压入栈顶</td></tr><tr><td>0x73</td><td>drem</td><td>将栈顶两double型数值作取模运算并将结果压入栈顶</td></tr><tr><td>0x74</td><td>ineg</td><td>将栈顶int型数值取负并将结果压入栈顶</td></tr><tr><td>0x75</td><td>lneg</td><td>将栈顶long型数值取负并将结果压入栈顶</td></tr><tr><td>0x76</td><td>fneg</td><td>将栈顶float型数值取负并将结果压入栈顶</td></tr><tr><td>0x77</td><td>dneg</td><td>将栈顶double型数值取负并将结果压入栈顶</td></tr><tr><td>0x78</td><td>ishl</td><td>将int型数值左移指定位数并将结果压入栈顶</td></tr><tr><td>0x79</td><td>lshl</td><td>将long型数值左移指定位数并将结果压入栈顶</td></tr><tr><td>0x7a</td><td>ishr</td><td>将int型数值右(带符号)移指定位数并将结果压入栈顶</td></tr><tr><td>0x7b</td><td>lshr</td><td>将long型数值右(带符号)移指定位数并将结果压入栈顶</td></tr><tr><td>0x7c</td><td>iushr</td><td>将int型数值右(无符号)移指定位数并将结果压入栈顶</td></tr><tr><td>0x7d</td><td>lushr</td><td>将long型数值右(无符号)移指定位数并将结果压入栈顶</td></tr><tr><td>0x7e</td><td>iand</td><td>将栈顶两int型数值&quot;按位与&quot;并将结果压入栈顶</td></tr><tr><td>0x7f</td><td>land</td><td>将栈顶两long型数值&quot;按位与&quot;并将结果压入栈顶</td></tr><tr><td>0x80</td><td>ior</td><td>将栈顶两int型数值&quot;按位或&quot;并将结果压入栈顶</td></tr><tr><td>0x81</td><td>lor</td><td>将栈顶两long型数值&quot;按位或&quot;并将结果压入栈顶</td></tr><tr><td>0x82</td><td>ixor</td><td>将栈顶两int型数值&quot;按位异或&quot;并将结果压入栈顶</td></tr><tr><td>0x83</td><td>lxor</td><td>将栈顶两long型数值&quot;按位异或&quot;并将结果压入栈顶</td></tr><tr><td>0x84</td><td>iinc</td><td>将指定int型变量增加指定值(如i++, i--, i+=2等)</td></tr><tr><td>0x85</td><td>i2l</td><td>将栈顶int型数值强制转换为long型数值并将结果压入栈顶</td></tr><tr><td>0x86</td><td>i2f</td><td>将栈顶int型数值强制转换为float型数值并将结果压入栈顶</td></tr><tr><td>0x87</td><td>i2d</td><td>将栈顶int型数值强制转换为double型数值并将结果压入栈顶</td></tr><tr><td>0x88</td><td>l2i</td><td>将栈顶long型数值强制转换为int型数值并将结果压入栈顶</td></tr><tr><td>0x89</td><td>l2f</td><td>将栈顶long型数值强制转换为float型数值并将结果压入栈顶</td></tr><tr><td>0x8a</td><td>l2d</td><td>将栈顶long型数值强制转换为double型数值并将结果压入栈顶</td></tr><tr><td>0x8b</td><td>f2i</td><td>将栈顶float型数值强制转换为int型数值并将结果压入栈顶</td></tr><tr><td>0x8c</td><td>f2l</td><td>将栈顶float型数值强制转换为long型数值并将结果压入栈顶</td></tr><tr><td>0x8d</td><td>f2d</td><td>将栈顶float型数值强制转换为double型数值并将结果压入栈顶</td></tr><tr><td>0x8e</td><td>d2i</td><td>将栈顶double型数值强制转换为int型数值并将结果压入栈顶</td></tr><tr><td>0x8f</td><td>d2l</td><td>将栈顶double型数值强制转换为long型数值并将结果压入栈顶</td></tr><tr><td>0x90</td><td>d2f</td><td>将栈顶double型数值强制转换为float型数值并将结果压入栈顶</td></tr><tr><td>0x91</td><td>i2b</td><td>将栈顶int型数值强制转换为byte型数值并将结果压入栈顶</td></tr><tr><td>0x92</td><td>i2c</td><td>将栈顶int型数值强制转换为char型数值并将结果压入栈顶</td></tr><tr><td>0x93</td><td>i2s</td><td>将栈顶int型数值强制转换为short型数值并将结果压入栈顶</td></tr><tr><td>0x94</td><td>lcmp</td><td>比较栈顶两long型数值大小, 并将结果(1, 0或-1)压入栈顶</td></tr><tr><td>0x95</td><td>fcmpl</td><td>比较栈顶两float型数值大小, 并将结果(1, 0或-1)压入栈顶; 当其中一个数值为<code>NaN</code>时, 将-1压入栈顶</td></tr><tr><td>0x96</td><td>fcmpg</td><td>比较栈顶两float型数值大小, 并将结果(1, 0或-1)压入栈顶; 当其中一个数值为<code>NaN</code>时, 将1压入栈顶</td></tr><tr><td>0x97</td><td>dcmpl</td><td>比较栈顶两double型数值大小, 并将结果(1, 0或-1)压入栈顶; 当其中一个数值为<code>NaN</code>时, 将-1压入栈顶</td></tr><tr><td>0x98</td><td>dcmpg</td><td>比较栈顶两double型数值大小, 并将结果(1, 0或-1)压入栈顶; 当其中一个数值为<code>NaN</code>时, 将1压入栈顶</td></tr><tr><td>0x99</td><td>ifeq</td><td>当栈顶int型数值等于0时跳转</td></tr><tr><td>0x9a</td><td>ifne</td><td>当栈顶int型数值不等于0时跳转</td></tr><tr><td>0x9b</td><td>iflt</td><td>当栈顶int型数值小于0时跳转</td></tr><tr><td>0x9c</td><td>ifge</td><td>当栈顶int型数值大于等于0时跳转</td></tr><tr><td>0x9d</td><td>ifgt</td><td>当栈顶int型数值大于0时跳转</td></tr><tr><td>0x9e</td><td>ifle</td><td>当栈顶int型数值小于等于0时跳转</td></tr><tr><td>0x9f</td><td>if_icmpeq</td><td>比较栈顶两int型数值大小, 当结果等于0时跳转</td></tr><tr><td>0xa0</td><td>if_icmpne</td><td>比较栈顶两int型数值大小, 当结果不等于0时跳转</td></tr><tr><td>0xa1</td><td>if_icmplt</td><td>比较栈顶两int型数值大小, 当结果小于0时跳转</td></tr><tr><td>0xa2</td><td>if_icmpge</td><td>比较栈顶两int型数值大小, 当结果大于等于0时跳转</td></tr><tr><td>0xa3</td><td>if_icmpgt</td><td>比较栈顶两int型数值大小, 当结果大于0时跳转</td></tr><tr><td>0xa4</td><td>if_icmple</td><td>比较栈顶两int型数值大小, 当结果小于等于0时跳转</td></tr><tr><td>0xa5</td><td>if_acmpeq</td><td>比较栈顶两引用型数值, 当结果相等时跳转</td></tr><tr><td>0xa6</td><td>if_acmpne</td><td>比较栈顶两引用型数值, 当结果不相等时跳转</td></tr><tr><td>0xa7</td><td>goto</td><td>无条件跳转</td></tr><tr><td>0xa8</td><td>jsr</td><td>跳转至指定的16位offset位置, 并将jsr的下一条指令地址压入栈顶</td></tr><tr><td>0xa9</td><td>ret</td><td>返回至本地变量指定的index的指令位置(一般与jsr或jsr_w联合使用)</td></tr><tr><td>0xaa</td><td>tableswitch</td><td>用于switch条件跳转, case值连续(可变长度指令)</td></tr><tr><td>0xab</td><td>lookupswitch</td><td>用于switch条件跳转, case值不连续(可变长度指令)</td></tr><tr><td>0xac</td><td>ireturn</td><td>从当前方法返回int</td></tr><tr><td>0xad</td><td>lreturn</td><td>从当前方法返回long</td></tr><tr><td>0xae</td><td>freturn</td><td>从当前方法返回float</td></tr><tr><td>0xaf</td><td>dreturn</td><td>从当前方法返回double</td></tr><tr><td>0xb0</td><td>areturn</td><td>从当前方法返回对象引用</td></tr><tr><td>0xb1</td><td>return</td><td>从当前方法返回void</td></tr><tr><td>0xb2</td><td>getstatic</td><td>获取指定类的静态域, 并将其压入栈顶</td></tr><tr><td>0xb3</td><td>putstatic</td><td>为指定类的静态域赋值</td></tr><tr><td>0xb4</td><td>getfield</td><td>获取指定类的实例域, 并将其压入栈顶</td></tr><tr><td>0xb5</td><td>putfield</td><td>为指定类的实例域赋值</td></tr><tr><td>0xb6</td><td>invokevirtual</td><td>调用实例方法</td></tr><tr><td>0xb7</td><td>invokespecial</td><td>调用超类构建方法, 实例初始化方法, 私有方法</td></tr><tr><td>0xb8</td><td>invokestatic</td><td>调用静态方法</td></tr><tr><td>0xb9</td><td>invokeinterface</td><td>调用接口方法</td></tr><tr><td>0xba</td><td>invokedynamic</td><td>调用动态方法</td></tr><tr><td>0xbb</td><td>new</td><td>创建一个对象, 并将其引用引用值压入栈顶</td></tr><tr><td>0xbc</td><td>newarray</td><td>创建一个指定的原始类型(如int, float, char等)的数组, 并将其引用值压入栈顶</td></tr><tr><td>0xbd</td><td>anewarray</td><td>创建一个引用型(如类, 接口, 数组)的数组, 并将其引用值压入栈顶</td></tr><tr><td>0xbe</td><td>arraylength</td><td>获取数组的长度值并压入栈顶</td></tr><tr><td>0xbf</td><td>athrow</td><td>将栈顶的异常抛出</td></tr><tr><td>0xc0</td><td>checkcast</td><td>检验类型转换, 检验未通过将抛出 ClassCastException</td></tr><tr><td>0xc1</td><td>instanceof</td><td>检验对象是否是指定类的实际, 如果是将1压入栈顶, 否则将0压入栈顶</td></tr><tr><td>0xc2</td><td>monitorenter</td><td>获得对象的锁, 用于同步方法或同步块</td></tr><tr><td>0xc3</td><td>monitorexit</td><td>释放对象的锁, 用于同步方法或同步块</td></tr><tr><td>0xc4</td><td>wide</td><td>扩展本地变量的宽度</td></tr><tr><td>0xc5</td><td>multianewarray</td><td>创建指定类型和指定维度的多维数组(执行该指令时, 操作栈中必须包含各维度的长度值), 并将其引用压入栈顶</td></tr><tr><td>0xc6</td><td>ifnull</td><td>为null时跳转</td></tr><tr><td>0xc7</td><td>ifnonnull</td><td>不为null时跳转</td></tr><tr><td>0xc8</td><td>goto_w</td><td>无条件跳转(宽索引)</td></tr><tr><td>0xc9</td><td>jsr_w</td><td>跳转至指定的32位offset位置, 并将jsr_w的下一条指令地址压入栈顶</td></tr></tbody></table>',62)],v={},b=(0,n(6262).A)(v,[["render",function(t,d){return(0,s.uX)(),(0,s.CE)("div",null,u)}]]),m=JSON.parse('{"path":"/study-notes/shangguigu-second/volatile/two.html","title":"Volatile不保证原子性","lang":"zh-CN","frontmatter":{"title":"Volatile不保证原子性","date":"2023-03-11T00:00:00.000Z","tags":["JUC","Volatile"],"category":["JUC"],"order":2,"description":"前言 通过前面对JMM的介绍，我们知道，各个线程对主内存中共享变量的操作都是各个线程各自拷贝到自己的工作内存进行操作后在写回到主内存中的。 这就可能存在一个线程AAA修改了共享变量X的值，但是还未写入主内存时，另外一个线程BBB又对主内存中同一共享变量X进行操作，但此时A线程工作内存中共享变量X对线程B来说是不可见，这种工作内存与主内存同步延迟现象就造...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/volatile/two.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Volatile不保证原子性"}],["meta",{"property":"og:description","content":"前言 通过前面对JMM的介绍，我们知道，各个线程对主内存中共享变量的操作都是各个线程各自拷贝到自己的工作内存进行操作后在写回到主内存中的。 这就可能存在一个线程AAA修改了共享变量X的值，但是还未写入主内存时，另外一个线程BBB又对主内存中同一共享变量X进行操作，但此时A线程工作内存中共享变量X对线程B来说是不可见，这种工作内存与主内存同步延迟现象就造..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"JUC"}],["meta",{"property":"article:tag","content":"Volatile"}],["meta",{"property":"article:published_time","content":"2023-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Volatile不保证原子性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"原子性","slug":"原子性","link":"#原子性","children":[]},{"level":2,"title":"代码测试","slug":"代码测试","link":"#代码测试","children":[]},{"level":2,"title":"为什么出现数值丢失","slug":"为什么出现数值丢失","link":"#为什么出现数值丢失","children":[]},{"level":2,"title":"如何解决","slug":"如何解决","link":"#如何解决","children":[]},{"level":2,"title":"其它解决方法","slug":"其它解决方法","link":"#其它解决方法","children":[]},{"level":2,"title":"字节码指令表","slug":"字节码指令表","link":"#字节码指令表","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":19.43,"words":5829},"filePathRelative":"study-notes/shangguigu-second/volatile/two.md","localizedDate":"2023年3月11日","excerpt":"<h2>前言</h2>\\n<p>通过前面对JMM的介绍，我们知道，各个线程对主内存中共享变量的操作都是各个线程各自拷贝到自己的工作内存进行操作后在写回到主内存中的。</p>\\n<p>这就可能存在一个线程AAA修改了共享变量X的值，但是还未写入主内存时，另外一个线程BBB又对主内存中同一共享变量X进行操作，但此时A线程工作内存中共享变量X对线程B来说是不可见，这种工作内存与主内存同步延迟现象就造成了可见性问题。</p>\\n<h2>原子性</h2>\\n<p>不可分割，完整性，也就是说某个线程正在做某个具体业务时，中间不可以被加塞或者被分割，需要具体完成，要么同时成功，要么同时失败。</p>\\n<p>数据库也经常提到事务具备原子性</p>","autoDesc":true}')}}]);