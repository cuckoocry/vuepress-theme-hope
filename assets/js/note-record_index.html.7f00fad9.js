"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[7123],{66262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,p]of t)n[e]=p;return n}},40744:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>r,data:()=>a});var p=n(20641);const o=[(0,p.Fv)("<p>笔记的总览。将学习的知识点总结和归纳。</p><ul><li><p>1、你们项目中有没有做过限流 ? 怎么做的 ? 漏铜算法、令牌桶</p></li><li><p>2、Redis 集群,中从复制等 数据同步：分布式锁，MQ异步通知、Canal（无代码嵌入） 集群方案： 主从复制：读写分离。（全量同步，增量同步）。保证不了高可用 哨兵模式：实现主从集群的自动故障恢复(监控、自动故障恢复、通知) 分片集群：解决海量数据，高并发。集群中有多个master，每个master保存不同数据。引入了哈希槽的概念</p><p>为什么快：内存操作，单线程、IO多路复用。性能瓶颈是网络延迟。监听多个Socket，避免无效等待。</p></li><li><p>3、消息中间件 保证不丢失：开启生产者确认机制、开启持久化功能、开启消费者确认机制为auto 重复消费问题:业务的唯一标识、（典型的幂等的问题）redis分布式锁、数据库的锁 消息堆积：:提高消费者的消费能力，使用多线程、增加消费者、扩大队列容积</p></li><li><p>4、微服务 注册中心、负载均衡、远程调用、服务熔断、网关</p><p>注册中心：服务注册 、服务发现、服务状态监控 Nacos与Eureka的区别：Nacos集群默认采用AP方式</p></li></ul><p>负载均衡如何实现的: Ribbon 组件实现，, Feign的底层已经自动集成了Ribbon。</p><p>Ribbon负载均衡策略:轮询、权重、随机、区域敏感</p><p>服务雪崩：一个服务失败，导致整条链路的服务都失败的情形。 解决：第一个是服务降级，第二个是服务熔断，如果流量太大的话，可以考虑限流</p><p>分布式服务的接口幂等性如何设计：（保证重复调用的结果和单次调用的结果一致）。<code>token+redis</code></p><ul><li>JVM 程序计数器：完成分支、循环、跳转、异常处理、线程恢复 方法区：存储了每一个类的结构信息。包括：运行时常量池、字段</li></ul><p>MySQL 锁</p><p>排查问题</p><p>MQ高并发</p>",10)],i={},r=(0,n(66262).A)(i,[["render",function(e,t){return(0,p.uX)(),(0,p.CE)("div",null,o)}]]),a=JSON.parse('{"path":"/note-record/","title":"学习笔记总结","lang":"zh-CN","frontmatter":{"title":"学习笔记总结","category":"学习笔记","description":"笔记的总览。将学习的知识点总结和归纳。 1、你们项目中有没有做过限流 ? 怎么做的 ? 漏铜算法、令牌桶 2、Redis 集群,中从复制等 数据同步：分布式锁，MQ异步通知、Canal（无代码嵌入） 集群方案： 主从复制：读写分离。（全量同步，增量同步）。保证不了高可用 哨兵模式：实现主从集群的自动故障恢复(监控、自动故障恢复、通知) 分片集群：解决海...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/note-record/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"学习笔记总结"}],["meta",{"property":"og:description","content":"笔记的总览。将学习的知识点总结和归纳。 1、你们项目中有没有做过限流 ? 怎么做的 ? 漏铜算法、令牌桶 2、Redis 集群,中从复制等 数据同步：分布式锁，MQ异步通知、Canal（无代码嵌入） 集群方案： 主从复制：读写分离。（全量同步，增量同步）。保证不了高可用 哨兵模式：实现主从集群的自动故障恢复(监控、自动故障恢复、通知) 分片集群：解决海..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T14:34:23.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:modified_time","content":"2024-08-07T14:34:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"学习笔记总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-07T14:34:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1722093117000,"updatedTime":1723041263000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":4}]},"readingTime":{"minutes":1.86,"words":557},"filePathRelative":"note-record/README.md","localizedDate":"2024年7月27日","excerpt":"<p>笔记的总览。将学习的知识点总结和归纳。</p>\\n<ul>\\n<li>\\n<p>1、你们项目中有没有做过限流 ? 怎么做的 ?\\n漏铜算法、令牌桶</p>\\n</li>\\n<li>\\n<p>2、Redis 集群,中从复制等\\n数据同步：分布式锁，MQ异步通知、Canal（无代码嵌入）\\n集群方案：\\n主从复制：读写分离。（全量同步，增量同步）。保证不了高可用\\n哨兵模式：实现主从集群的自动故障恢复(监控、自动故障恢复、通知)\\n分片集群：解决海量数据，高并发。集群中有多个master，每个master保存不同数据。引入了哈希槽的概念</p>\\n<p>为什么快：内存操作，单线程、IO多路复用。性能瓶颈是网络延迟。监听多个Socket，避免无效等待。</p>\\n</li>\\n<li>\\n<p>3、消息中间件\\n保证不丢失：开启生产者确认机制、开启持久化功能、开启消费者确认机制为auto\\n重复消费问题:业务的唯一标识、（典型的幂等的问题）redis分布式锁、数据库的锁\\n消息堆积：:提高消费者的消费能力，使用多线程、增加消费者、扩大队列容积</p>\\n</li>\\n<li>\\n<p>4、微服务\\n注册中心、负载均衡、远程调用、服务熔断、网关</p>\\n<p>注册中心：服务注册 、服务发现、服务状态监控\\nNacos与Eureka的区别：Nacos集群默认采用AP方式</p>\\n</li>\\n</ul>","autoDesc":true}')}}]);