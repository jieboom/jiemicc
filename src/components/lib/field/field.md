**filed** 
fiel为基础输入组件,默认为text模式,也包含password , number,digit以及tel等模式, 可设置只读和不可用模式,以及简单的错误处理.
#### 基础模式
使用v-model绑定输入值,也可以使用placeholder设置占位词
#### 自定义类型
可以使用特定键盘对应特定场景,比如密码,整数等等.
 1. iOS 可以调用原生键盘比较统一,
 2. Android 系统碎片化,国内的厂商禁用了谷歌键盘,效果不统一.
整数模式中,ios使用number模式,并配合pattern,Android使用tel替代
3. search类型下,在被form包裹情况下可调用search软键盘,input下监控keycode === 13 (搜索键),表单提交默认刷新页面,所以需要组织默认事件
#### 输入框禁用
设置readonly  用户不可更改输入值
设置disabled  输入框不可使用

顺便记录一下 **readonly 与 disabled的区别**

readonly 只对 text/password/textarea有效,disabled对所有表单元素都有效
readonly可读属性, 表单数据用户不可更改,
disabled禁用属性, 表单数据不可更改且表单事件失效(包括click和focus等等)

#### 插入图标
可在左侧或者右侧插入图标,也可添加清空输入(有输入且focus状态)
#### 错误提示 
设置required属性, 输入框有<i style="color:red;">*</i>标识
设置messag-error属性,会出现错误提示
#### 插入按钮
使用#butto的插槽,可以插入按钮
### 高度自定义
当type为textarea时,设置autosize 可以设置文本高度自适应
(textarea 高度只会按rows静态设定,或者resize手动调整,但是无法自动适应)
解决办法: 在input输入时,监听scrolltop属性,从而设置input的高度