"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[1821],{6262:(i,e)=>{e.A=(i,e)=>{const a=i.__vccOpts||i;for(const[i,t]of e)a[i]=t;return a}},9308:(i,e,a)=>{a.r(e),a.d(e,{comp:()=>C,data:()=>u});var t=a(641);const s=a.p+"assets/img/image-20200326162329550.94ef2ec2.png",l=a.p+"assets/img/image-20200326162803165.2ee73559.png",p=a.p+"assets/img/image-20200326164521263.9deecbc6.png",g=a.p+"assets/img/img-20230306164521263.3b28379b.png",n=a.p+"assets/img/image-20200326170318733.a6ddc7e0.png",h=a.p+"assets/img/image-20200326170522559.8ff5f5d7.png",o=a.p+"assets/img/image-20200326171559406.9c4cae43.png",d=a.p+"assets/img/image-20200326173656164.dcda66bd.png",r=a.p+"assets/img/imge-202303061732.0a7bbb0d.png",c=a.p+"assets/img/image-20200326174107444.b60883e5.png",f=[(0,t.Fv)('<h2 id="命令集合" tabindex="-1"><a class="header-anchor" href="#命令集合"><span>命令集合</span></a></h2><p>1、整机系统性能：top 查看,（ %CPU、%MEM 、load average）,按1查看不同CPU。看id，空闲率</p><p>2、内存: free -m</p><p>3、硬盘: df -h</p><p>4、CPU ： vmstat -n 2 3</p><p>5、 磁盘io：iostat -xdk 2 3 看：r/s w/s,每秒的读写速率，判断sql调优否。</p><p>6、 其他命令：chmod、ifconfig、</p><h3 id="整机-top-查看整机系统性能" tabindex="-1"><a class="header-anchor" href="#整机-top-查看整机系统性能"><span>整机：top，查看整机系统性能</span></a></h3><figure><img src="'+s+'" alt="image-20200326162329550" tabindex="0" loading="lazy"><figcaption>image-20200326162329550</figcaption></figure><p>使用top命令的话，重点关注的是 %CPU、%MEM 、load average 三个指标</p><ul><li>load average三个指标：分别代表1、5、15分钟的<code>负载情况</code>,如果平均值都大于0.6，说明负载很高</li></ul><p><code>在这个命令下，按1的话，可以看到每个CPU的占用情况</code></p><p>uptime：系统性能命令的精简版</p><h3 id="cpu-vmstat" tabindex="-1"><a class="header-anchor" href="#cpu-vmstat"><span>CPU：vmstat</span></a></h3><ul><li>查看CPU（包含但是不限于）</li><li>查看额外 <ul><li>查看所有CPU核信息：mpstat -p ALL 2</li><li>每个进程使用CPU的用量分解信息：pidstat -u 1 -p 进程编号</li></ul></li></ul><p>命令格式：<code>vmstat -n 2 3</code></p><figure><img src="'+l+'" alt="image-20200326162803165" tabindex="0" loading="lazy"><figcaption>image-20200326162803165</figcaption></figure><p>一般vmstat工具的使用是通过两个数字参数来完成的，第一个参数是采样的时间间隔数（单位秒），第二个参数是采样的次数</p><ul><li><code>procs</code></li></ul><p>r：运行和等待的CPU时间片的进程数，原则上1核的CPU的运行队列不要超过2，整个系统的运行队列不超过总核数的2倍，否则代表系统压力过大，我们看蘑菇博客测试服务器，能发现都超过了2，说明现在压力过大</p><p>b：等待资源的进程数，比如正在等待磁盘I/O、网络I/O等</p><ul><li><p><code>cpu</code></p><p>us：用户进程消耗CPU时间百分比，us值高，用户进程消耗CPU时间多，如果长期大于50%，优化程序</p><p>sy：内核进程消耗的CPU时间百分比</p></li></ul><p><img src="'+p+'" alt="image-20200326164521263" loading="lazy"><img src="'+g+'" alt="img.png" loading="lazy"></p><p>us + sy 参考值为80%，如果us + sy 大于80%，说明可能存在CPU不足，从上面的图片可以看出，us + sy还没有超过百分80，因此说明蘑菇博客的CPU消耗不是很高</p><p>id：处于空闲的CPU百分比</p><p>wa：系统等待IO的CPU时间百分比</p><p>st：来自于一个虚拟机偷取的CPU时间比</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pidstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [id]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内存-free" tabindex="-1"><a class="header-anchor" href="#内存-free"><span>内存：free</span></a></h3><ul><li><p>应用程序可用内存数：free -m</p></li><li><p>应用程序可用内存/系统物理内存 &gt; 70% 内存充足</p></li><li><p>应用程序可用内存/系统物理内存 &lt; 20% 内存不足，需要增加内存</p></li><li><p>20% &lt; 应用程序可用内存/系统物理内存 &lt; 70%，表示内存基本够用</p></li></ul><p>free -h：以人类能看懂的方式查看物理内存</p><figure><img src="data:image/png;base64,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" alt="image-20200326170217637" tabindex="0" loading="lazy"><figcaption>image-20200326170217637</figcaption></figure><p>free -m：以MB为单位，查看物理内存</p><figure><img src="data:image/png;base64,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" alt="image-20200326165815071" tabindex="0" loading="lazy"><figcaption>image-20200326165815071</figcaption></figure><p>free -g：以GB为单位，查看物理内存</p><h3 id="硬盘-df" tabindex="-1"><a class="header-anchor" href="#硬盘-df"><span>硬盘：df</span></a></h3><p>格式：<code>df -h /</code> (-h：human，表示以人类能看到的方式换算)</p><figure><img src="'+n+'" alt="image-20200326170318733" tabindex="0" loading="lazy"><figcaption>image-20200326170318733</figcaption></figure><ul><li>硬盘IO：iostat</li></ul><p>系统慢有两种原因引起的，一个是CPU高，一个是大量IO操作</p><p>格式：<code>iostat -xdk 2 3</code></p><figure><img src="'+h+'" alt="image-20200326170522559" tabindex="0" loading="lazy"><figcaption>image-20200326170522559</figcaption></figure><p>磁盘块设备分布：</p><p>rkB /s：每秒读取数据量kB；</p><p>wkB/s：每秒写入数据量kB；</p><p>svctm I/O：请求的平均服务时间，单位毫秒</p><p>await I/O：请求的平均等待时间，单位毫秒，值越小，性能越好</p><p><code>util：一秒钟有百分几的时间用于I/O操作。接近100%时，表示磁盘带宽跑满，需要优化程序或者增加磁盘；</code></p><p>rkB/s，wkB/s根据系统应用不同会有不同的值，但有规律遵循：长期、超大数据读写，肯定不正常，需要优化程序读取。</p><p>svctm的值与await的值很接近，表示几乎没有I/O等待，磁盘性能好，如果await的值远高于svctm的值，则表示I/O队列等待太长，需要优化程序或更换更快磁盘</p><h3 id="网络io-ifstat" tabindex="-1"><a class="header-anchor" href="#网络io-ifstat"><span>网络IO：ifstat</span></a></h3><ul><li>默认本地没有，下载ifstat</li></ul><figure><img src="'+o+'" alt="image-20200326171559406" tabindex="0" loading="lazy"><figcaption>image-20200326171559406</figcaption></figure><h2 id="生产环境服务器变慢-诊断思路和性能评估" tabindex="-1"><a class="header-anchor" href="#生产环境服务器变慢-诊断思路和性能评估"><span>生产环境服务器变慢，诊断思路和性能评估</span></a></h2><p><code>记一次印象深刻的故障？</code></p><p>结合Linux 和 JDK命令一起分析，步骤如下</p><ul><li><p>1、使用top命令找出CPU占比最高的</p></li><li><p>2、ps -ef 或者 jps -l 进一步定位，得知是一个怎么样的后台程序出的问题</p></li><li><p>3、<code>定位到具体线程或者代码</code></p><ul><li>ps -mp 【进程编号】 -o THREAD,tid,time</li><li>例如： ps -mp 2597733 -o THREAD,tid,time</li><li>参数解释 <ul><li>-m：显示所有的线程</li><li>-p：pid进程使用CPU的时间</li><li>-o：该参数后是用户自定义格式</li></ul></li></ul><figure><img src="'+d+'" alt="image-20200326173656164" tabindex="0" loading="lazy"><figcaption>image-20200326173656164</figcaption></figure></li><li><p>4、将需要的<code>线程ID</code>转换为16进制格式（英文小写格式），16进制可以用电脑计算器换算。</p></li><li><figure><img src="'+r+'" alt="img.png" tabindex="0" loading="lazy"><figcaption>img.png</figcaption></figure><ul><li>printf “%x\\n” 有问题的线程ID</li></ul></li><li><p>5、jstack 【进程ID】 | grep 【tid（16进制线程ID小写英文）】 -A60</p><p>精准定位到错误的地方，代码行数。</p></li></ul><figure><img src="'+c+'" alt="image-20200326174107444" tabindex="0" loading="lazy"><figcaption>image-20200326174107444</figcaption></figure><h2 id="java-自带工具的使用" tabindex="-1"><a class="header-anchor" href="#java-自带工具的使用"><span>java 自带工具的使用</span></a></h2><blockquote><p>对于JDK自带的JVM监控和性能分析工具的使用。</p></blockquote><p>可参考别的同学的笔记：https://www.yuque.com/u21195183/jvm/pgrt7e 或者JVM笔记的学习。</p>',61)],m={},C=(0,a(6262).A)(m,[["render",function(i,e){return(0,t.uX)(),(0,t.CE)("div",null,f)}]]),u=JSON.parse('{"path":"/study-notes/shangguigu-second/Linux/","title":"Linux诊断原因","lang":"zh-CN","frontmatter":{"title":"Linux诊断原因","date":"2023-03-11T00:00:00.000Z","tags":["Linux诊断原因"],"category":["JUC"],"description":"命令集合 1、整机系统性能：top 查看,（ %CPU、%MEM 、load average）,按1查看不同CPU。看id，空闲率 2、内存: free -m 3、硬盘: df -h 4、CPU ： vmstat -n 2 3 5、 磁盘io：iostat -xdk 2 3 看：r/s w/s,每秒的读写速率，判断sql调优否。 6、 其他命令：chm...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/shangguigu-second/Linux/"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"Linux诊断原因"}],["meta",{"property":"og:description","content":"命令集合 1、整机系统性能：top 查看,（ %CPU、%MEM 、load average）,按1查看不同CPU。看id，空闲率 2、内存: free -m 3、硬盘: df -h 4、CPU ： vmstat -n 2 3 5、 磁盘io：iostat -xdk 2 3 看：r/s w/s,每秒的读写速率，判断sql调优否。 6、 其他命令：chm..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-27T14:05:04.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:tag","content":"Linux诊断原因"}],["meta",{"property":"article:published_time","content":"2023-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-27T14:05:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux诊断原因\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-27T14:05:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"命令集合","slug":"命令集合","link":"#命令集合","children":[{"level":3,"title":"整机：top，查看整机系统性能","slug":"整机-top-查看整机系统性能","link":"#整机-top-查看整机系统性能","children":[]},{"level":3,"title":"CPU：vmstat","slug":"cpu-vmstat","link":"#cpu-vmstat","children":[]},{"level":3,"title":"内存：free","slug":"内存-free","link":"#内存-free","children":[]},{"level":3,"title":"硬盘：df","slug":"硬盘-df","link":"#硬盘-df","children":[]},{"level":3,"title":"网络IO：ifstat","slug":"网络io-ifstat","link":"#网络io-ifstat","children":[]}]},{"level":2,"title":"生产环境服务器变慢，诊断思路和性能评估","slug":"生产环境服务器变慢-诊断思路和性能评估","link":"#生产环境服务器变慢-诊断思路和性能评估","children":[]},{"level":2,"title":"java 自带工具的使用","slug":"java-自带工具的使用","link":"#java-自带工具的使用","children":[]}],"git":{"createdTime":1722089104000,"updatedTime":1722089104000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":1}]},"readingTime":{"minutes":4.32,"words":1297},"filePathRelative":"study-notes/shangguigu-second/Linux/README.md","localizedDate":"2023年3月11日","excerpt":"<h2>命令集合</h2>\\n<p>1、整机系统性能：top  查看,（ %CPU、%MEM 、load average）,按1查看不同CPU。看id，空闲率</p>\\n<p>2、内存: free  -m</p>\\n<p>3、硬盘: df -h</p>\\n<p>4、CPU ： vmstat -n 2 3</p>\\n<p>5、 磁盘io：iostat -xdk 2 3  看：r/s  w/s,每秒的读写速率，判断sql调优否。</p>\\n<p>6、 其他命令：chmod、ifconfig、</p>\\n<h3>整机：top，查看整机系统性能</h3>\\n<figure><figcaption>image-20200326162329550</figcaption></figure>","autoDesc":true}')}}]);