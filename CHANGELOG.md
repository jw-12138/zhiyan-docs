# Change Log

## 1.3.3

<span style="font-size: 12px">2023-12-19</span>

- 新增 `mixtral-8x7b` 模型，该模型支持32k上下文，能力对标 OpenAI 的 gpt-3.5，不过目前不支持中文。


## 1.3.2

<span style="font-size: 12px">2023-12-06</span>

- 修复若干bug
- 接口速度优化


## 1.3.1

<span style="font-size: 12px">2023-11-29</span>

- 识图模型支持解析高分辨率图片


## 1.3.0

<span style="font-size: 12px">2023-11-29</span>

- 新增GPT-4-Vision模型支持
- 修复若干bug


## 1.2.4

<span style="font-size: 12px">2023-11-13</span>

为了更好的迎合新模型的超大上下文窗口，我们把 Web 端存储介质由 LocalStorage 转换到了 IndexedDB。


## 1.2.3

<span style="font-size: 12px">2023-11-09</span>

### 新增模型

「只言」现已添加 gpt-4-turbo 模型，该模型最大 token 承载窗口高达12万，能够更好的满足长文本处理的需求。


## 1.2.2

<span style="font-size: 12px">2023-11-07</span>

### 模型更新

我们将 OpenAI 的 3.5-turbo 与 3.5-turbo-16k 模型进行了合并，点数计费也进行了调整，用户输入由之前的 0.75 倍降为 0.5 倍，AI生成的点数倍数不变。


## 1.2.1

<span style="font-size: 12px">2023-10-30</span>

- 现在可编辑历史记录标题


## 1.2.0

<span style="font-size: 12px">2023-10-25</span>

「只言」终于有了记录历史对话的功能，现在所有的聊天记录都会同步到您的客户端，且只有您自己可见！🎉


## 1.1.2

<span style="font-size: 12px">2023-10-17</span>

新增部署在 Azure 平台的 `gpt-3.5-turbo-16k` 模型，虽然加了过滤器使用起来不是很友好，但是速度与稳定性依旧是优于 OpenAI 的。


## 1.1.1

<span style="font-size: 12px">2023-10-16</span>

「只言」现在支持对话裁切功能啦！

默认已开启裁切10条，可以在设置里关闭哦！


## 1.1.0

<span style="font-size: 12px">2023-10-14</span>

「只言」更换新域名啦！

您现在可以在 https://zhiyan.dev 使用只言！


## 1.0.4

<span style="font-size: 12px">2023-09-20</span>

- 添加通知模块
- 优化用户体验


## 1.0.3

<span style="font-size: 12px">2023-08-10</span>

**BREAKING CHANGE**

由于图片生成模型不够成熟与稳定，我们决定删除`gpt-3.5-turbo`与`gpt-3.5-turbo-16k`的图片生成功能。

万分抱歉！


## 1.0.2

<span style="font-size: 12px">2023-08-08</span>

- 添加了一个切换按钮，用于切换默认渲染HTML还是Markdown  
- 在Markdown渲染模式下，添加动画效果


## 1.0.1

<span style="font-size: 12px">2023-08-03</span>

- 添加本地验证模块，优化用户体验


## 1.0.0

<span style="font-size: 12px">2023-08-01</span>

#### 只言 1.0 版本来啦！

虽然「只言」目前已经关闭了注册，但是我还是觉得能够服务一小部分人是一件非常开心的事情，条件允许的情况下，这个网站应该会一直维护下去！

以后的每次更新，或小或大，都会以这种方式呈现在大家面前！

感谢支持！

