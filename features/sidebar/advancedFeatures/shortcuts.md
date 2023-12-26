# 捷径

捷径应该是「只言」目前最强大的也是最容易被用户忽略的功能。

目前我们提供四个捷径：

* 只言
* 翻译
* 写作改进
* 代码助手

其中，「只言」是默认捷径。

---

如果你细看的话会发现，每个捷径被分为三块功能，分别是：

* 导语
* 消息前后缀
* 是否叠加聊天记录

![](https://blog-r2.jw1.dev/fKsKQKX7Fpkk4kHO.png ':size=300')

- 导语的意义在于，将你想象的应用场景告诉语言模型，并规范它的输出。
- 指定消息前后缀，会在每条用户消息发出前插入一个引导性的文本。
- 是否叠加聊天记录取决于你的任务类型是不是需要上下文。

这三个功能一叠加，你可以真正发掘语言模型的潜力。

---

就拿「翻译」来举例，在导语中我告诉模型：“The user will provide you the text that needs to be translated inside triple quotes, you need to accurately translate the user's input either from Chinese to English or from English to Chinese and output without the quotes. It is important to ensure that the user's intended meaning is not lost in translation.” 

翻译成中文就是：“用户将向您提供需要在三引号内翻译的文本，您需要准确地将用户输入的中文翻译成英文或将英文翻译成中文，然后不带引号地输出。 确保用户的本意不会在翻译中丢失，这一点很重要。”

消息前缀和后缀都被设置为三引号，且不叠加历史，这样你就创造出了一个全自动的中英翻译机。

![video](https://blog-r2.jw1.dev/68OrEOo6KZb2XwJA.mp4)
