"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[7725],{66262:(l,i)=>{i.A=(l,i)=>{const e=l.__vccOpts||l;for(const[l,n]of i)e[l]=n;return e}},48318:(l,i,e)=>{e.r(i),e.d(i,{comp:()=>J,data:()=>P});var n=e(20641);const a=e.p+"assets/img/img.bf154cb3.png",t=e.p+"assets/img/img_5.5ccd960c.png",o=e.p+"assets/img/img_6.f441ff1b.png",s=e.p+"assets/img/img_7.93862d52.png",g=e.p+"assets/img/img_1.e91a01f1.png",d=e.p+"assets/img/img_2.0160f957.png",r=e.p+"assets/img/img_3.ebacedee.png",p=e.p+"assets/img/img_4.d69d97bc.png",c=e.p+"assets/img/img_8.25311413.png",h=e.p+"assets/img/img_9.4c557723.png",u=e.p+"assets/img/img_10.43fa2f8c.png",m=e.p+"assets/img/img_11.97b8e5fb.png",_=e.p+"assets/img/img_12.d6064f81.png",f=e.p+"assets/img/img_13.db44b27c.png",k=e.p+"assets/img/img_14.a3325c11.png",b=e.p+"assets/img/img_15.b27f7f77.png",y=e.p+"assets/img/img_16.1b5f5cbc.png",L=e.p+"assets/img/img_17.6bbe43c0.png",v=e.p+"assets/img/img_18.70a1c576.png",x=e.p+"assets/img/img_19.a25f67ae.png",q=e.p+"assets/img/img_20.0dc882dc.png",S=e.p+"assets/img/img_21.e374f2e6.png",M=e.p+"assets/img/img_22.1a59863e.png",Q=e.p+"assets/img/img_23.238de5e2.png",z=e.p+"assets/img/img_24.c028ff99.png",A=e.p+"assets/img/img_25.131c0461.png",C=e.p+"assets/img/img_26.95899375.png",E=e.p+"assets/img/img_27.aef1e053.png",B=(0,n.Fv)('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>视频来源：<a href="https://www.bilibili.com/video/BV1yT411H7YK/?vd_source=7138dfc78c49f602f8d3ed8cfbf0513d" target="_blank" rel="noopener noreferrer">新版Java面试专题视频教程，java八股文面试全套真题+深度详解（含大厂高频面试真题）</a></p></div><h2 id="总体介绍" tabindex="-1"><a class="header-anchor" href="#总体介绍"><span>总体介绍：</span></a></h2><figure><img src="'+a+'" alt="总体介绍" tabindex="0" loading="lazy"><figcaption>总体介绍</figcaption></figure><h2 id="一、优化" tabindex="-1"><a class="header-anchor" href="#一、优化"><span>一、优化</span></a></h2><h3 id="_1、如何定位慢查询" tabindex="-1"><a class="header-anchor" href="#_1、如何定位慢查询"><span>1、如何定位慢查询</span></a></h3><p>（页面加载过慢，接口压力测试时间过长，超过1s）</p><ol><li>通过开源工具</li></ol><ul><li>调试工具：Arthas</li><li>运维工具：Skywalking</li></ul><ol start="2"><li>MySQL自带慢日志.【调试阶段】 在<code>/etc/my.cnf</code>中配置,若产生日志可在<code>/var/lib/mysql/localhost-slow.log</code>查看。</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#开肩MYSQL漫日志查询开关</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">slow_query_log</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 设置漫日志的时阿为2秒，SQL语句执行时阿超过2秒，就会视为慢查询，记录慢查询日志</span></span>\n<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">long_query_time</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志例子： <img src="'+t+'" alt="img_5.png" loading="lazy"></p><h3 id="_2、sql语句执行很慢-如何分析-优化" tabindex="-1"><a class="header-anchor" href="#_2、sql语句执行很慢-如何分析-优化"><span>2、SQL语句执行很慢，如何分析（优化）</span></a></h3><ul><li>聚合查询</li><li>多表查询</li><li>表数据量过大</li><li>深度分页查询</li></ul><p>前三个可以通过SQL执行计划（找到慢的原因）。</p><p>mysql自带的执行计划explain来去查看这条sql的执行情况。具体执行计划操作如下：</p><ol><li>explain执行计划操作</li></ol><figure><img src="'+o+'" alt="img_6.png" tabindex="0" loading="lazy"><figcaption>img_6.png</figcaption></figure><ol start="2"><li>explain执行计划分析 <img src="'+s+'" alt="img_7.png" loading="lazy"></li></ol><ul><li><p>possible key 当前sql可能会使用到的索引</p></li><li><p>key 当前sql实际命中的索引</p></li><li><p>key_len 索引占用的大小</p></li></ul><blockquote><p>通过它们两个查看是否可能会命中索引</p></blockquote><ul><li>Extra 额外的优化建议</li></ul>',21),F=(0,n.Lk)("tbody",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Using where; Using Index"),(0,n.Lk)("td",null,"查找使用了索引，需要的数据都在索引列中能找到，不需要回表查询数据")]),(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Using index condition"),(0,n.Lk)("td",null,"查找使用了索引，但是需要回表查询数据")])],-1),R=(0,n.Fv)('<ul><li><strong>type</strong> 这条sql的连接的类型，性能由好到差为NULL、system、<strong>const</strong>、eq ref、ref、range、 index、all <ul><li>system:查询系统中的表</li><li>const:根据主键查询</li><li><code>eq_ref:主键索引查询或唯一索引查询ref:索引查询</code></li><li><code>range:范围查询</code></li><li>index:索引树扫描 【需要优化】</li><li>all:全盘扫描 【需要优化】</li></ul></li></ul><p>最后回答： 可以采用MySQL自带的分析工具 EXPLAIN</p><ul><li>通过key和key_len检查是否命中了索(索引本身存在是否有失效的情况)</li><li>通过type字段查看sql是否有进一步的优化空间，是否存在全索引扫描或全盘扫描</li><li>通过extra建议判断，是否出现了回表的情况，如果出现了，可以尝试添加索引或修改返回字段来修复</li></ul><h3 id="_3、了解过索引吗-什么是索引" tabindex="-1"><a class="header-anchor" href="#_3、了解过索引吗-什么是索引"><span>3、了解过索引吗（什么是索引）？</span></a></h3><ol><li>索引（Index）是帮助MySQL<code>高效获取数据</code>的数据结构（有序）</li><li>提高数据检索的效率，降低数据库的IO成本（不需要全表扫描）</li><li>通过索引列对数据进行排序，降低数据排序的成本，也能降低了CPU的消耗</li></ol><h3 id="_4、索引的底层数据结构了解过吗-【扩展-其他索引】" tabindex="-1"><a class="header-anchor" href="#_4、索引的底层数据结构了解过吗-【扩展-其他索引】"><span>4、索引的底层数据结构了解过吗？ 【扩展：其他索引】</span></a></h3><p>MySQL的默认的存储引擎InnoDB采用的B+树的数据结构来存储索引，选择B+树的主要的原因是：</p><ol><li>第一阶数更多，路径更短</li><li>磁盘读写代价B+树更低，非叶子节点只存储指针，叶子阶段存储数据</li><li>B+树便于扫库和区间查询，叶子节点是一个双向链表</li></ol><h3 id="_5、b树-和-b-树的区别是什么呢" tabindex="-1"><a class="header-anchor" href="#_5、b树-和-b-树的区别是什么呢"><span>5、B树 和 B+树的区别是什么呢？</span></a></h3><ol><li>在B树中，非叶子节点和叶子节点都会存放数据，而B+树的所有的数据都会出现在叶子节点，在查询的时候，B+树查找效率更加稳定</li><li>在进行范围查询的时候，B+树效率更高，因为B+树都在叶子节点存储，并且叶子节点是一个双向链表</li></ol><h3 id="_6、什么是聚簇-聚集-索引-什么是非聚簇索引-二级索引" tabindex="-1"><a class="header-anchor" href="#_6、什么是聚簇-聚集-索引-什么是非聚簇索引-二级索引"><span>6、什么是聚簇（聚集）索引，什么是非聚簇索引（二级索引）？</span></a></h3><ul><li>聚簇索引主要是指数据与索引放到一块，B+树的叶子节点保存了整行数据，有且只有一个，一般情况下主键在作为聚簇索引的</li><li>非聚簇索引值的是数据与索引分开存储，B+树的叶子节点保存对应的主键，可以有多个，一般我们自己定义的索引都是非聚簇索引</li></ul>',12),w=(0,n.Lk)("tbody",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"聚集索引 (Clustered Index) 【聚簇索引】"),(0,n.Lk)("td",null,"将数据存储与索引放到了一块，索引结构的叶子节点保存了行数据"),(0,n.Lk)("td",null,"必须有 , 而且只有一个")]),(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"二级索引 (Secondary Index) 【非聚簇索引】"),(0,n.Lk)("td",null,"将数据与索引分开存储，索引结构的叶子节点关联的是对应的主键"),(0,n.Lk)("td",null,"可以存在多个")])],-1),D=(0,n.Fv)('<h3 id="_7、什么是回表查询" tabindex="-1"><a class="header-anchor" href="#_7、什么是回表查询"><span>7、什么是回表查询</span></a></h3><p>回表的意思就是通过二级索引找到对应的主键值，然后再通过主键值找到聚集索引中所对应的整行数据，这个过程就是回表</p><h3 id="_8、什么叫覆盖索引" tabindex="-1"><a class="header-anchor" href="#_8、什么叫覆盖索引"><span>8、什么叫覆盖索引？</span></a></h3><p>覆盖索引是指查询使用了索引，返回的列，必须在索引中全部能够找到</p><p> 使用 id 查询，直接走聚集索引查询，一次索引扫描，直接返回数据，性能高。  如果返回的列中没有创建索引，有可能会触发回表查询，尽量避免使用 select *</p><p>如果我们使用id查询，它会直接走聚集索引查询，一次索引扫描，直接返回数据，性能高。</p><figure><img src="'+g+'" alt="img_1.png" tabindex="0" loading="lazy"><figcaption>img_1.png</figcaption></figure><h3 id="_9、-mysql超大分页怎么处理" tabindex="-1"><a class="header-anchor" href="#_9、-mysql超大分页怎么处理"><span>9、 MYSQL超大分页怎么处理 ?</span></a></h3><ol><li>问题，什么是超大分页？</li></ol><blockquote><p>超大分页一般都是在<strong>数据量比较大时</strong>，我们使用了limit分页查询，并且需要对数据进行排序，这个时候效率就很低，我们可以采用<strong>覆盖索引</strong>和<strong>子查询</strong>来解决</p></blockquote><figure><img src="'+d+'" alt="img_2.png" tabindex="0" loading="lazy"><figcaption>img_2.png</figcaption></figure><ol start="2"><li>处理：</li></ol><blockquote><p>先分页查询数据的id字段，确定了id之后，再用子查询来过滤，只查询这个id列表中的数据就可以了。因为查询id的时候，走的覆盖索引，所以效率可以提升很多 <img src="'+r+'" alt="img_3.png" loading="lazy"></p></blockquote><h3 id="_9、-索引创建的原则有哪些" tabindex="-1"><a class="header-anchor" href="#_9、-索引创建的原则有哪些"><span>9、 索引创建的原则有哪些 ?</span></a></h3><figure><img src="'+p+'" alt="img_4.png" tabindex="0" loading="lazy"><figcaption>img_4.png</figcaption></figure><ol><li><strong>数据量较大，且查询比较频繁的表</strong></li><li><strong>常作为查询条件、排序、分组的字段</strong></li><li>字段内容区分度高</li><li>内容较长，使用前缀索引</li><li><strong>尽量联合索引</strong></li><li><strong>要控制索引的数量</strong></li><li>如果索引列不能存储NULL值，请在创建表时使用NOT NULL约束它</li></ol><h3 id="_10、-什么情况下索引会失效-【结合实际情况】" tabindex="-1"><a class="header-anchor" href="#_10、-什么情况下索引会失效-【结合实际情况】"><span>10、 什么情况下索引会失效 ? 【结合实际情况】</span></a></h3><p>可以通过执行计划分析。</p><ol><li>违反最左前缀法则 <img src="'+c+'" alt="img_8.png" loading="lazy"><img src="'+h+'" alt="img_9.png" loading="lazy"></li><li>范围查询右边的列，不能使用索引 <img src="'+u+'" alt="img_10.png" loading="lazy"></li><li>不要在索引列上进行运算操作，索引将时效。 <img src="'+m+'" alt="img_11.png" loading="lazy"></li><li>字符串不加单引号，可能造成索引失效。【类型转换】 <img src="'+_+'" alt="img_12.png" loading="lazy"></li><li>以<code>%</code>号开头的<code>like</code>模糊查询，会导致索引失效 <img src="'+f+'" alt="img_13.png" loading="lazy"></li></ol><p>最终答案（精简一点）：</p><ol><li>违反最左前缀法则</li><li>范围查询右边的列，不能使用索引</li><li>不要在索引列上进行运算操作，索引将失效</li><li>字符串不加单引号，造成索引失效。(类型转换)</li><li>以<code>%</code>号开头的<code>like</code>模糊查询，会导致索引失效</li></ol><h3 id="_11、-谈一谈你对sql优化的经验" tabindex="-1"><a class="header-anchor" href="#_11、-谈一谈你对sql优化的经验"><span>11、 谈一谈你对SQL优化的经验</span></a></h3><p>5点：</p>',23),T=(0,n.Lk)("li",null,[(0,n.Lk)("p",null,"表的设计优化")],-1),j=(0,n.Fv)("<li><p>SQL语句优化</p></li><li><p>主从复制，读写分离</p></li><li><p>分库分表 （后面将）</p></li><li><p><strong>表的设计优化(参考阿里开发手册《嵩山版》)</strong> （1）比如设置合适的数值 (<code>tinyint</code> <code>int</code> <code>bigint</code>)，要根据实际情况选择 （2）比如设置合适的字符串类型 (<code>char</code>和<code>varchar</code>) <code>char</code>定长效率高，<code>varchar</code>可变长度，效率稍低</p></li><li><p><strong>SQL语句优化</strong> （1）SELECT语句务必指明字段名称 (避免直接使用select * ) （2）SQL语句要避免造成索引失效的写法 （3）尽量用<code>union all</code>代替<code>union</code>, <code>union</code>会多一次过滤，效率低.[将重复的数据过滤掉] （4）避免在where子句中对字段进行表达式操作 （5）Join优化 能用<code>inner join</code> 就不用<code>left join</code>、<code>right join</code>，如必须使用,一定要<code>以小表为驱动</code>。内连接会对两个表进行优化，优先把小表放到外边，把大表放到里边。<code>left join</code> 或 <code>right join</code>，不会重新调整顺序</p></li><li><p><strong>主从复制，读写分离</strong></p></li>",6),I=(0,n.Fv)('<h2 id="二、事务" tabindex="-1"><a class="header-anchor" href="#二、事务"><span>二、事务</span></a></h2><h3 id="_12、-事务的特性是什么-可以详细说一下吗" tabindex="-1"><a class="header-anchor" href="#_12、-事务的特性是什么-可以详细说一下吗"><span>12、 事务的特性是什么？可以详细说一下吗？</span></a></h3><p>事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么<strong>同时成功，要么同时失败</strong>。</p><ol><li>ACID是什么？可以详细说一下吗？</li></ol><ul><li>原子性(Atomicity): 事务是不可分割的最小操作单元，要么全部成功，要么全部失败</li><li>一致性(Consistency): 事务完成时，必须使所有的数据都保持一致状态。</li><li>隔离性(lsolation): 数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行</li><li>持久性(Durability): 事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。</li></ul><h3 id="_13、并发事务带来哪些问题-怎么解决这些问题-mysql的默认隔离级别是" tabindex="-1"><a class="header-anchor" href="#_13、并发事务带来哪些问题-怎么解决这些问题-mysql的默认隔离级别是"><span>13、并发事务带来哪些问题？怎么解决这些问题？MySQL的默认隔离级别是？</span></a></h3><ol><li>并发事务问题</li></ol>',7),W=(0,n.Lk)("td",null,"一个事务读到另外一个事务还没有提交的数据。",-1),N=(0,n.Lk)("td",null,"一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读",-1),V=(0,n.Lk)("td",null,"一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”。",-1),O=(0,n.Fv)('<ol start="2"><li>怎么解决并发事务问题呢？</li></ol><p>解决方案：对事物进行隔离。</p><figure><img src="'+k+'" alt="img_14.png" tabindex="0" loading="lazy"><figcaption>img_14.png</figcaption></figure><p>总结：</p><p>并发事务带来哪些问题？怎么解决这些问题？MySQL的默认隔离级别是？</p><ol><li><strong>并发事务的问题</strong>:</li></ol><ul><li>脏读:一个事务读到另外一个事务还没有提交的数据</li><li>不可重复读:一个事务先后读取同一条记录，但两次读取的数据不同</li><li>幻读:一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经3存在，好像出现了”幻影”。</li></ul><ol start="2"><li><strong>隔离级别</strong>:</li></ol><ul><li>READ UNCOMMITTED 未提交读。【不能解决 脏读、不可重复读、幻读】</li><li>READ COMMITTED 读已提交。 【不能解决 不可重复读、幻读】</li><li>REPEATABLE READ 可重复读。 【不能解决 幻读 <strong>【默认隔离级别】</strong>】</li><li>SERIALIZABLE 串行化。 【都能解决】</li></ul><h3 id="_14、undo-log-和-redo-log-的区别" tabindex="-1"><a class="header-anchor" href="#_14、undo-log-和-redo-log-的区别"><span>14、<code>undo log</code> 和 <code>redo log</code> 的区别？</span></a></h3><p>前提概念：</p><figure><img src="'+b+'" alt="img_15.png" tabindex="0" loading="lazy"><figcaption>img_15.png</figcaption></figure><ol><li><code>redo log</code></li></ol><figure><img src="'+y+'" alt="img_16.png" tabindex="0" loading="lazy"><figcaption>img_16.png</figcaption></figure><ol start="2"><li><code>undo log</code><img src="'+L+'" alt="img_17.png" loading="lazy"></li></ol><p>总结：</p><p><code>undo log</code> 和 <code>redo log</code> 的区别？</p><ul><li><code>redo log</code>：记录的是数据页的物理变化，服务宕机可用来同步数据。</li><li><code>undo log</code>：记录的是逻辑日志，当事务回滚时，通过逆操作恢复原来的数据</li><li><code>redo log</code>：保证了事务的持久性，<code>undo log</code>保证了事务的原子性和一致性</li></ul><h3 id="_15、事务中的隔离性如何保证的" tabindex="-1"><a class="header-anchor" href="#_15、事务中的隔离性如何保证的"><span>15、事务中的隔离性如何保证的？</span></a></h3><p>锁：排他锁(如一个事务获取了一个数据行的排他锁，其他事务就不能再获取该行的其他锁)。 MVCC：多版本并发控制。</p><ol><li>解释一下 MVCC</li></ol><figure><img src="'+v+'" alt="img_18.png" tabindex="0" loading="lazy"><figcaption>img_18.png</figcaption></figure><ol start="2"><li>MVCC 实现原理</li></ol><ul><li>隐藏字段：</li></ul><figure><img src="'+x+'" alt="img_19.png" tabindex="0" loading="lazy"><figcaption>img_19.png</figcaption></figure><ul><li><code>undo log</code></li></ul><p>回滚日志，在insert、update、delete的时候产生的便于数据回滚的日志。 当insert的时候，产生的undo log日志只在回滚时需要，在事务提交后，可被立即删除。 而update、delete的时候，产生的undo log日志不仅在回滚时需要，mvcc版本访问也需要，不会立即被删除.</p><ul><li><code>undo log</code>版本链</li></ul><figure><img src="'+q+'" alt="img_20.png" tabindex="0" loading="lazy"><figcaption>img_20.png</figcaption></figure><ul><li>readview</li></ul><figure><img src="'+S+'" alt="img_21.png" tabindex="0" loading="lazy"><figcaption>img_21.png</figcaption></figure><figure><img src="'+M+'" alt="img_22.png" tabindex="0" loading="lazy"><figcaption>img_22.png</figcaption></figure><figure><img src="'+Q+'" alt="img_23.png" tabindex="0" loading="lazy"><figcaption>img_23.png</figcaption></figure><figure><img src="'+z+'" alt="img_24.png" tabindex="0" loading="lazy"><figcaption>img_24.png</figcaption></figure><figure><img src="'+A+'" alt="img_25.png" tabindex="0" loading="lazy"><figcaption>img_25.png</figcaption></figure><p>总结：</p><p>事务中的隔离性如何保证的？（你解释一下MVCC）</p><p>MySQL中的多版本并发控制。指维护一个数据的多个版本，使得读写操作没有冲突。</p><ul><li><p><strong>隐藏字段</strong>: ① <code>trx_id</code>(事务id)，记录每一次操作的事务id，是自增的 ② <code>roll_pointer</code>(回滚指针)，指向上一个版本的事务版本记录地址</p></li><li><p><strong><code>undo log</code></strong>: ① 回滚日志，存储老版本数据 ② 版本链:多个事务并行操作某一行记录，记录不同事务修改数据的版本，通过roll pointer指针形成一个链表</p></li><li><p><strong><code>readView</code></strong> 解决的是一个事务查询选择版本的问题 ① 根据readView的匹配规则和当前的一些事务id判断该访问那个版本的数据 ② 不同的隔离级别快照读是不一样的，最终的访问的结果不一样</p></li></ul><blockquote><p>RC:每一次执行快照读时生成ReadView RR:仅在事务中第一次执行快照读时生成ReadView，后续复用</p></blockquote><h2 id="三、主从同步" tabindex="-1"><a class="header-anchor" href="#三、主从同步"><span>三、主从同步</span></a></h2><h3 id="_16、mysql主从同步原理" tabindex="-1"><a class="header-anchor" href="#_16、mysql主从同步原理"><span>16、MySQL主从同步原理？</span></a></h3><p>主从复制： <img src="'+C+'" alt="img_26.png" loading="lazy"></p><p>从同步原理：</p><p>MySQL主从复制的核心就是二进制日志</p><blockquote><p>进制志(BINLOG)记录了所有的 DDL(数据定义语言)语和 DML(数操纵语言)语，但不包括数据查询SELECT、SHOW)语。</p></blockquote><figure><img src="'+E+'" alt="img_27.png" tabindex="0" loading="lazy"><figcaption>img_27.png</figcaption></figure><p>总结：</p><p>主从同步原理：</p><p>MySQL主从复制的核心就是二进制日志binlog(DDL(数据定义语言)语和 DML(数据操纵语言)语句) ① 主库在事务提交时，会把数据变更记录在二进制日志文件 Binlog 中。 ② 从库读取主库的二进制日志文件 Binlog，写入到从库的中继日志 <code>Relay Log</code>。 ③ 从库重做中继日志中的事件，将改变反映它自己的数据</p><h2 id="四、分库分表" tabindex="-1"><a class="header-anchor" href="#四、分库分表"><span>四、分库分表</span></a></h2><h3 id="拆分策略" tabindex="-1"><a class="header-anchor" href="#拆分策略"><span>拆分策略</span></a></h3>',52),U={},J=(0,e(66262).A)(U,[["render",function(l,i){const e=(0,n.g2)("font");return(0,n.uX)(),(0,n.CE)("div",null,[B,(0,n.Lk)("table",null,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("Extra")])),_:1})]),(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("含义")])),_:1})])])]),F]),R,(0,n.Lk)("table",null,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("分类")])),_:1})]),(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("含义")])),_:1})]),(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("特点")])),_:1})])])]),w]),D,(0,n.Lk)("ul",null,[T,(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.eW)("索引优化 "),(0,n.Lk)("strong",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("参考优化创建原则和索引时效")])),_:1})])])]),j]),I,(0,n.Lk)("table",null,[(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("问题")])),_:1})]),(0,n.Lk)("th",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("描述")])),_:1})])])]),(0,n.Lk)("tbody",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("脏读")])),_:1})]),W]),(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("不可重复读")])),_:1})]),N]),(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,[(0,n.bF)(e,{color:"Red"},{default:(0,n.k6)((()=>[(0,n.eW)("幻读")])),_:1})]),V])])]),O])}]]),P=JSON.parse('{"path":"/study-notes/heima-java-bagu/MySQL/","title":"MySQL篇","lang":"zh-CN","frontmatter":{"title":"MySQL篇","category":"面试","description":"提示 视频来源：新版Java面试专题视频教程，java八股文面试全套真题+深度详解（含大厂高频面试真题） 总体介绍： 总体介绍总体介绍 一、优化 1、如何定位慢查询 （页面加载过慢，接口压力测试时间过长，超过1s） 通过开源工具 调试工具：Arthas 运维工具：Skywalking MySQL自带慢日志.【调试阶段】 在/etc/my.cnf中配置,...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/study-notes/heima-java-bagu/MySQL/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"MySQL篇"}],["meta",{"property":"og:description","content":"提示 视频来源：新版Java面试专题视频教程，java八股文面试全套真题+深度详解（含大厂高频面试真题） 总体介绍： 总体介绍总体介绍 一、优化 1、如何定位慢查询 （页面加载过慢，接口压力测试时间过长，超过1s） 通过开源工具 调试工具：Arthas 运维工具：Skywalking MySQL自带慢日志.【调试阶段】 在/etc/my.cnf中配置,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T14:01:30.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:modified_time","content":"2024-09-02T14:01:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-02T14:01:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"总体介绍：","slug":"总体介绍","link":"#总体介绍","children":[]},{"level":2,"title":"一、优化","slug":"一、优化","link":"#一、优化","children":[{"level":3,"title":"1、如何定位慢查询","slug":"_1、如何定位慢查询","link":"#_1、如何定位慢查询","children":[]},{"level":3,"title":"2、SQL语句执行很慢，如何分析（优化）","slug":"_2、sql语句执行很慢-如何分析-优化","link":"#_2、sql语句执行很慢-如何分析-优化","children":[]},{"level":3,"title":"3、了解过索引吗（什么是索引）？","slug":"_3、了解过索引吗-什么是索引","link":"#_3、了解过索引吗-什么是索引","children":[]},{"level":3,"title":"4、索引的底层数据结构了解过吗？ 【扩展：其他索引】","slug":"_4、索引的底层数据结构了解过吗-【扩展-其他索引】","link":"#_4、索引的底层数据结构了解过吗-【扩展-其他索引】","children":[]},{"level":3,"title":"5、B树 和 B+树的区别是什么呢？","slug":"_5、b树-和-b-树的区别是什么呢","link":"#_5、b树-和-b-树的区别是什么呢","children":[]},{"level":3,"title":"6、什么是聚簇（聚集）索引，什么是非聚簇索引（二级索引）？","slug":"_6、什么是聚簇-聚集-索引-什么是非聚簇索引-二级索引","link":"#_6、什么是聚簇-聚集-索引-什么是非聚簇索引-二级索引","children":[]},{"level":3,"title":"7、什么是回表查询","slug":"_7、什么是回表查询","link":"#_7、什么是回表查询","children":[]},{"level":3,"title":"8、什么叫覆盖索引？","slug":"_8、什么叫覆盖索引","link":"#_8、什么叫覆盖索引","children":[]},{"level":3,"title":"9、 MYSQL超大分页怎么处理 ?","slug":"_9、-mysql超大分页怎么处理","link":"#_9、-mysql超大分页怎么处理","children":[]},{"level":3,"title":"9、 索引创建的原则有哪些 ?","slug":"_9、-索引创建的原则有哪些","link":"#_9、-索引创建的原则有哪些","children":[]},{"level":3,"title":"10、 什么情况下索引会失效 ? 【结合实际情况】","slug":"_10、-什么情况下索引会失效-【结合实际情况】","link":"#_10、-什么情况下索引会失效-【结合实际情况】","children":[]},{"level":3,"title":"11、 谈一谈你对SQL优化的经验","slug":"_11、-谈一谈你对sql优化的经验","link":"#_11、-谈一谈你对sql优化的经验","children":[]}]},{"level":2,"title":"二、事务","slug":"二、事务","link":"#二、事务","children":[{"level":3,"title":"12、 事务的特性是什么？可以详细说一下吗？","slug":"_12、-事务的特性是什么-可以详细说一下吗","link":"#_12、-事务的特性是什么-可以详细说一下吗","children":[]},{"level":3,"title":"13、并发事务带来哪些问题？怎么解决这些问题？MySQL的默认隔离级别是？","slug":"_13、并发事务带来哪些问题-怎么解决这些问题-mysql的默认隔离级别是","link":"#_13、并发事务带来哪些问题-怎么解决这些问题-mysql的默认隔离级别是","children":[]},{"level":3,"title":"14、undo log  和  redo log 的区别？","slug":"_14、undo-log-和-redo-log-的区别","link":"#_14、undo-log-和-redo-log-的区别","children":[]},{"level":3,"title":"15、事务中的隔离性如何保证的？","slug":"_15、事务中的隔离性如何保证的","link":"#_15、事务中的隔离性如何保证的","children":[]}]},{"level":2,"title":"三、主从同步","slug":"三、主从同步","link":"#三、主从同步","children":[{"level":3,"title":"16、MySQL主从同步原理？","slug":"_16、mysql主从同步原理","link":"#_16、mysql主从同步原理","children":[]}]},{"level":2,"title":"四、分库分表","slug":"四、分库分表","link":"#四、分库分表","children":[{"level":3,"title":"拆分策略","slug":"拆分策略","link":"#拆分策略","children":[]}]}],"git":{"createdTime":1722091391000,"updatedTime":1725285690000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":3}]},"readingTime":{"minutes":11.72,"words":3517},"filePathRelative":"study-notes/heima-java-bagu/MySQL/README.md","localizedDate":"2024年7月27日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>视频来源：<a href=\\"https://www.bilibili.com/video/BV1yT411H7YK/?vd_source=7138dfc78c49f602f8d3ed8cfbf0513d\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">新版Java面试专题视频教程，java八股文面试全套真题+深度详解（含大厂高频面试真题）</a></p>\\n</div>\\n<h2>总体介绍：</h2>\\n<figure><figcaption>总体介绍</figcaption></figure>","autoDesc":true}')}}]);