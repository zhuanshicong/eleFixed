## 介绍(eleFixed魔改,原作者:KenyeeC)

eleFixed是一款非常简单的使用动画来固定元素的插件（最常见的作用就是固定table的thead）。

它可以同时绑定多个HTMLElement，而且你也可以随时解绑任一个已绑定对象。

## 使用

引入eleFixed.js

```html
<script src="eleFixed.js"></script>
```

后你需要创建一个实例

```JavaScript
var eleFixedInstance = new eleFixed();
```

##### 以下为eleFixed实例方法的描述：

方法 | 描述
---|---
bind | Function，接受一个option对象并添加滚动事件监听。
unbind | Function，接受一个需要解绑的对象,取消绑定并解除事件监听。


##### eleFixedInstance.bind(option)需要传入参数描述：
option对象 | 描述
--- |---
target | HTMLElement,接收你想固定的元素，比如 document.getElementsByTagName('thead')[0]
scroll|HTMLElement,被固定元素所在的滚动容器
offsetTop | Number，此元素距离滚动容器顶部多少像素时开始固定在顶部， 比如 0(固定在容器最顶) (无需单位)


##### 示例:

```html
    <div id="tableContainer">
        <table>
            <thead id="frozeEle">
                <!-- some titles here -->
            </thead>
            <tbody>
                <!-- some elements here -->
            </tbody>
        </table>
    </div>
    <script src="./eleFixed.min.js"></script>
    <script>
        var eleFixedInstance = new eleFixed();
        // add an instance
        eleFixedInstance.bind({
            target: document.getElementById('frozeEle'), // it must be a HTMLElement
            scroll: document.getElementById('tableContainer'),// it must be a HTMLElement
            offsetTop: 0 // height from window offsetTop
        })
    </script>
```
```html
<script>
    // delete an instance
    eleFixed.unbind(document.getElementsByTagName('thead')[0])// it must be a HTMLElement that you have bound in the bind method;
</script>
```
##### 效果预览：
![image](https://raw.githubusercontent.com/zhuanshicong/eleFixed/master/demo.gif)
##### Demo：
[link]https://raw.githubusercontent.com/zhuanshicong/eleFixed/master/demo.html)
##### 删除元素:

