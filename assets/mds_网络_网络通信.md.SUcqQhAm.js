import{_ as i,c as l,o as a,U as p,ag as t}from"./chunks/framework.pR8v3qv_.js";const f=JSON.parse('{"title":"网络通信","description":"","frontmatter":{"urlname":"network","title":"网络通信","updated":"2024-01-13 18:37:31","date":"2024-01-13 16:42:12","status":"已发布","catalog":["网络"]},"headers":[],"relativePath":"mds/网络/网络通信.md","filePath":"mds/网络/网络通信.md"}'),e={name:"mds/网络/网络通信.md"},o=p('<p>网络通信中有 tcp/ip、ftp、arp、http 等这些协议或模型，他们本质上解决的问题其实是主机与主机之间的网络通信的问题。</p><h2 id="主机通信的必要条件" tabindex="-1">主机通信的必要条件 <a class="header-anchor" href="#主机通信的必要条件" aria-label="Permalink to &quot;主机通信的必要条件&quot;">​</a></h2><ol><li><p>主机之间需要有传输介质 例如网线、光纤、蓝牙、Wifi 等。</p></li><li><p>主机上必须要有网卡设备 主要完成信号的调制和解调。无论我们使用哪种编程语言，计算机都不能直接识别，因为在计算机的世界中，一切都是以二机制的形式存在。A 主机将封装好的二进制数据，通过网卡转换为电信号（调制），再通过传输介质发送给 B 主机；B 主机接收到信号后，通过网卡将电信号转换为二进制（解调），再由 B 主机自己的通信体系对数据进行拆包、解包，最终在我们的应用程序里获取到 A 主机发送过来的数据。</p></li><li><p>主机之间需要协商网络速率 A、B 主机由于网卡的网络速率不同，所以在通信之间需要协商网络速率，让他们保持一致。</p></li></ol><h2 id="网络通讯方式" tabindex="-1">网络通讯方式 <a class="header-anchor" href="#网络通讯方式" aria-label="Permalink to &quot;网络通讯方式&quot;">​</a></h2><ol><li><p>交换机通信</p></li><li><p>路由器通信</p></li></ol><p><img src="'+t+'" alt="image.png"></p><h2 id="网络层次模型" tabindex="-1">网络层次模型 <a class="header-anchor" href="#网络层次模型" aria-label="Permalink to &quot;网络层次模型&quot;">​</a></h2><p>为了兼容不同厂商生产的不同品牌的设备，需要一个组织对它们制定一个模型，这个模型就是七层网络模型 OSI。 这个模型分别有物理层、数据链路层、网络层、传输层、会话层、表示层、应用层。</p><ol><li><p>物理层：各种物理设备和标准</p></li><li><p>数据链路层：确定目标主机</p></li><li><p>网络层：确定目标网络</p></li><li><p>传输层：控制数据传输可靠性</p></li><li><p>会话层：控制网络连接建立与终止</p></li><li><p>表示层：数据加密、转换、压缩</p></li><li><p>应用层：用户与网络的接口</p></li></ol><p>数据从 A 主机发送到 B 主机时，先根据层次从高到低的进行封装，到了 B 主机后，会根据层次从低到高一层一层的解包数据，最后在应用层中拿到 A 主机发送过来的原始数据。 tcp/ip 模型：</p><ol><li><p>物理层</p></li><li><p>数据链路层</p></li><li><p>网络层</p></li><li><p>传输层</p></li><li><p>应用层</p></li></ol>',11),r=[o];function s(_,n,c,d,h,m){return a(),l("div",null,r)}const A=i(e,[["render",s]]);export{f as __pageData,A as default};
