### 多选框 

#### 可能会用到的场景
1. 状态切换
2. 表单多选

> 对组件的设计可以分为样式部分和功能部分考虑


####  样式上可能需要定制化的部分 
**定制需要区分全局(多选框组)和局部(单个多选框)**
1. 禁用状态  | 多选框禁止点击
2. 文本禁止点击 | 点击label无法触发
3. 选中颜色 | 可以传入css颜色值
4. 图标大小 | 可以传入css长度值
5. 图标形状 | 默认圆形,可以使用方形图标
6. 图标自定义 | 包括使用内置图标 和 使用第三方图片 
7. 多选框组内联



#### 功能上需要区别应用场景
> 多选框的组件的设计需要考虑到 两种使用场景的区别, **切换状态** 和 **表单多选**
##### 如果是状态切换时
组件只有一个,需要绑定Boolean类型的v-model值
##### 如果是表单多选 
基础多选框组件需要外层被group组件包裹,group绑定一个Array数组类型的v-model值

组件设计初期需要判断在哪种场景使用组件,组件中需要定义计算属性,通过组件是否被group组件包裹,从而判断组件而定应用场景.
```
 parentGroup() {
      let parent = this.$parent;
      // 这里使用循环的原因是 多选框可能不会直接嵌套在group组中,可能会与cell组件混用,需要向上查找group组件
      while (parent) {
        if (parent.$options.componentName && parent.$options.componentName === 'JiemiccChockboxGroup') {
          break;
        }
        parent = parent.$parent;
      }
      return parent;
    },
```


group也会在保存自己的组内多选框,以便实现全选和反选的功能.

----
 多选框组件的许多特性会区别对待两种使用场景: 

  **多选框自身绑定的v-mode值**
```
model: {
      get() {
        return this.parentGroup
          ? this.parentGroup.value
          : this.value !== undefined
            ? this.value
            : this.selfModel;
      },
      set(val) {
        if (this.parentGroup) {
          this.parentGroup.$emit('change', val);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = true;
        }
      },
```
model为多选框自身的v-model计算属性
1. model的get需要优先获取group的值,其次是组件传入的v-model,selfModel为获取失败时组件自身的缺省值.
2. model的set也会分三个部分去区分当前组件的使用场景

**自定义样式**

```
 checkboxIconSize() {
      return this.iconSize || (this.parentGroup && this.parentGroup.iconSize);
    },
```
样式自定义使用计算属性来实现,可全局设置和局部设置,且局部设置优先.

####  多选框组功能定制

##### 限制选择数

**多选时,经常需要限定最大或最小选择数,可以在group组件中传入 min 以及 max 的prop属性,进行控制**
```
 isLimitDisbled() {
      if (!this.parentGroup) return false;
      const { max, min } = this.parentGroup;

      return !!(min || max) && (this.model.length <= min && this.checkboxChecked) || (this.model.length >= max && !this.checkboxChecked);
    },
```
计算属性 isLimitDisbled代表着 **多选框的限制状态**,包括样式和功能上的体现.
我们需要思考在什么情况下限制多选框的选择:
1. 当min 和 max 至少有一个限定
2. 当前选择组的选定数量小于等于最小数,且选定框当前为选定状态
2. 当前选择组的选定数量大于等于最小数,且选定框当前不在选定状态


##### 反选和全选

**group组件中定义相关方法,可以在适当的时候触发**
```
chooseToggle(all) {
      if (all) {
        this.checkboxChild.forEach((child) => {
          child.initChecked();
        });
      } else {
        const allValue = this.checkboxChild.map(child => child.label);
        const subValue = allValue.filter(val => !this.value.includes(val));
        this.$emit('change', subValue);
      }
    },
````

1. 传入参数**all**代表全选, 遍历group组件的多选框子组件触发initChecked方法(不是选定更改为选定)
2. 不传入参数即为反选, 求得全部可选和已选的差值即可.(之前考虑过模拟触发checkbox的click事件,但是会vue的dom处理时是异步更新的,只会缓存最后一个点击结果的model值)

#### 与cell组件嵌套使用
```
 chooseItem(index) {
      this.checkboxChild[index].$el.click();
    },
```
group定义主动点击多选框方法,当cell点击时触发即可.
但是要注意,不能在需要在**多选框组件禁止点击冒泡**,
不禁止会在点击多选框时同时触发cell点击事件,两这样就两次点击效果相反.
